



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
   const useXADestParamAutoDispatch1ACA = (
      () => {
         const {
            update ,
         } = useXADestParamAutoDispatch1A() ;
         const [eH, setEH, ] = (
            useState<null | HTMLElement>(null, )
         ) ;
         const refresh = (
            (): void => {
               const natvElems = (
                  List((
                     eH ?
                     eH.querySelectorAll(`.CPlottedSourceNode1C-main`)
                     : []
                  ))
                  .filter((e): e is HTMLElement => (
                     e instanceof HTMLElement 
                  ))
               ) ;
               update(natvElems, ) ;
            }
         ) ;
         return [
            void true ,
            setEH ,
            { refresh, } ,
         ] as const ;
      }
   ) ;
   const useXADestParamAutoDispatch1ACB = (
      () => {
         ;
         const [
            ,
            ref1 ,
            { refresh, } ,
         ] = useXADestParamAutoDispatch1ACA() ;
         React["useEffect"](() => {
            const tmoutId = (
               setInterval(() => (
                  void (
                     refresh()
                  )
               ) , 80 , )
            ) ;
            return () => void (
               clearInterval(tmoutId, )
            ) ;
         } , [] , ) ;
         ;
         return [
            void true ,
            ref1 ,
         ] as const ;
      }
   ) ;
   const CAsXADestParamEffectRoot = (
      identity<(
         React.FC<(
            {} 
            & Required<React.PropsWithChildren >
         )>
      )>((
         ({ children: payload, }) => {
            const [
               ,
               ref1,
            ] = (
               useXADestParamAutoDispatch1ACB()
            ) ;
            return (
               <div ref={ref1 } >
                  { payload }
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
         ]): [ null | ReactElement , {} , ] ;
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
            <div hidden >
               <button  
               className="CPlottedSourceNode1C-main"
               type="button"
               onClick={() => void apply1() }
               >
                  p  
               </button>
            </div>
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
      CAsXADestParamEffectRoot ,
      
      CStartExponentialApproachAtTime : (
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
                           .setTargetAtTime(newValue, specifiedEndT, tConstant1, )
                        ) ;
                     }
                  ))
               ) ;
               return (
                  necessaryMount
               ) ;
            }
         ))
      ) ,
      
      CJumpToValueAtTime : (
         identity<(
            React.FC<(
               {}
               & TAndNewValue
            )>
         )>((
            function CJumpToValueAtTime({ t: specifiedEndT, newValue, }, ) {
               const [
                  necessaryMount, 
                  {}, 
               ] = (
                  useXADestParamEffect((
                     (dest, ) => {
                        (
                           dest
                           .setValueAtTime(newValue, specifiedEndT, )
                        ) ;
                     }
                  ))
               ) ;
               return (
                  necessaryMount
               ) ;
            }
         ))
      ) ,

      CLinearRampToValueAtTime : (
         identity<(
            React.FC<(
               {}
               & TAndNewValue
            )>
         )>((
            function CLinearRampToValueAtTime({ t: specifiedEndT, newValue, }, ) {
               const [
                  necessaryMount, 
                  {}, 
               ] = (
                  useXADestParamEffect((
                     (dest, ) => {
                        (
                           dest
                           .linearRampToValueAtTime(newValue, specifiedEndT, )
                        ) ;
                     }
                  ))
               ) ;
               return (
                  necessaryMount
               ) ;
            }
         ))
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

