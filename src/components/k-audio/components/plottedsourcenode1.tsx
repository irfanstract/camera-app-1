



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

import { useConnectDisconnect, } from "components/k-audio/uacd";
import useConstantSrcNde from "../useConstantSrcNde";
import { 
   // All Values
   CInferredValuesUser ,
   useCtxInferredValues ,
   /**   ref to the {@link BaseAudioContext } */
   WithCurrentACtx ,
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
namespace CCPS_IMPL {
   
   export const apTAndTScaleTranslatedForm = (
      identity<(
         (...args : [AudioParam, PsTAndTScale, ] )
         =>
         (
            {}
            & (
               {}
               & Pick<AudioParam,  "setTargetAtTime"  >
               & Pick<AudioParam,  "value" >
               & Pick<AudioParam,  "linearRampToValueAtTime"  >
               & Pick<AudioParam,  "exponentialRampToValueAtTime"  >
               & Pick<AudioParam,  "cancelScheduledValues"  >
            )
            & Pick<AudioParam, "minValue" | "maxValue"  >
         )
      )>((
         (...[p, tCtxVal, ] ) => {
            const {
               minValue ,
               maxValue ,
            } = p ;
            ;
            /**   
             * `setValueAtTime` and other methods with equivalent sgn.
             * 
             */
            const STVT : (
               (...args : [
                  (
                     keyof (
                        {}
                        & Pick<AudioParam, "setValueAtTime">
                        & Pick<AudioParam, "linearRampToValueAtTime" | "exponentialRampToValueAtTime" >
                     )
                  ) ,
                  { value : number ; t : number ; } ,
               ] ) 
               => 
               (never | false | true )
            ) = (
               (which, { value: targetedValue, t: specifiedT, } , ) => {
                  if (tCtxVal ) {
                     (
                        p
                        [which ]((
                           targetedValue
                        ), (
                           tCtxVal.t 
                           + (specifiedT * tCtxVal.tScale )
                        ), )
                     ) ;
                     return true ;
                  } else {
                     ; // TODO possible logging
                     return false ;
                  }
               }
            ) ;
            /**   
             * `cancelScheduledValues` and other methods with equivalent sgn.
             * 
             */
             const CANCELSCHEDULEDVLS : (
               (...args : [
                  (
                     keyof (
                        {}
                        & Pick<AudioParam, never | "cancelScheduledValues" >
                     )
                  ) ,
                  { t : number ; } ,
               ] ) 
               => 
               (never | false | true )
            ) = (
               (which, { t: specifiedT, } , ) => {
                  if (tCtxVal ) {
                     (
                        p
                        [which ]((
                           tCtxVal.t 
                           + (specifiedT * tCtxVal.tScale )
                        ), )
                     ) ;
                     return true ;
                  } else {
                     ; // TODO possible logging
                     return false ;
                  }
               }
            ) ;
            return {
               minValue ,
               maxValue ,
               get value() {
                  return p.value ;
               } ,
               set value(newVal: number , ) {
                  (
                     p.value = newVal
                  ) ;
               } ,
               setTargetAtTime(...[targetedValue, specifiedStartT, specifiedTConstant, ]) {
                  if (tCtxVal ) {
                     (
                        p
                        .setTargetAtTime((
                           targetedValue
                        ), (
                           tCtxVal.t 
                           + (specifiedStartT * tCtxVal.tScale )
                        ), (
                           specifiedTConstant 
                           * tCtxVal.tScale
                        ), )
                     ) ;
                  } else {
                     ; // TODO possible logging
                  }
                  return this as AudioParam ;
               } ,
               linearRampToValueAtTime(targetedValue, specifiedEndT, ) {
                  if ((
                     true
                     && STVT("linearRampToValueAtTime" , { value: targetedValue, t: specifiedEndT, } , )
                  )) {
                  } else {
                  }
                  return this as AudioParam ;
               },
               cancelScheduledValues(specifiedT, ) {
                  if ((
                     true
                     && CANCELSCHEDULEDVLS("cancelScheduledValues" , { t: specifiedT, } , )
                  )) {
                  } else {
                  }
                  return this as AudioParam ;
               },
            } ;
         }
      ))
   ) ;

}
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





export {
   CPlottedSourceNode1A ,
} ;

