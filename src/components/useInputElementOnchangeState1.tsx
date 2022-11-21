


// eslint-disable import/first

import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import { newCompletableFuture, } from "components/util/CompletableFuture";
import SS, { identity, } from "lodash" ;
import { Seq, List,   } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import {  Map, } from "immutable";
import {   Set, } from "immutable";
import { SortedMap, } from "components/util-immutable-datastructure";
import { SortedSet, } from "components/util-immutable-datastructure";
import Immutable from "immutable";
import React from 'react';
import { useUpdatedCallback, } from "components/useUpdatedCallback1";
import { useDepsChgCount, } from "components/useDepsChgCount";
import { useCallbackCount, } from "components/useCallbackCount1";

/**   
 * return `upstreamValue` if-and-only-if non-null ;
 * return `cachedValue` otherwise
 * 
 */
const useDeferredValIfNull = (
  function <A extends null | boolean | number | string | object>(upstreamValue: A ): A {
    const cachedValue = (
      React.useDeferredValue(upstreamValue) 
    ) ;
    return (
      ((upstreamValue ?? null ) !== null ) ?
      upstreamValue
      : cachedValue
    ) ;
  }
) ;



export {} ; // TS-1208










;
/**    
 * the minimum upper-bound of the type-arg
 * 
 */
type XUpperBound = number | string | object ;
/**    
 * the type 
 * to be `implements`ed by 
 * the callback being the *3rd* item of the returned {@link XSpawnedPair }
 * 
 */
type XCommitawayDispatcher<A, AllowCallback extends false | true > = (
  AllowCallback extends true ?
  {
    /**    
     * 
     * @param c (supposedly) could only be present if `autoSubmitMode` were omitted or `null`.
     */
    (c ?: React.Dispatch<null | A > , ) 
    : void ;
  }
  : {
    /**    
     *  note :
     *  you can't specify any callback here since
     *  you specified non-null `autoSubmitMode`.
     * 
     */
    (  ) 
    : void ;
  }
) ;
/**    
 * the return value of {@link useInputState }. 
 * 
 */
type XSpawnedPair<A extends XUpperBound, CleanupAllowCallback extends boolean> = (
  /** plain tuple will give no way to properly JSDoc ; use {@link Parameters }-of-closure instead */
  Parameters<{

    /**    
     * 
     * @param finalValue either `presentlyUpstreamValue` or, if present, `currentlyTypedValue`
     * @param setTempvalue (re)assigns `currentlyTypedValue`
     * @param commitAway1 removes `currentlyTypedValue`
     */
    (
      finalValue: A, 
      setTempvalue : { (newTempvalue: A | { (v: null | A): A ; } ) : void ; }, 
      // commitAway1, removeTypedValue,
      commitAway1 : (
        XCommitawayDispatcher<A, CleanupAllowCallback >
      ) ,
      etc : (
        {}
        & {
          /**  
           * DEBUGGING-ONLY.
           * 
           * reflects *, if-and-only-if non-null, the value to replace/substitute `presentlyUpstreamValue`*.
           * generally *no need for user-space code to query this value*, 
           * for being already taken-care by these provided utility(s).
           * 
           */
          currentlyTypedValue : null | A ;
        }
      ) ,
    ): void ;
    
  }>
) ;
namespace InputStateUsage {

  type ASMP<V> = { autoSubmitMode: V ; } ;
  export type AutoSubmitModeProperty<
    A extends XUpperBound , 
    AutoSubmitModeNonNull extends boolean ,
  > = (
    never
    | (
      AutoSubmitModeNonNull extends true ?
      ASMP<(
        Parameters<{
          /**   
           * 
           * @param whetehrDebounceOrThrottle {@link SS.debounce } vs {@link SS.throttle }
           * @param callback the intended callback fn
           */
          (
            /**  there are these two options.  */
            whetehrDebounceOrThrottle: (
              keyof Pick<typeof SS, "debounce" | "throttle">
            ) , 
            delayMillis: number , 
            callback : (
              /**   
               * note ;
               * the type-argument shall be `true` and not `false` ;
               * 
               */
              Required<Parameters<XSpawnedPair<A, true >[2] >>[0]
            ) ,
            otherOptios: (
              {}
              & { 
                /**    
                 * this parameter becomes necessary since 
                 * change in `upstreamValue` might not be visible for a while.
                 * 
                 */
                clearAfterSubmit: boolean ; 
              }
            ) ,
          ): void ;
        }>
      )>
      : never
    )
    | (
      AutoSubmitModeNonNull extends false ?
      Partial<ASMP<null > >
      : never  
    )
  ) ;

  ;
  
} 

