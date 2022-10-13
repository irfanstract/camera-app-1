


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

   // THE MAIN EXPORTS
   useLAudioCtxT0 ,
   useLAudioCtxT ,
   
   // THE UTILITy EXPORTS
   useLAudioCtxTState1 ,

} ;