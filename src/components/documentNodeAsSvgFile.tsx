

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














/**    
 * 
 * @see https://web.archive.org/web/20160625111122/https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas 
 */
const {
  documentNodeAsSvgStandaloneCode ,
} = (() => {
  const newTemplate1 = (
    (...[options ,] : [
      (
        {}
        & (
          {}
          & { width: number ; height: number ; }
        )
      ) ,
    ] ) : [
      HTMLElement ,
      {
        /**    
         * id to, the designated paste area
         */
        containerId : string ;
        /**    
         * id to, the element where the font-style attrib(s) shall go to
         */
        fontStyleBndryId : string ;
      } ,
    ] => {
    ;
    const {
      width = 500 ,
      height = 1000 ,
    } = options ;
    ;
    const id = `elem986737535256` ;
    const d0 = (
      document.createElement("div")
    ) ;
    d0.innerHTML = (
      /**    
       * the attrib `xmlns` would normally be expected for standalone SVG file(s) .
       * however, 
       * in case of `divElem.innerHTML = "<svg ....>...</svg>" `,
       * `innerHTML` will take care of that .
       * 
       * `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">`
       * 
       */
      `<svg width="${width }" height="${height }">` +
      `<foreignObject width="100%" height="100%">` +
      `<div id=${id } ></div> ` +
      `</foreignObject>` +
      '</svg>'
    ) ;
    return [
      d0 ,
      {
        containerId: id ,
        fontStyleBndryId: id ,
      } ,
    ] ;
    }
  ) ;
  const gcsWidthAndHeightPixels = (
    (...[gcs1,] : [CSSStyleDeclaration, ] ) => {
      // TODO
      return {
        width:  Math.max(( 500), +((gcs1.width ).match(/[\-0-9\.eE]+/g )?.[0] ?? "0" ) ) ,
        height: Math.max((1000), +((gcs1.height).match(/[\-0-9\.eE]+/g )?.[0] ?? "0" ) ) ,
      } ;
    }
  ) ;
  return {
    documentNodeAsSvgStandaloneCode : (
      function (...[s] : [Element, ] ) {
        const {
          fontStylePredefMode,
        } : {
          fontStylePredefMode : (
            keyof Pick<CSSStyleDeclaration, "font" | "fontFamily" | "fontWeight" | "fontSize" >
          )
        } = {
          fontStylePredefMode: "font",
        } ;
        const dmSerialiser = (
          (new XMLSerializer)
        ) ;
        // const sAsHtml = (
        //   s.outerHTML
        // ) ;
        const gcs1 = (
          getComputedStyle(s, )
        ) ;
        console["log"]({
          gcsSize: [gcs1.width, gcs1.height, ] ,
        }) ;
        const [d0, { containerId: pastingDestId, fontStyleBndryId, }, ] = (
          newTemplate1({
            ...gcsWidthAndHeightPixels(gcs1, ) ,
          })
        ) ;
        (
          d0.querySelector<HTMLElement | SVGElement>(`#${fontStyleBndryId }`)!.style[fontStylePredefMode] = 
          getComputedStyle(document.querySelector("#root") || document.body , )[fontStylePredefMode]
        ) ;
        (() => {
          const dest = (
            d0.querySelector(`#${pastingDestId }`)!
          ) ;
          /**    
           * needs explicit clearing since
           * it might have already been used before
           * 
           */
          dest.innerHTML = "" ;
          /**    
           * an alternative would be to stick to `s.outerHTML`, but
           * the difference (of the overheads) can be significant
           * 
           */
          dest.appendChild((
            s.cloneNode(true, )
          ), ) ;
        } )() ;
        // (new XMLSerializer)
        return (
          dmSerialiser.serializeToString(d0.querySelector("svg")! )
        ) ;
      }
    ) ,
  } ;
})() ;












export { documentNodeAsSvgStandaloneCode as documentNodeAsSvgStandaloneCode, } ;


