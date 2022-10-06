



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
   & { tCtx : TAndTScale ; }
) ;
const ctx = (
   React.createContext<(
      null | 
      CtxValue
   )>(null , )
) ;
class PdMode {

   static OfToSendToDest = (
      class OfToSendToDest extends PdMode {
         constructor(public dest : AudioNode | AudioParam ,) {
            super() ;
         }
      }
   ) ;
   static Stochastically = (
      class StochasticMd extends PdMode.OfToSendToDest {}
   ) ;
   static OfQuantity = (
      class QuantityMd extends PdMode.OfToSendToDest {}
   ) ;

   // TODO
   static OfSequencer = (
      class OfSequencer extends PdMode {}
   ) ;

}
namespace PdMode { ; }  // TS-1205, TS-2702, 
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
         useMemo((): CtxValue => ({
            pd: new PdMode.Stochastically(aCtx.destination, ) ,
            tCtx: TAndTScale.initially() ,
         }) , [aCtx, ], )
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