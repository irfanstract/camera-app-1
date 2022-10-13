


// m1-KAudio-ctx-1a-1

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

   // THE MAIN EXPORTS
   useLAudioCtxT0 ,
   useLAudioCtxT ,
   
   // THE UTILITy EXPORTS
   useLAudioCtxTState1 ,

} from "components/k-audio/uaCtxExpectedTLoopState" ;














type CtxValue = (
   {} 
   & { pd: PdMode ; } 
   & { aCtx: BaseAudioContext ; } 
   & { aCtxExpectedT: number ; } 
   & { tCtx : TAndTScale ; }
) ;
namespace CtxValue { ; } // TS-1205
type CtxInferredValues = (
   (
      {  tCtxValue : null | CtxValue["tCtx"] ;  } 
      &
      (
         {  aCtx : null ; dest : null ; } 
         |
         {  aCtx : BaseAudioContext ; dest : AudioNode | AudioParam ; } 
      )
   )
) ;
namespace CtxInferredValues { ; } // TS-1205
interface AUsable {
   
   ctx ?: React.Context<CtxValue | null> ;

   /**    
    * top-level usage
    * 
    */
   useInitially1 : (
      (...args : [aCtx : BaseAudioContext, ] ) 
      => CtxValue
   ) ;

   /**   
    * with given `dest` .
    * will likely amend {@link CtxValue.pd } and all implied/relevant vals, yet
    * will leave others unchanged .
    * 
    */
   useIWithGivenDestNd1 : (
      (...args : [AudioNode | AudioParam, ] ) 
      => (CtxValue | null )
   ) ;

   /**   
    * all values for the point the call is made at.
    * 
    */
   useCtxInferredValues : (
      ()
      => CtxInferredValues
   ) ;

} ;  

const {
ctx = (
   React.createContext<(
      null | 
      CtxValue
   )>(null , )
) ,
useInitially1 = (
   (...[aCtx, ] ) => {
      const aCtxExpectedT = (
         useLAudioCtxT(aCtx , { periodSecs : 0.125 , } , )
      ) ;
      return (
         useMemo((): CtxValue => ({
            pd: new PdMode.Stochastically(aCtx.destination, ) ,
            aCtx: aCtx ,
            aCtxExpectedT ,
            tCtx: TAndTScale.initially() ,
         }) , [aCtx, aCtxExpectedT, ], )
      ) ;
   }
) ,
useIWithGivenDestNd1 = (
   (...[dest, ] ) => {
      const presentlyCtxV = (
         React.useContext(ctx, )
      ) ;
      return (
         useMemo((): null | CtxValue => {
            if (presentlyCtxV ) {
               const {
                  aCtxExpectedT ,
               } = presentlyCtxV ;
               return {
                  tCtx: presentlyCtxV.tCtx ,
                  aCtx: (
                     presentlyCtxV.aCtx
                  ) ,
                  aCtxExpectedT ,
                  pd : (
                     new PdMode.Stochastically(dest, )
                  ) ,
               } ;  
            }
            throw TypeError(`not within initialised ctx. (use 'useInitially()' first ). `) ;
         } , [presentlyCtxV, dest, ], )
      ) ;
   }
) ,
} : (
   {}
   & Partial<AUsable >
) = { } ; //





export {
   PdMode ,
   TAndTScale ,

}
export {
   CtxValue ,
   ctx ,
   useInitially1 ,
   useIWithGivenDestNd1 ,
   
   useCtxInferredValues ,
   useLAudioCtxT ,

} ;



