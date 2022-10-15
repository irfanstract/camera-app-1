



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
   ReactElement ,
   ReactNode ,

} from "react";      
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';
import useMemoisedResource from "components/useMemoisedResource";

import { TAndTScale, } from "components/k-audio/TOffsetAndScaleProperties";
import { PdMode, } from "components/k-audio/graph-modes";

import * as CCPS_IMPL from "components/k-audio/w3a-utils" ;
import { useConnectDisconnect, } from "components/k-audio/uacd";
import useConstantSrcNde from "../useConstantSrcNde";
import { 
   // All Values
   CInferredValuesUser ,
   useCtxInferredValues ,
   /**   ref to the {@link BaseAudioContext } */
   WithCurrentACtx ,
   /**  the expected {@link BaseAudioContext } state values */
   CACtxExpectedCurrentStateValuesUser ,
   // AFlt
   CWithGivenAFltImpl ,
   /** `PdMode.OfToSendToYyy` */
   CACtxtualDestNodeRefUser, 
   WithGivenDestNd ,
   /** `TCtx` */
   CTCtxCurrentValueUser ,
   // end
} from "components/k-audio/ctx";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;

type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
 














// eslint-disable-next-line import/first
import PsTAndTScale = TAndTScale ;
const CCPS_IMPL_1A : (
   React.FC<(
      Required<Record<"value" , (
         [
            (...args : [
               (
                  ReturnType<typeof CCPS_IMPL.apTAndTScaleTranslatedForm >
               ),
            ] ) => void , 
            React.DependencyList , 
         ]
      ) >>
      &
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
   )>
) = (
   ({ c: dest, aCtx, value: [cb, cbDependencies, ], }) => {
      const g1 = (
         useConstantSrcNde(aCtx, )
      ) ;
      useConnectDisconnect(g1, dest, ) ;
      const {
         tCtxValue : tCtxVal ,
      } = (
         useCtxInferredValues()
      ) ;
      const [ , refresh, ] = (
      useReducer(() => {
         g1.offset.cancelScheduledValues(0, ) ;
         if (tCtxVal ) {
         ;
         cb((
            CCPS_IMPL.apTAndTScaleTranslatedForm((
               g1.offset
            ), tCtxVal, )
         ) ) ;
         }
      } , void 0 , )
      ) ;
      React["useLayoutEffect"](() => (
         void (
            refresh()
         )
      ) , cbDependencies , ) ;
      return (
         <div />
      ) ;
   }
) ;
const CPlottedSourceNode1A = (
   currentAdestnoderefWrpcomp("CPlottedSourceNode1A", CCPS_IMPL_1A, )
) ;
const CPlottedSourceNode1C = (() => {
   const useXADestParamEffect: (
      {
         (...args : [
            callback : {
               (...args : [
                  dest : (
                     /** the mockup type */ 
                     ReturnType<typeof CCPS_IMPL.apTAndTScaleTranslatedForm > 
                  ),
               ] ) : void ;
            } , 
         ]): {} ;
      }
   ) = (
      (callback, ) => {
         const {
            tCtxValue : tCtxVal ,
            dest : destNdRef ,
         } = (
            useCtxInferredValues()
         ) ;
         ;
         (
            React["useLayoutEffect"](() => {
               if ((
                  true
                  && destNdRef instanceof AudioParam
                  && tCtxVal
               ) ) {
                  (
                     callback((
                        CCPS_IMPL.apTAndTScaleTranslatedForm((
                           destNdRef
                        ), tCtxVal, )
                     ) , )
                  ) ;
                  return (): void => {
                     (
                        destNdRef
                        .cancelScheduledValues(0, )
                     ) ;
                  } ;
               }
               ;
            } , [destNdRef, ] , )
         ) ;
         ;
         return [
         (
            <Fragment>
            </Fragment>
         ) ,
         {
         } ,
         ] ;
      }
   ) ;
   type TAndNewValue = (
      {}
      & { t : number ; }
      & { newValue : number ; }
   ) ;
   return {
      //
   } ;
})() ;





export {
   CPlottedSourceNode1A ,
} ;
export {
   CPlottedSourceNode1C ,
} ;

