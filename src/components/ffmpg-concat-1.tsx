












import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import SS from "lodash" ;
import { Seq, List,   } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import {  Map, } from "immutable";
import {   Set, } from "immutable";
import { SortedMap, } from "components/util-immutable-datastructure";
import { SortedSet, } from "components/util-immutable-datastructure";

export {} ; // TS-1208








/**    
 * relies on either the `concat` filter or the `concat` demuxer or the `lavfi` cap-device
 * 
 */
const toFfConcat = (
  (...[seq, options1 , ...otherArgs ] : (
    Parameters<typeof toFfConcat1> extends readonly [infer Sq, ...(infer OtherArgs )] ?
    [
      Sq, 
      ({} & { assumedWh : [number, number? ,] ; }) ,
      ...OtherArgs , 
    ]
    : never
  ) ) => {
    const { assumedWh , } = options1 ;
    return (
      toFfConcat1([
        ...seq ,
        FNF_SPOILER({ duration: 3, }, { wh: assumedWh, }, ) ,
      ], ...otherArgs )
    ) ;
  }
) ;
const toFfConcat1 = (
  (...args : [
    (
      {} 
      & { path : string ; } 
      & Partial<{ fmt : string ; }> 
    )[], 
  ] ) => {
    const [inputs1, ] = args ;
    ;
    const inputs = (
      inputs1
      .map(({ path: fileName, fmt = null , }): string[] => {
        return [
          ...(fmt ? ["-f", fmt, ] : [] ) ,
          "-i", fileName,
        ] ;
      } )
    ) ;
    const output = ((): string[] => [
      "-f", "matroska" ,
      "-t", "900" ,
      "-c:v", "libvpx" ,
      "-b:v", `${500E3 }` ,
      "o.webm" ,
    ] )() ;
    const flGraphSection = [
      "-filter_complex" ,
      ((): string => {
        const n = inputs1.length ;
        const ld = (
          /**    
           * the input-label(s)
           * 
           */
          inputs1
          .map(({ path: fileName, }, i, ): string => {
            return `[${i}:0 ] [${i}:1 ] ` ;
          } )
          .join(" ")
        ) ;
        return (
          `${ld } concat=n=${n }:v=1:a=1 `
        ) ;
        ;
      } )() ,
    ] ;
    ;
    return (
      <A1 extends string[] , A2,>(v: A1) => v
    )([
      "-hide_banner" ,
      ...(
        inputs
        .flat()
      ) ,
      ...flGraphSection ,
      ...output ,
    ]) ;
  }
) ;
export { toFfConcat as concatAsFfConvArgs , } ;
const FNF = (
  function (...c : [
    [fileName: string ,] ,
    (
      {} 
      & { wh: [number, number?, ] ; }
    ) ,
  ]): Required<Parameters<typeof toFfConcat1> >[0][number] {
    const [[fileNameFinal, ], { wh, }, ] = c ;
    const [width, height = width, ] = wh ;
    return {
      fmt: "lavfi" ,
      path: [
        `movie=${fileNameFinal }:f=matroska:s=dv+da [V1][A1] ` ,
        `[V1] scale=${width }*${height },setdar=dar=${width }/${height } [out0] ` ,
        `[A1] acopy [out1] ` ,
      ].join(" ; ") ,
    } ;
  }
) ;
const FNF_SPOILER = (
  (...c : [
    {} & { duration : number ; } ,
    Required<Parameters<typeof FNF > >[1] ,
  ]): Required<Parameters<typeof toFfConcat1> >[0][number] => { 
    const [{ duration, }, { wh, }, ] = c ;
    const [width, height = width, ] = wh ;
    return {
      fmt: "lavfi", 
      path: [
        `testsrc=duration=${duration.toFixed(1)}:size=${width }*${height } [out0]`, 
        `aevalsrc=0:duration=${duration.toFixed(1)} [out1]` ,
      ].join(" ; ") ,
    } ;
  }
) ;
export { FNF as FNF , } ;




;