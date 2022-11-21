





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

import { OneOffCallbackMap as OneOffCallbackMsp, } from "components/util/callback-map-oneoff-1";

export {} ; // TS-1208








const [IMC, ] = (() => {
  return (
    <A11 extends object, A12 extends object>(c: [
      masterSideInitWorker : (
        <A1 extends bigint | string | object, A2 extends object > (...args : [
          Worker ,
        ] ) => (
          {}
          & { submitWrk: (...[v] : [payload: A1, ] ) => Promise<A2> ; }
        )
      ) ,
    ]) => c
  )([
    (
      <A1 extends bigint | string | object, A2 extends object > (...[ffcc,] : [
        Worker ,
      ] ) => {
        let callbacks = (
          OneOffCallbackMsp.empty<number, [A2, ]>()
        ) ;
        ffcc.addEventListener("message", (e) => {
          const [committingIndex, m, ] = (
            e.data as 
            [committingIndex: number, returnValue: A2, ]
          ) ;
          callbacks = (
            callbacks
            .runItemAndReturnReducedMapping(committingIndex, [m], )
          ) ;
          console["log"](callbacks, ) ;
        } ) ;
        ;
        const submitWrk = (
          (...[v] : [payload: A1, ] ) => {
            const committingIndex = Math.random() ;
            const [p1, { resolve: resolveP1, }, ] = (
              newCompletableFuture<A2>()
            ) ;
            ;
            callbacks = (
              callbacks
              .withAddedMapping(committingIndex, async (v) => {
                resolveP1(v, ) ;
              } , )
            ) ;
            ffcc.postMessage([committingIndex, v, ] as const ) ;
            ;
            return p1 ;
          }
        ) ;
        ;
        return {
          submitWrk ,
        } ;
      } 
    ) ,
  ]) ;
} )() ;



export default IMC ;

