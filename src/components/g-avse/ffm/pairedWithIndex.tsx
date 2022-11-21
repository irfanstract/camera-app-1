





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









const pairedWithIndex = (
  function <Item, R> (...[files,] : [() => AsyncGenerator<Item, R> , ] ) {
    return (
      async function* () {
        let i = 0 ;
        for await (const f of files() ) {
          yield (
            (<A1, A2,>(...a: [index: number, file: typeof f, ]) => a )(i++, f, )
          ) ;
        }
      }
    ) ;
  }
) ;






export { pairedWithIndex, } ;














