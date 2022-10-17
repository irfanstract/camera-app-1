



import { 
   EitherBothSetOrBothUnset, 
   EitherSetAndOthersUnset,
   EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing";
import { 
   OptionsCouldBeOmittedAltogether,
} from "components/util/dict-argument-couldbeomitted";
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
import usingQuerySelectorAllAndUpdate1A from "components/useQuerySelectorAllAndUpdate1A";

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
         <p>
            Plotted Source Node ;
            at {JSON.stringify(tCtxVal, null, 0, ) }
         </p>
      ) ;
   }
) ;
const CPlottedSourceNode1A = (
   currentAdestnoderefWrpcomp("CPlottedSourceNode1A", CCPS_IMPL_1A, )
) ;
const CPlottedSourceNode1C = (() => {
   /**   
    * exercies `const { dest : destNdRef, } = useCtxInferredValues()`, and then
    * returns a dispatcher which will (...)
    * 
    */
   const useXADestParamAutoDispatch1A = (
      () => {
         ;
         const {
            dest : destNdRef ,
         } = (
            useCtxInferredValues()
         ) ;
         const [
            ,
            update ,
         ] = (
         useReducer((() => {
            type XNativeElems = (
               List<(
                  never
                  | HTMLElement
               )>
            ) ;
            ;
            return (
               (...[oldNtElems, newNtElems, ] : [
                  oldValues : XNativeElems, 
                  newValues : XNativeElems,
               ] ): XNativeElems => {
                  ;
                  // TODO
                  if (newNtElems.equals(oldNtElems, ) ) {
                     /**    
                      * it remains unchanged ;
                      * skip
                      */
                  } else {
                     setTimeout(() => {
                     ;
                     try {
                     ;
                     ;
                     /**    
                      * RESET
                      */
                     if ((
                        true 
                        && destNdRef instanceof AudioParam
                     )) {
                        destNdRef.cancelScheduledValues(0, ) ;
                     }
                     ;
                     /**    
                      * (RE)INIT
                      */
                     (
                        newNtElems
                        .forEach((e) => (
                           void (
                              e.click()
                           )
                        ) )
                     ) ;
                     } catch (z) {
                        console.error((
                           z instanceof Error
                           ?
                           z.message : z
                        ) , { z, } , ) ;
                        // TODO
                        ;
                     }
                     } , 0, )
                  }
                  ;
                  /**   
                   * in either case,
                   * return {@link newNtElems }
                   * 
                   */
                  return newNtElems ;
               }
            ) ;
         } )() , List<never>() , )
         ) ;
         ;
         return {
            update ,
         } ;
      }
   ) ;
   const {
      useRefAndDispatcher1 : useXADestParamAutoDispatch1ACA ,
      useRefAndPeriodicDispatch : useXADestParamAutoDispatch1ACB ,
   } = (
      usingQuerySelectorAllAndUpdate1A({
         useSelector : () => `CPlottedSourceNode1C-main` ,
         useDispatcher1A : useXADestParamAutoDispatch1A ,
      } , )
   ) ;
   const CAsXADestParamEffectRoot = (
      identity<(
         React.FC<(
            {} 
            & Required<React.PropsWithChildren >
         )>
      )>((
         function CADestParamAutoDescendantsClickall({ children: payload, }) {
            const [
               ,
               ref1,
            ] = (
               useXADestParamAutoDispatch1ACB()
            ) ;
            return (
               <div style={{ display: "none", }}>
               <div ref={ref1 } >
                  { payload }
               </div>
               </div>
            ) ;
         }
      ))
   ) ;
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
            ...options : OptionsCouldBeOmittedAltogether<(
               {}
               & { dependencies : React.DependencyList ; }
            )> ,
         ]): [ null | ReactElement , {} , ] ;
      }
   ) = (
      (callback, options, ) => {
         const { // OPTIONS
            dependencies ,
         } = options || {} ;
         const {
            tCtxValue : tCtxVal ,
            dest : destNdRef ,
         } = (
            useCtxInferredValues()
         ) ;
         ;
         const key = (
            useMemo(() => Math.random() , dependencies, )
         ) ;
         const [ , apply1, ] = (
            useReducer(() => {
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
               }
               ;
            } , void true , )
         ) ;
         ;
         return [
         (
            <Fragment key={key } >
            <div hidden >
               <button  
               className="CPlottedSourceNode1C-main"
               type="button"
               onClick={() => void apply1() }
               >
                  p  
               </button>
            </div>
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
   const cForWhichEndingAtTime = (
      function <P extends (
         never
         | keyof Pick<AudioParam, "setValueAtTime">
         | keyof Pick<AudioParam, "linearRampToValueAtTime">
         | keyof Pick<AudioParam, "exponentialRampToValueAtTime">
      )>(...[evtCls , ] : [
         P ,
      ] ) {
      ;
      const C = (
         identity<(
            React.FC<(
               {}
               & TAndNewValue
            )>
         )>((
            function ({ t: specifiedEndT, newValue, }, ) {
               const [
                  necessaryMount, 
                  {}, 
               ] = (
                  useXADestParamEffect((
                     (dest, ) => {
                        (
                           dest
                           [evtCls ](newValue, specifiedEndT, )
                        ) ;
                     }
                  ) , {
                     dependencies : [
                        newValue ,
                        specifiedEndT ,
                     ] ,
                  })
               ) ;
               return (
                  necessaryMount
               ) ;
            }
         ))
      ) ;
      C.displayName = (
         `C_${evtCls.toUpperCase() }`
      ) ;
      return (
         C
      ) ;
      }
   ) ;
   const cToSetTargetAtTime = (
      () => (
         identity<(
            React.FC<(
               {}
               & TAndNewValue
               & { tConstant1 : number ; }
            )>
         )>((
            function CStartExponentialApproachAtTime({ t: specifiedEndT, newValue, tConstant1, }, ) {
               const [
                  necessaryMount, 
                  {}, 
               ] = (
                  useXADestParamEffect((
                     (dest, ) => {
                        (
                           dest
                           ["setTargetAtTime"](newValue, specifiedEndT, tConstant1, )
                        ) ;
                     }
                  ) , {
                     dependencies : [
                        newValue ,
                        specifiedEndT ,
                        tConstant1 ,
                     ] ,
                  })
               ) ;
               return (
                  necessaryMount
               ) ;
            }
         ))
      )
   ) ;
   return {
      CAsXADestParamEffectRoot ,
      
      CStartExponentialApproachAtTime : (
         cToSetTargetAtTime()
      ) ,
      
      CJumpToValueAtTime : (
         cForWhichEndingAtTime("setValueAtTime", )
      ) ,

      CLinearRampToValueAtTime : (
         cForWhichEndingAtTime("linearRampToValueAtTime", )
      ) ,
      
      //
   } ;
})() ;





export {
   CPlottedSourceNode1A ,
} ;
export {
   CPlottedSourceNode1C ,
} ;

