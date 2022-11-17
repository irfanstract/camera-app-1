





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
import { newCompletableFuture, } from "components/util/CompletableFuture";

export {} ; // TS-1208








export default (
  <A1 extends bigint | string | object, A2 extends object > (...[ffcc,] : [
    Worker ,
  ] ) => {
    const callbacks = (
      new Object() as { [k: number] : (v: A2,) => void ; }
    ) ;
    ffcc.addEventListener("message", (e) => {
      const [ident, m, ] = e.data as [number, A2,] ;
      callbacks[ident ]?.(m, ) ;
    } ) ;
    ;
    const submitWrk = (
      (...[v] : [payload: A1, ] ) => {
        const ident = Math.random() ;
        const [p1, { resolve: resolveP1, }, ] = (
          newCompletableFuture<A2>()
        ) ;
        ;
        callbacks[ident ] = async (v) => {
          delete callbacks[ident ] ;
          resolveP1(v, ) ;
        } ;
        ffcc.postMessage([ident, v, ] as const ) ;
        ;
        return p1 ;
      }
    ) ;
    ;
    return {
      submitWrk ,
    } ;
  } 
) ;

