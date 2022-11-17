


import SS, { identity } from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';
import { useDepsChgCount, } from "./useDepsChgCount";












/**    
 * provides 
 * *the number-of-times of calls* as well as {@link React.useCallback *the number-of-times of rewraps* }
 * .
 * 
 */
const useCallbackCount = (
  function useCallbackCountImpl<P extends (readonly unknown[]), R, >(...[impl, deps,] : [
    impl: { (...a: P ): R ; }, 
    wrapperMemoDeps: React.DependencyList,
    misc ?: {} ,
  ] ) {
    const [{ globalCallCount, perRewrapCallCount, }, updateState, ] = (
      React.useState<(
        {}
        & { globalCallCount: number ; }
        & { perRewrapCallCount: number ; }
      )>({ globalCallCount: 0, perRewrapCallCount: 0, }, )
    ) ;
    const increment = (
      (...[incr = 1, ] : [incr ?: number ,] ) => (
        updateState((state0 ) => ({
          globalCallCount   : ((state0.globalCallCount    ) + incr ) ,
          perRewrapCallCount: ((state0.perRewrapCallCount ) + incr ) ,
        }) , )
      )
    ) ;
    const cb = (
      React.useCallback((...a: P ) => (
        increment()
        ,
        impl(...a, )
      ) , deps , )
    ) ;
    React["useLayoutEffect"](() => {
      (
        updateState(({ globalCallCount, } ) => ({
          globalCallCount   : globalCallCount ,
          perRewrapCallCount: 0 ,
        }) , )
      ) ;
    } , [cb, ] , ) ;
    const rewrapCount = (
      useDepsChgCount({}, [cb, ], )
    ) ;
    return (
      /**    
       * 
       * @param callbackCount the cumulative number of calls
       */
      <A1, A2, >(...a: [
        main: typeof cb, 
        globalCallbackCount: number, 
        extraOps: A1, 
      ] ) => a
    )(...[
      cb ,
      globalCallCount, 
      { 
        /**    
         * the number-of-times
         * rewrap (the wrapper has been recreated)
         */
        rewrapCount, 
        // resetToZero: (
        //   () => updateGlobalCallCount(() => 0, )
        // ) , 
        /**    
         * number-of-times calls made since last rewrap (the wrapper has been recreated)
         */
        perRewrapCallCount ,
      } ,
    ] as const, ) ;
  }
) ;


export { useCallbackCount, } ;



