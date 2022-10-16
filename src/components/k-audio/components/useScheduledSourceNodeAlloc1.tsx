



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
import { clamp, } from "lodash";

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
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

type ACanConnectOrDisconnect = (
   { connect(dest: AudioNode | AudioParam , i?: number , ): void ; }
   &
   { disconnect(dest?: AudioNode | AudioParam , i?: number , ): void ; }
) ;















const aparamIntrinsicValueZeroify = (
   (aP: AudioParam, ) => {
      aP.value = (
         clamp(0, aP.minValue, aP.maxValue, )
      ) ;
   }
) ;
const useScheduledSrcNodeAlloc = (
identity((
   function useIMplOscillativeNodeAllocC<A extends AudioScheduledSourceNode >(...a : [
      (
         {}
         & { ctx : BaseAudioContext ; }
         & { dest : AudioNode | AudioParam ; }
      ) ,
      (ctx : BaseAudioContext, ) => A ,
   ] ) {
      const [
         { 
            ctx: aCtx, 
            dest, 
         }, 
         makeRawAlloc, 
      ] = a ;
      return (
         useMemoisedResource<[A , ]>((
            (...[priorState, ] ) => {
               if (priorState) {
                  const [
                     oldPeer ,
                  ] = priorState ;
                  oldPeer.disconnect() ;
               }
               {
                  const waveTable1 = (
                     makeRawAlloc(aCtx, )
                  ) ;
                  (
                     identity<ACanConnectOrDisconnect>(waveTable1 )
                     .connect(dest , )
                  ) ;
                  /**    
                   * all of the usages would be via {@link AudioNode.connect } ;
                   * therefore, 
                   * - the {@link OscillatorNode.frequency }'s intrinsic-value 
                   *   shall be set to `0` (or a value close-enough-to `0` )
                   * - {@link OscillatorNode.detune } already default to `0` ;
                   *   no explicit/manual treatment necessary
                   * 
                   */
                  {
                     ;
                     if ((
                        false 
                        || waveTable1 instanceof ConstantSourceNode
                     )) 
                     {
                        (
                           [waveTable1.offset, ]
                           .map(aparamIntrinsicValueZeroify )
                        ) ;
                     } 
                     if ((
                        false 
                        || waveTable1 instanceof OscillatorNode
                     )) 
                     {
                        (
                           [waveTable1.frequency, ]
                           .map(aparamIntrinsicValueZeroify )
                        ) ;
                     } 
                     if ((
                        false 
                        || waveTable1 instanceof AudioBufferSourceNode
                     ) ) 
                     {
                        (
                           [waveTable1.playbackRate, ]
                           .map(aparamIntrinsicValueZeroify )
                        ) ;
                     } 
                     if ((
                        false 
                        || waveTable1 instanceof AudioBufferSourceNode
                        || waveTable1 instanceof OscillatorNode
                     ) ) 
                     {
                        (
                           [waveTable1.detune, ]
                           .map((aP: AudioParam, ) => {
                              aP.value = 0 ;
                           } )
                        ) ;
                     } 
                  }
                  waveTable1.start() ;
                  return [waveTable1, ] ;
               }
            }
         ) , [aCtx , ] , )
         ) ;
   } 
))
) ;
















export {} ;
export default (
   useScheduledSrcNodeAlloc
) ;
export {
   useScheduledSrcNodeAlloc ,
} ;