export const {
  useInputState ,
  WithInputState ,
} = (() => {
  /**    
   * this is to define the arguments to {@link useInputState }.  
   * 
   * `autoSubmitMode` (debounced `onChange` callback ) can be specified or left omitted.  
   * - when `autoSubmitMode` is omitted or `null`, 
   *   `removeTypedValue` should allow optional callback ;
   * - when `autoSubmitMode` is specified, 
   *   `removeTypedValue` should not accept any ; 
   * 
   */
  type InputStateUsageArgs<
    A extends XUpperBound , 
    AutoSubmitModeNonNull extends boolean ,
  > = Parameters<{
    /**    
     * 
     * @param presentlyUpstreamValue the upstream value 
     */
    (
      presentlyUpstreamValue: A ,
      otherConfig ?: (
        {}
        // & Partial<{ 
        //   /**   
        //    * optional auto-submit mode
        //    */
        //   autoSubmitMode : (
        //     InputStateUsage.AutoSubmitModeProperty<(
        //       A
        //     ), AutoSubmitModeNonNull>
        //   ) ; 
        // }>
        & (
          (
            InputStateUsage.AutoSubmitModeProperty<(
              A
            ), AutoSubmitModeNonNull >
          )
        )
        & Partial<{ autoClearWhenAgrees: boolean ; }>
      ) ,
    ): void ;
  }> ;
  const commitawayModeSpecParse = (
    function <A extends XUpperBound > (...[autoCommitawayMode, ] : [
      null |
      Required<(
        Required<InputStateUsageArgs<A, true  > >[1]
      )>["autoSubmitMode"] ,
    ] ) {
      ;
      const [
        whetehrDebounceOrThrottle, 
        delayMillis, 
        callback, 
        { clearAfterSubmit, } ,
      ] = (
        autoCommitawayMode || [
          "debounce", 
          Number.MAX_SAFE_INTEGER, 
          Object, 
          { clearAfterSubmit: false, }, 
        ]
      ) ;
      return {
        whetehrDebounceOrThrottle ,
        delayMillis ,
        callback ,
        clearAfterSubmit ,
      } ;
    }
  ) ;
  return {
    /**    
     * this `useYyy` 
     * allocate nullable, independent state, and
     * return either the maintained-value or-else `presentlyUpstreamValue`.
     * 
     * this is necessary to avoid the so-called "cursor jumps to the end" issues/problems.
     * this is 
     * 1) to submit
     * 2) to maintain independent/separate state to 
     *    maintain the latest (the input-element's) value 
     *    to be used in place of {@link React.Component.setState the possibly-outdated `presentlyUpstreamValue` }
     * 3) to provide opt-in to clear the internal-state
     * 
     */
    useInputState: (
      (() => {
        ;
        function useInputStateImpl<A extends XUpperBound >(...sA : (
          InputStateUsageArgs<A, false >
        ) ): XSpawnedPair<A, true > ;
        function useInputStateImpl<A extends XUpperBound >(...sA : (
          InputStateUsageArgs<A, true >
        ) ): XSpawnedPair<A, false > ;
        function useInputStateImpl<A extends XUpperBound >(...sA : (
          InputStateUsageArgs<A, true | false >
        ) ): XSpawnedPair<A, false | true > ;
        /**    
         * 
         * 
         */
        function useInputStateImpl<A extends XUpperBound >(...sA : (
          InputStateUsageArgs<A, false | true >
        ) ) {
          const [
            presentlyUpstreamValue, 
            { 
              autoSubmitMode: autoCommitawayMode = null , 
              autoClearWhenAgrees: autoClearWhenBothValuesAgrees = true ,
            } = {} ,
          ] = sA ; 
          if (presentlyUpstreamValue === null ) {
            throw TypeError(`nullls are not supported. '${presentlyUpstreamValue }' `) ;
          }
          const [typedVal, setTypedVal,] = (
            React.useState<null | A >(null, )
          ) ;
          const commitAway1 = (
            React.useCallback((
              (...csA : Parameters<XSpawnedPair<A, true >[2] > ) => {
                const [c = null,] = csA ;
                if (c) {
                  ;
                  /**    
                   * run {@link c } with the latest (possible) {@link typedVal} value, 
                   * and then
                   * set {@link typedVal} to `null`
                   * 
                   */
                  commitAwayIntoCallback(c, ) ;
                } else {
                  optionallyCommitAway() ;
                  optionallyCommitAway.flush() ;
                  true && setTypedVal(() => null ) ;
                }
              }
            ) , [setTypedVal,] )
          ) ;
          React["useEffect"](() => (
            onTypedValChg()
          ) , [typedVal,], ) ;
          /**    
           * the (optional) auto-submit
           * 
           */
          const optionallyCommitAway = (
            React.useCallback((() => {
              const {
                whetehrDebounceOrThrottle ,
                delayMillis ,
                callback ,
                clearAfterSubmit ,
              } = commitawayModeSpecParse(autoCommitawayMode, ) ;
              return (
                SS[whetehrDebounceOrThrottle]<() => void >((
                  () => { 
                    setTypedVal((v, ) => {
                      if (v) { 
                        callback(v, ) ;
                      }
                      return (
                        clearAfterSubmit ?
                        null : v
                      ) ;
                    } ) ;
                  }
                ) , delayMillis, { trailing: true , } , )
              ) ;
            })() , [autoCommitawayMode, setTypedVal, ] )
          ) ;
          /**    
           * run `c` with the latest (possible) {@link typedVal} value, 
           * and then
           * set {@link typedVal} to `null`
           * 
           */
          const commitAwayIntoCallback = (
            function (...[c] : [ React.Dispatch<null | A > , ]) {
              ;
              /**    
               * run {@link c } with the latest (possible) {@link typedVal} value, 
               * and then
               * set {@link typedVal} to `null`
               * 
               */
              setTypedVal((v, ) => {
                if (v) { 
                  c(v, ) ;
                }
                return null ;
              } ) ;
            }
          ) ;
          function onTypedValChg() { 
            // setTypedVal(existingTypedVal) ;
            optionallyCommitAway() ;
          }
          /**    
           * optional auto-removal
           * 
           */
          React["useEffect"](() => {
            /**    
             * {@link React.Component.setState to avoid race-condition }, [...]
             * 
             */
            setTypedVal(existingTypedVal => {
              if (existingTypedVal === presentlyUpstreamValue) {
                return null ;
              }
              return existingTypedVal ;
            } ) ;
          } , [presentlyUpstreamValue,], ) ;
          ;
          const typedValDeferred1 = (
            useDeferredValIfNull(typedVal, )
          ) ;
          const typedValEffectively = (
            typedValDeferred1
          ) ;
          ;
          //
          return (<A1 extends XSpawnedPair<A, true >, A2, > (a: A1) => a)([
            (
              (typedValEffectively !== null ) ? 
              typedValEffectively : presentlyUpstreamValue
            ) ,
            setTypedVal ,
            commitAway1 ,
            { currentlyTypedValue: typedVal, } ,
          ]) ;
        }
        return (
          useInputStateImpl
        ) ;
      })()
    ) ,
    /**    
     * a boundary which maintain its own state-of-that.
     * 
     * this is necessary to avoid the so-called "cursor jumps to the end" issues/problems.
     * this is 
     * 1) to submit
     * 2) to maintain independent/separate state to 
     *    maintain the latest (the input-element's) value 
     *    to be used in place of {@link React.Component.setState the possibly-outdated `presentlyUpstreamValue` }
     * 3) to provide opt-in to clear the internal-state
     * 
     */
    WithInputState: (() => {
      ;
      type XWithValue<A> = { 

        /**    
         * the upstream value . 
         * (the) `upstreamValue` of {@link useInputState } .
         */
        value: A ; 
        
      } ;
      function WithInputStateImpl<A extends XUpperBound> (...[options,] : [
        (
          {}
          & XWithValue<A>
          & (
            {}
            & { children : { (...a: XSpawnedPair<A, false> ) : React.ReactElement ; } }
            & Required<InputStateUsageArgs<A, true > >[1]
          )
        ), 
      ] ): React.ReactElement ;
      function WithInputStateImpl<A extends XUpperBound> (...[options,] : [
        (
          {}
          & XWithValue<A>
          & (
            {}
            & { children : { (...a: XSpawnedPair<A, true> ) : React.ReactElement ; } }
            & Required<InputStateUsageArgs<A, false > >[1]
          )
        ), 
      ] ): React.ReactElement ;
      function WithInputStateImpl<A extends XUpperBound> (...[options,] : [
        (
          {}
          & (
            {} 
            & XWithValue<A>
          )
          & (
            never
            | (
              {}
              & { children : { (...a: XSpawnedPair<A, true> ) : React.ReactElement ; } }
              & Required<InputStateUsageArgs<A, false > >[1]
            )
            | (
              {}
              & { children : { (...a: XSpawnedPair<A, false> ) : React.ReactElement ; } }
              & Required<InputStateUsageArgs<A, true > >[1]
            )
          )
        ), 
      ] ): React.ReactElement ;
      function WithInputStateImpl<A extends XUpperBound> (...[options,] : [
        (
          {}
          & (
            {} 
            & XWithValue<A>
          )
          & (
            never
            | (
              {}
              & { children : { (...a: XSpawnedPair<A, true> ) : React.ReactElement ; } }
              & Required<InputStateUsageArgs<A, false > >[1]
            )
            | (
              {}
              & { children : { (...a: XSpawnedPair<A, false> ) : React.ReactElement ; } }
              & Required<InputStateUsageArgs<A, true > >[1]
            )
          )
        ), 
      ] ) {
        const { 
          value: presentlyUpstreamValue, 
          children: payload, 
          ...otherOptios
        } = options ;
        const s = (
          useInputState<A>(presentlyUpstreamValue, otherOptios, )
        ) ;
        return (
          /**    
           * avoiding 
           * the compiler bug where the third arg would be supriously auto-wrapped as tuple
           * 
           */
          <F extends unknown[], R,>(f: (...a: F) => R, r: F, ) => (
            f(...r)
          )
        )(payload, s, ) ;
      }
      return (
        WithInputStateImpl
      ) ;
    })() ,
  } ;
})() ;












