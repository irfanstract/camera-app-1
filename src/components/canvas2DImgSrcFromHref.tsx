
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
 * fully-loaded {@link Image } immediately usable for {@link CanvasRenderingContext2D.drawImage }. 
 * 
 * {@link HTMLCanvasElement.toDataURL note the CORS-related gotchas }.
 * 
 */
const canvas2DImgSrcFromHref = (
  (src: string ) => {
    const asImg = new Image() ;
    const onloadP = (
      new Promise<Event>((RTRUE, RFALSE, ) => (
        asImg.addEventListener("load", RTRUE, )
        ,
        asImg.addEventListener("error", RFALSE, )
      ) )
    ) ;
    asImg.src = (
      src
    ) ;
    return (async () => (await onloadP, asImg) )() ;
  }
) ;

export default canvas2DImgSrcFromHref ;
export { canvas2DImgSrcFromHref, } ;






