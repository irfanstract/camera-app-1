



/**  
 * obscure the built-in mutable Collections, by design
 * 
 */
import { 
   // Seq and List
   Seq, 
   List, 
   Range, 
   // Set
   Set, 
   SortedSet ,
   // Map
   Map, 
   SortedMap ,
} from "components/util-immutable-datastructure" ;
import { identity , } from "lodash";
import { TAndTScale, } from "./TOffsetAndScaleProperties";
import { PdMode, } from "./graph-modes";

import React, { 
   // Callbacks
   Dispatch,
   DispatchWithoutAction, 

   // Debug
   useDebugValue,
   // UseYyyEffect(s)
   useLayoutEffect, useEffect, 
   useInsertionEffect ,
   // UseImperativeHandle
   useImperativeHandle ,
   // UseMemo and UseReducer and UseRefObject
   useCallback, useMemo, useContext, useDeferredValue, 
   useState, useReducer, 
   useRef, 

   // Components  
   Fragment ,

} from "react";      
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import { useConnectDisconnect, } from "./uacd";
import {
   CtxValue ,
   ctx ,
   useInitially1 ,
   useIWithGivenDestNd1 ,
   useCtxInferredValues ,
} from "./ctx-1a" ;















export {
   PdMode ,
   TAndTScale ,
} ;
type ANFC<A extends AudioNode > = (
   { 
      init : (
         (...args : [BaseAudioContext, {}?, ] ) 
         => A
      ) ; 
   }
   &
   { 
      update : (
         (...args : [A, {}?, ] ) 
         => ReturnType<React.EffectCallback >
      ) ; 
      updateDependencies : (
         React.DependencyList
      ) ;
   }
) ;
namespace ANFC { ; } // TS-1205
const useANodeFltCallback1 : (
   <A extends AudioNode >(...args : [
      (
         ANFC<A>
      ), 
   ] ) 
   => (CtxValue | null )
) = (
   (...[impl1, ] ) => {
      /**    
       * QUERYING FOR
       * THE CTXTUAL VALUES
       * 
       */
      const {
         aCtx ,
         aCtxExpectedT ,
         dest ,
         tCtxValue ,
      } = (
         useCtxInferredValues()
      ) ;
      /**    
       * THE INSTANTIATION
       * 
       */
      const {
         introducedNode1 ,
      } = (
         React.useMemo(() => (
            (aCtx && dest ) ?
            {
               introducedNode1: (
                  impl1.init(aCtx )
               ) ,
            }
            : { introducedNode1 : null , }
         ) , [aCtx , ] )
      ) ;
      /**    
       * THE UPDATING
       * 
       */
      React["useLayoutEffect"](() => {
         ;
         if (introducedNode1 ) {
            return (
               impl1.update(introducedNode1 , )
            ) ;
         } ;
      } , impl1.updateDependencies , ) ;
      /**    
       * THE `connect()` AND `disconnect()` CALLS
       * 
       */
      useConnectDisconnect((
         introducedNode1
      ), dest, ) ;
      /**    
       * 
       */
      return (
         useMemo((): (null | CtxValue) => {
            if ((
               true 
               && introducedNode1 
               && tCtxValue
               && aCtxExpectedT 
            )) {
               return {
                  pd: new PdMode.Stochastically(introducedNode1 , ) ,
                  aCtx: introducedNode1.context ,
                  aCtxExpectedT ,
                  tCtx: tCtxValue ,
               } ;
            } else {
               return null ;
            }
         } , [introducedNode1, tCtxValue, ], )
      ) ;
   }
) ;
const CToGivenAudioCtxDest : (
   React.FC<(
      Required<React.PropsWithChildren >
      &
      { value : BaseAudioContext ; }
   )>
) = (
   ({ value: aCtx, children: payload, }) => {
      const { Provider, } = ctx ;
      const prvv1 = (
         useInitially1(aCtx, )
      ) ;
      return (
         <Provider value={prvv1 } >
            { payload }
         </Provider>
      ) ;
   }
) ;
const CWithGivenAFltImpl = (
   function <A extends AudioNode >(...[{ children: payload, impl, }, ] : [
      options: (
         Required<React.PropsWithChildren >
         &
         { impl : ANFC<A> ; }
      ) ,
   ] ) {
      const { Provider, } = ctx ;
      const prvv1 = (
         useANodeFltCallback1(impl, )
      ) ;
      ;
      return (
         prvv1 ?
         <Provider value={prvv1 } >
            { payload }
         </Provider>
         : null
      ) ;
   }
) ;
const WithGivenDestNd = (
   identity<(
      React.FC<(
         { value : Parameters<typeof useIWithGivenDestNd1 >[0] ; }
         &
         Required<React.PropsWithChildren >
      )>
   )>((
      function WithGivenDestNdC({ value: dest, children: payload, }) {
         ;
         const { Provider, } = ctx ;
         const prvv1 = (
            useIWithGivenDestNd1(dest, )
         ) ;
         ;
         return (
            prvv1 ?
            <Provider value={prvv1 } >
               { payload }
            </Provider>
            : null
         ) ;
      }
   ))
) ;
export {
   CToGivenAudioCtxDest ,
   CWithGivenAFltImpl ,
   ANFC ,
   useIWithGivenDestNd1 ,
   WithGivenDestNd ,
} ;
export const WithCurrentACtx = (
   identity<(
      React.FC<(
         React.ConsumerProps<BaseAudioContext>
      )>
   ) >((
      function WithCurrentACtxC({ children, }) {
         const ctxv = (
            React
            .useContext(ctx, )
         ) ;
         return (
            <>
            { ctxv && children(ctxv.aCtx, ) }
            </>
         ) ;
      }
   ))
) ;
const CACtxExpectedCurrentStateValuesUser : (
   React.FC<(
      React.ConsumerProps<(
         {}
         & {
            /**    
             * the expected `t`
             */
            expectedT : number ;
         }
      )>
   )>
) = (
   ({ children: payload , }) => {
      const { Consumer, } = ctx ;
      return (
         <Consumer>
         { (c) => {
            if (c) {
               const { 
               } = c ;
               return (
                  payload({
                     expectedT : (
                        c.aCtxExpectedT
                     ) ,
                  } , )
               ) ;
            } else {}
            return null ;
         } }
         </Consumer>
      ) ;
   }
) ; 
const CACtxtualDestNodeRefUser : (
   React.FC<(
      React.ConsumerProps<PdMode.OfToSendToDest >
   )>
) = (
   ({ children: payload , }) => {
      const { Consumer, } = ctx ;
      return (
         <Consumer>
         { (c) => {
            if (c) {
               const { pd, } = c ;
               if (pd instanceof PdMode.OfToSendToDest ) {
                  return (
                     payload(pd, )
                  ) ;
               }
            } else {}
            return null ;
         } }
         </Consumer>
      ) ;
   }
) ;
const CTCtxCurrentValueUser : (
   React.FC<(
      React.ConsumerProps<(
         {}
         & TAndTScale 
      )>
   )>
) = (
   ({ children: payload , }) => {
      const { Consumer, } = ctx ;
      return (
         <Consumer>
         { (c) => {
            if (c) {
               const { tCtx, } = c ;
               return (
                  payload(tCtx , )
               ) ;
            } else {}
            return null ;
         } }
         </Consumer>
      ) ;
   }
) ; 
export {
   CACtxtualDestNodeRefUser ,
   CACtxExpectedCurrentStateValuesUser ,
   CTCtxCurrentValueUser ,
} ;
/**    
 * monitoring-or-visualisational only,
 * not-at-all playing role in the main production
 * 
 */
const CMereMonitoringElem : (
   React.FC<(
      Required<React.PropsWithChildren >
   )>
) = (
   ({ children, }) => (
      <div style={{ border: `0.1em solid black` }} >
         { children }
      </div> 
   )
) ;
/**    
 * playing role in the main production,
 * not-at-all displaying any monitoring 
 * 
 */
const CMereProductiveElem : (
   React.FC<(
      Required<React.PropsWithChildren >
   )>
) = (
   ({ children, }) => (
      <div style={{ border: `0.1em solid red` }} >
         { children }
      </div> 
   )
) ;
export {
   CMereMonitoringElem ,
   CMereProductiveElem ,
} ;