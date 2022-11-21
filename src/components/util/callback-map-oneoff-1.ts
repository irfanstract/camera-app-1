





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

{}
{}
class OneOffCallbackMsp<K, CbArgs extends readonly unknown[] ,> {

  protected constructor(
    protected m : Map<K, { (...a: CbArgs ): void ; } > ,
  ) {
    this.length = (
      m.size
    ) ;
  }
  length !: number ;
  static empty<K, CbArgs extends readonly unknown[] >() : OneOffCallbackMsp<K, CbArgs> {
    return (
      new OneOffCallbackMsp<K, CbArgs>(Map() )
    ) ;
  }

  upcasted<K2 = K , AltCbArgs extends CbArgs = CbArgs ,>() {
    const derived = (
      this as OneOffCallbackMsp<K | K2, CbArgs>
    ) ;
    return (
      derived
    ) ;
  }

  withAddedMapping(...args : Parameters<typeof this.m.set > ) {
    return (
      new OneOffCallbackMsp<K, CbArgs>((
        this.m
        .set(...args )
      ))
    ) ;
  }
  /**   
   * invokes the callback identified if exists, and then 
   * return derived {@link OneOffCallbackMsp } with removed mapping .
   * 
   */
  runItemAndReturnReducedMapping(...args : (
    Parameters<typeof this.runItemAndReturnReducedMap1 >
  ) ): OneOffCallbackMsp<K, CbArgs> {
    return (
      new OneOffCallbackMsp((
        this.runItemAndReturnReducedMap1(...args )
      ))
    ) ;
  }
  /**   
   * to implement {@link runItemAndReturnReducedMapping }.
   * 
   */
  protected runItemAndReturnReducedMap1(...[committingIndex, m,] : [
    k: K, 
    cbArgs: CbArgs, 
  ] ) {
    const callbacks = this.m ;
    ;
    const cb = (
      callbacks
      .get(committingIndex, null, )
    ) ;
    cb?.(...m, ) ;
    return (
      callbacks
      .remove(committingIndex, )
    ) ;
  }
  
} ;

export {} ; // TS-1208











export { OneOffCallbackMsp as OneOffCallbackMap, } ;












