



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
} from "./ctx-1a" ;















export {
   PdMode ,
   TAndTScale ,
} ;
const useInitially1 : (
   (...args : [aCtx : BaseAudioContext, ] ) 
   => CtxValue
) = (
   (...[aCtx, ] ) => {
      return (
         useMemo((): CtxValue => ({
            pd: new PdMode.Stochastically(aCtx.destination, ) ,
            aCtx: aCtx ,
            tCtx: TAndTScale.initially() ,
         }) , [aCtx, ], )
      ) ;
   }
) ;
const useIWithGivenDestNd1 : (
   (...args : [AudioNode | AudioParam, ] ) 
   => (CtxValue | null )
) = (
   (...[dest, ] ) => {
      const presentlyCtxV = (
         React.useContext(ctx, )
      ) ;
      return (
         useMemo((): null | CtxValue => {
            const tCtxNew = (
               presentlyCtxV ?
               presentlyCtxV.tCtx
               : TAndTScale.initially()
            ) ;
            if (dest instanceof AudioNode ) {
               return {
                  tCtx: tCtxNew ,
                  aCtx : (
                     dest.context
                  ) ,
                  pd : (
                     new PdMode.Stochastically(dest, )
                  ) ,
               } ;
            }
            if (presentlyCtxV ) {
               return {
                  tCtx: tCtxNew ,
                  aCtx: (
                     presentlyCtxV.aCtx
                  ) ,
                  pd : (
                     new PdMode.Stochastically(dest, )
                  ) ,
               } ;  
            }
            return null ;
         } , [presentlyCtxV, dest, ], )
      ) ;
   }
) ;
/**   
 * all values for the point the call is made at.
 * 
 */
const useCtxInferredValues = (
   () => {
      ;
      const ctxV = (
         React.useContext(ctx, )
      ) ;
      ;
      return (
         useMemo((): (
            (
               {  tCtxValue : null | ((typeof ctxV ) & object )["tCtx"] ;  } 
               &
               (
                  {  aCtx : null ; dest : null ; } 
                  |
                  {  aCtx : BaseAudioContext ; dest : AudioNode | AudioParam ; } 
               )
            )
         ) => {
            if (ctxV ) {
               const { 
                  pd: pdMode , 
                  aCtx: aCtx ,
                  tCtx: tCtxValue, 
               } = ctxV ;
               if (pdMode instanceof PdMode.OfToSendToDest ) {
                  const {
                     dest
                  } = pdMode ;
                  return {
                     tCtxValue ,
                     dest ,
                     aCtx ,
                  } ;
               }
               return { 
                  tCtxValue , 
                  dest : null ,
                  aCtx : null , 
               } ;
            } 
            return { 
               tCtxValue : null , 
               dest : null ,
               aCtx : null , 
            } ;
         } , [ctxV, ], )
      ) ;
   }
) ;
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
            if (introducedNode1 && tCtxValue ) {
               return {
                  pd: new PdMode.Stochastically(introducedNode1 , ) ,
                  aCtx: introducedNode1.context ,
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
export {
   CACtxtualDestNodeRefUser ,
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
) = Fragment ;
/**    
 * playing role in the main production,
 * not-at-all displaying any monitoring 
 * 
 */
const CMereProductiveElem : (
   React.FC<(
      Required<React.PropsWithChildren >
   )>
) = Fragment ;
export {
   CMereMonitoringElem ,
   CMereProductiveElem ,
} ;