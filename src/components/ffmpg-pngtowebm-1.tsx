




import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import { ObjValue, } from "components/util/enum-namespaces";
import { 
  Enum, 
  EnumValue,  
} from "components/util/enum-namespaces";
import SS, { identity } from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import Immutable from "immutable";

namespace Ff {

  export type FilteringUnitDesc = string | ProFilteringUnitDesc1 ;
  export abstract class ProFilteringUnitDesc1 {} ;
  export type FilterChainDesc = [
    fChain: FilteringUnitDesc[], 
    fChainOptions ?: {}, 
  ] ;
  export const filterChainListStringify = (
    (...[src,] : [
      (
        never
        | Ff.FilterChainDesc[]
      ) ,
    ]  ) => (
      src
      .map(([c, options = {}, ]) => {
        return (
          c.join(",")
        ) ;
      } )
      .join(" ; ")
    )
  ) ;

  ; // TS-1205
}









/**   
 * will need to be async to defer `throw TypeError`s .
 * 
 */
const ffmpgImportAsync = (
  import ("components/ffmpg")
) ;



/**    
 * callers shall take care of the `.isLoaded()` thing.
 * 
 */
const newFfmpeg1 = (
  async () => {
    const {
      ffmpegNewInstance ,
    } = (
      await ffmpgImportAsync
    ) ;
    const ffmpeg = (
      ffmpegNewInstance()
    ) ;
    return ffmpeg ;
  }
) ;



const pngAsWebm = (
  async (...[p, options , ] : [
    src: File, 
    options : (
      {} 
      & { 
        /**    
         * this parameter 
         * is very important to specify since 
         * (a) end-users dislike low-res products 
         * (b) HQ-and-HD will require work/load infeasible for real-time processing
         * 
         */
        quality: "realtime-preview" | "click-preview" | "classy" ; 
      }
      & Partial<{ 
        /**    
         * rather than having to deal-with complexities arising from needing to default the (relevant) streams,
         * it'd be important to introduce silent, fallback streams.
         * 
         * if specified to `false` then
         * the stream will not be defaulted.
         * 
         */
        audioStreamShall: boolean ; 
      }>
      & Partial<{ impl : import("@ffmpeg/ffmpeg").FFmpeg ; }>
      & Partial<{ verboseLog : boolean ; }>
    ) , 
  ]) => {
    const { verboseLog = false , } = options ;
    const { impl: callerSpecifiedFf = null , } = options ;
    const { quality = "click-preview" , } = options ;
    const { audioStreamShall = true , } = options ;
    const ffmpeg = ( 
      callerSpecifiedFf ||
      await newFfmpeg1()
    ) ;
    const { lastModified: assumedLastModifiedDate, } = p ;
    console["log"]({
      quality ,
      audioStreamShall ,
    }) ;
    ;
    const [f1a, ] = await (async () => {
      ;
      ffmpeg.isLoaded() || await ffmpeg.load() ;
      try {
        const srcfileDotJpg = (
          "p-a" + ((p.name.match(/\.\w+$/g) || [] )[0] ?? "" )
        );
        const finalFileDotJpg = "o.webm";
        ffmpeg.FS("writeFile", (
          srcfileDotJpg
        ) , new Uint8Array(await p.arrayBuffer() ), ) ;
        {
        ;
        console.groupCollapsed(`ffmpeg.run(....) ;`);
        try {
        ;
        ffmpeg.run(...[
          /** the banners would be infeasible here */
          ...(
            verboseLog ?
            [ "-loglevel", "info", ]
            : 
            [ "-hide_banner" , ]
          ) ,  
          ...[
            "-loop", "1", // `image2` (demuxer) 
            "-framerate", "5", // `image2` (demuxer) 
            "-i", srcfileDotJpg,  
          ],
          ...(
            audioStreamShall ?
            [
              "-f", "lavfi",
              "-i", [`aevalsrc=0 [out${ 0 }] `, ].join(" ; ") ,
            ]
            : []
          ) ,
          ...[
            /**    
             * - advanced codecs typically would abort on transparency-enabled fmts
             * - prever YUV(s) over RGB(s) and HS*(s)
             * 
             */
            "-filter:v", (
              Ff.filterChainListStringify([ 
                [
                  [
                    (quality === "realtime-preview" ? `scale=256*256` : "null" ),
                    `format=pix_fmts=yuv420p` ,
                  ] ,
                ] ,
              ], )
            ) , 
            /**    
             * necessary, otherwise there'd be nothing to limit the duration/length.
             * 
             */
            "-t", (8).toFixed(1), 
            "-format", "matroska", 
            "-c:v", "libvpx", 
            /**    
             * `Neither bitrate nor constrained quality specified, using default CRF of 32`
             * 
             */
            "-b:v", `${ 500E3.toFixed(0,) }`, 
            finalFileDotJpg ,
          ], 
        ]) ;
        } finally {
          ;
          console.groupEnd() ;
        }
        }
        const f1Bytes = (
          ffmpeg.FS("readFile", finalFileDotJpg, )
        ) ;
        const f1 = (
          new File([f1Bytes, ], `generated.webm`, { 
            lastModified: assumedLastModifiedDate, 
            type: "video/webm" ,
          } )
        ) ;
        return [f1, ] as const ;
        // TODO
      } finally {
        ffmpeg.exit() ;
      }
    } )() ;
    return f1a ;
  }
) ;












export { ffmpgImportAsync, } ;
export { newFfmpeg1 , } ;
export { pngAsWebm , } ;



