


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

import AUsable from "./ctx-1a0";













type CtxValue = (
   {} 
   & { pd: PdMode ; } 
   & { aCtx: BaseAudioContext ; } 
   & { tCtx : TAndTScale ; }
) ;
namespace CtxValue { ; } // TS-1205 
const {
ctx = (
   React.createContext<(
      null | 
      CtxValue
   )>(null , )
) ,
useInitially1 = (
   (...[aCtx, ] ) => {
      return (
         useMemo((): CtxValue => ({
            pd: new PdMode.Stochastically(aCtx.destination, ) ,
            aCtx: aCtx ,
            tCtx: TAndTScale.initially() ,
         }) , [aCtx, ], )
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
) ,
useCtxInferredValues = (
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
) ,
} : (
   {}
   & Partial<AUsable >
) = { } ; //
const useLAudioCtxTState1 = (
   () => {
      ;
      const [cT , setCT , ] = (
         useState<BaseAudioContext["currentTime"] >(0 )
      ) ;
      const [ , incrementCT, ] = (
         useReducer((
            (...[ , { periodSecs, } , ] : [
               void, 
               { periodSecs : number ; }, 
            ]): void => {
               setCT((v : number ) => (
                  v + periodSecs 
               ) ) ;
            }
         ) , void true , )
      ) ;  
      ;
      return {
         cT ,
         setCT ,
         incrementCT ,
      } ;
   }
) ;





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

} ;



