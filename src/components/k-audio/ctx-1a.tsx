


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
import { CtxValue, } from "./ctx-1a0";













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
      const aCtxExpectedT = (
         useLAudioCtxT(aCtx , { periodSecs : 0.125 , } , )
      ) ;
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
            if (presentlyCtxV ) {
               return {
                  tCtx: presentlyCtxV.tCtx ,
                  aCtx: (
                     presentlyCtxV.aCtx
                  ) ,
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
const useLAudioCtxT0 = (
   (...[c, { periodSecs, }, ] : [BaseAudioContext, { periodSecs : number ; }, ] ) => {
      const {
         cT ,
         setCT ,
         incrementCT ,
      } = useLAudioCtxTState1() ;
      React.useEffect(() => {
         let valid : boolean = true ;
         (async () => {
            ;
            LOOP1 :
            for (const { expectedCtxT, } of (
               Range(c.currentTime , Number.MAX_SAFE_INTEGER , periodSecs , )
               .map((expectedCtxT, ) => {
                  return {
                     expectedCtxT ,
                  } ;
               } )
            ) ) {
               /**   
                * - check {@link valid } 
                * - wait while ahead of {@link c.currentTime } ;
                * 
                */
               LOOP2 :
               for (;;) {
                  if (!valid ) {
                     break LOOP1 ;
                  }
                  ;
                  if (expectedCtxT <= c.currentTime ) {
                     break LOOP2 ;
                  }
                  ;
                  await (
                     new Promise(R => (
                        setTimeout(R, 8, ) // millis
                     ) )
                  ) ;
               }
               /**   
                * run {@link incrementCT }
                * 
                */
               incrementCT({ periodSecs, }, ) ;
            }
         } )() ;
         return (): void => {
            valid = false ;
         } ;
      } , [periodSecs, ] , ) ;
      return {
         c ,
         cT ,
      } ;
   }
) ;
const useLAudioCtxT = (
   (...args : Parameters<typeof useLAudioCtxT0 > ) => (
      useLAudioCtxT0(...args, )
      .cT
   )
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
   useLAudioCtxT ,

} ;



