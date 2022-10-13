



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

import { useConnectDisconnect, } from "components/k-audio/uacd";
import useConstantSrcNde from "../useConstantSrcNde";
import { 
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
 














type PsTAndTScale = (
   Parameters<(
      ComponentProps<typeof CTCtxCurrentValueUser >["children"]
      & object
   )>[0]
) ;
/**   
 * 
 */
const CCPS_CTXTVALREAD = (() => {
   return (
      React.forwardRef((
         identity<(
            React.ForwardRefRenderFunction<(
               PsTAndTScale
            ) , { value : PsTAndTScale, } >
         ) >((
            function CCPS_CTXTVALREAD_COMP({ value, }, ref1, ) {
               React.useImperativeHandle((
                  ref1
               ) , () => value , );
               return (
                  <Fragment />
               ) ;
            }
         ))
      ))
   ) ;
} )() ;
const CCPS_IMPL_1A : (
   React.FC<(
      { value : [{ (...args : [Pick<AudioParam, "setTargetAtTime" | "minValue" | "maxValue" | "value" >,] ): void ; } , React.DependencyList , ] ; }
      &
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
   )>
) = (
   ({ c: dest, aCtx, value: [cb, cbDependencies, ], }) => {
      const g1 = (
         useConstantSrcNde(aCtx, )
      ) ;
      useConnectDisconnect(g1, dest, ) ;
      const [tCtxVal, setTCtxVal, ] = (
         useState<null | PsTAndTScale >(null , )
      ) ;
      const [ , refresh, ] = (
      useReducer(() => {
         g1.offset.cancelScheduledValues(0, ) ;
         cb(...((p: AudioParam , ) : Parameters<typeof cb > => {
            const {
               minValue ,
               maxValue ,
            } = p ;
            return [
               {
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
                  // TODO
                  setTargetAtTime() {
                     return this as AudioParam ;
                  } ,
               } ,
            ] ;
         } )(g1.offset , ) ) ;
      } , void 0 , )
      ) ;
      React["useLayoutEffect"](() => (
         void (
            refresh()
         )
      ) , cbDependencies , ) ;
      return (
         <Fragment>
         <aside style={{ display: `none`, }} >
            <CTCtxCurrentValueUser>
               { (value) => (
                  <CCPS_CTXTVALREAD 
                  ref={setTCtxVal } 
                  value={value } 
                  />
               ) }
            </CTCtxCurrentValueUser>
         </aside>
         <div />
         </Fragment>
      ) ;
   }
) ;
const CPlottedSourceNode1A = (
   currentAdestnoderefWrpcomp("CPlottedSourceNode1A", CCPS_IMPL_1A, )
) ;





export {
   CPlottedSourceNode1A ,
} ;

