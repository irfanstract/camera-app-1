

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

import { canvas2DImgSrcFromHref, } from "components/canvas2DImgSrcFromHref";
import {
  svgStandaloneCodeAsBlob ,
  svgStandaloneCodeAsSvgDataUrl ,
} from "components/svgFileFromCode11";












const svgStandaloneCodeAsDataUrl = (
  svgStandaloneCodeAsSvgDataUrl
) ;
const svgStandaloneCodeAsUrl = (
  svgStandaloneCodeAsSvgDataUrl
) ;
const {
  svgStandaloneCodeAsSimpleImgUrl ,
  svgStandaloneCodeAsSimpleBlob ,
} = (() => {
  type Args = [
    code: string,
    options ?: (
      {}
      & Partial<{ quality : number ; upscaling : number ; }>
      & Partial<{ format : "jpeg" | "png" ; }>
    ) ,
  ] ;
  const svgStandaloneCodeRenderedCanvas = (
    async (...[asSvgStdaloneCode, options = {} ,] : Args ) => {
      const { 
        quality: expectedQuality ,
        upscaling : upscaling = 1.5 ,
        format: expectedFmtName,
      } = options ;
      const asImg = (
        await svgStandaloneCodeAsCanvas2DImgSrc(asSvgStdaloneCode, )
      ) ;
      const c = (
        document.createElement("canvas")
      ) ;
      c.width  = upscaling * asImg.width ;
      c.height = upscaling * asImg.height ;
      const cc = (
        c.getContext("2d")!
      ) ;
      cc.scale(upscaling, upscaling, ) ;
      cc.drawImage(asImg, 0, 0, ) ;
      return [c, { expectedQuality, expectedFmtName, }, ] as const ;
    }
  ) ;
  type TypeAndQualityPair = (
    Parameters<HTMLCanvasElement["toDataURL"] >
  ) ;
  const toCanvasBlobifyArgs = (
    function ({
      expectedQuality ,
      expectedFmtName ,
    } : (
      {}
      & Pick<(
        (
          ReturnType<typeof svgStandaloneCodeRenderedCanvas > extends Promise<infer E> ?   
          E : never 
        ) extends readonly [infer C, infer Ctx ] ?
        Ctx 
        : never
      )  , "expectedFmtName" | "expectedQuality" >
    ) ) : TypeAndQualityPair {
      if (typeof expectedQuality === "number") {
        return ["image/jpeg", expectedQuality, ] ;
      }
      if (expectedFmtName === "jpeg" ) {
        return (
          ["image/jpeg", ]
        ) ;
      }
      return [] ;
    }
  ) ;
  return {
    svgStandaloneCodeAsSimpleImgUrl: (
      async (...args : Args ): Promise<string> => {
        const [c, { expectedQuality, expectedFmtName, }, ] = (
          await svgStandaloneCodeRenderedCanvas(...args, )
        ) ;
        return (() => {
          return (
            c.toDataURL(...toCanvasBlobifyArgs({ expectedQuality, expectedFmtName, }) )
          ) ;
        })() ;
      }
    ) ,
    svgStandaloneCodeAsSimpleBlob: (
      async (...args : Args ): Promise<Blob> => {
        const [c, { expectedQuality, expectedFmtName, }, ] = (
          await svgStandaloneCodeRenderedCanvas(...args, )
        ) ;
        return (
          await (
            new Promise<Blob>((RTRUE, RFALSE) => (
              c.toBlob((blb, ) => (
                blb ?
                RTRUE(blb,)
                : RFALSE(TypeError(`failed`) )
              ) , ...toCanvasBlobifyArgs({ expectedQuality, expectedFmtName, }) )
            ))
          )
        ) ;
      }
    ) ,
  } ;
} )() ;


const {
  htmlSvgCodeAsSvgStandaloneCode ,
} : HSCASSC = {
  htmlSvgCodeAsSvgStandaloneCode: (
    (...[asHtmlSvgCode,]: [code: string,]) => {
      const auxContainer1 = (
        document.createElement("article")
      ) ;
      auxContainer1.innerHTML = (
        asHtmlSvgCode
      ) ;
      return (
        (new XMLSerializer ).serializeToString(auxContainer1.querySelector("svg")! )
      ) ;
    }
  ) ,
} ;
type HSCASSC = {
  /**   
   * given a "simplified SVG  code",
   * render as SVG XML
   * 
   */
  htmlSvgCodeAsSvgStandaloneCode : {
    (code: string,): string ;
  }
} ;
// function HSCASSC(): HSCASSC {
//   ;
// } 
;
/**    
 * 
 */
const svgStandaloneCodeAsCanvas2DImgSrc = (
  (...[svgCode,]: [code: string,]) => (
    canvas2DImgSrcFromHref((
      svgStandaloneCodeAsSvgDataUrl(svgCode, )
    ), )
  )
) ;
const consoleLOgSvgStandalone = (
  async (...[svgCode,]: [code: string,]) => {
    const asImg = (
      await svgStandaloneCodeAsCanvas2DImgSrc(svgCode, )
    ) ;
    console["log"](asImg, )
  }
) ;


export {
  svgStandaloneCodeAsBlob as svgStandaloneCodeAsBlob ,
  svgStandaloneCodeAsSvgDataUrl ,
  svgStandaloneCodeAsDataUrl,
  svgStandaloneCodeAsUrl , 
  svgStandaloneCodeAsSimpleImgUrl as svgStandaloneCodeAsPortableImgUrl ,
  svgStandaloneCodeAsSimpleBlob as svgStandaloneCodeAsPortableImgBlob ,
} ;
export { 
  htmlSvgCodeAsSvgStandaloneCode ,
  svgStandaloneCodeAsCanvas2DImgSrc as svgStandaloneCodeAsLoadedImg ,
  consoleLOgSvgStandalone ,
  
} ;



