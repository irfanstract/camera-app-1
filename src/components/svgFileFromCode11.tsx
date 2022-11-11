

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














export const {
  svgStandaloneCodeAsBlob ,
  svgStandaloneCodeAsSvgDataUrl ,
} = (() => {
  const mimeTypeAndArgs = "data:image/svg+xml;charset=utf-8" ;
  return {

    /**   
     * note that UA(s) tend to dislike overly-long `data:` URL(s) ;
     * consider {@link svgStandaloneCodeAsBlob } (with {@link URL.createObjectURL } ) where possible
     * 
     */
    svgStandaloneCodeAsSvgDataUrl: (
      // TODO additional escapings *might* be necessary
      (...[code,]: [code: string,]) => (
        mimeTypeAndArgs + "," + code 
      )
    ) ,
    /**   
     * for use with {@link URL.createObjectURL }
     * 
     */
    svgStandaloneCodeAsBlob: (
      (...[code, options = {} , ]: [
        code: string,
        options?: (
          {}
          & Partial<{ fileName : string ; }>
          & Partial<{ lastModified : number ; }>
        ) ,
      ]) => {
        const { 
          fileName = "", 
          lastModified, 
        } = options ;
        return (
          /**    
           */
          fileName ?
          (() => {
            const filenameOut = (
              fileName
              .replace(/(?:\.svg)?$/i, () => ".svg", )
            ) ;
            return (
              new File([code, ], filenameOut , { type: mimeTypeAndArgs , lastModified, }, )
            ) ;
          })()
          : new Blob([code, ], { type: mimeTypeAndArgs , }, )
        ) ;
      }
    ) ,

  } ;
})() ;











