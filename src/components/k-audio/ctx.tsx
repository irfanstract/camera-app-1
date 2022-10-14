



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

} from "react";      
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';















type CtxValue = (
   {} 
   & { pd: PdMode ; } 
   & { aCtx: BaseAudioContext ; } 
   & { tCtx : TAndTScale ; }
) ;
const ctx = (
   React.createContext<(
      null | 
      CtxValue
   )>(null , )
) ;
class PdMode /* */ {}
namespace PdMode {

   export class OfToSendToDest extends PdMode {
         constructor(public dest : AudioNode | AudioParam ,) {
            super() ;
         }
   } ;
   export const Stochastically = (
      class StochasticMd extends PdMode.OfToSendToDest {}
   ) ;
   export const OfQuantity = (
      class QuantityMd extends PdMode.OfToSendToDest {}
   ) ;

   // TODO
   export class OfSequencer extends PdMode {} ;

}  // TS-1205, TS-2702, 
class TAndTScale {

   withDurativeFactor(f: number ) {
      return (
         new TAndTScale(this.t, f * this.tScale, )
      ) ;
   }
   withSpeedFactor(f: number ) {
      return (
         new TAndTScale(this.t, this.tScale / f , )
      ) ;
   }

   constructor(
      public t: number ,
      public tScale: number ,
   ) {}
   static initially = () => (
      new TAndTScale(0, 1, )
   ) ;

}
namespace TAndTScale { ; }  // TS-1205, TS-2702, 
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
export {
   CToGivenAudioCtxDest ,
} ;
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
const CInferredValuesUser : (
   React.FC<(
      React.ConsumerProps<(
         ReturnType<(
            typeof useCtxInferredValues
         )>
      )>
   )>
) = (
   ({ children: payload , }) => {
      const ctxInferredValues = (
         useCtxInferredValues()
      ) ;
      return (
         <>
         { (
            payload((
               ctxInferredValues
            ) , )
         ) }
         </>
      ) ;
   }
) ;
export {
   CACtxtualDestNodeRefUser ,
} ;