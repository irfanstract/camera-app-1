



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
import { memoize , } from "lodash";

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
import { ComponentProps, } from "components/util-jsx-props";
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import { fillWithWhiteNoise, } from "components/k-audio-w3/audioBufferFWhiteNoise";

import { CWaveTable, } from "./oscillativenode";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp";

const AUDIOCTX_WHITENOISEBUF = Symbol() ;
declare global {
   interface BaseAudioContext {
      [AUDIOCTX_WHITENOISEBUF ] : () => AudioBuffer ;
   }
}
BaseAudioContext.prototype[AUDIOCTX_WHITENOISEBUF ] = (
   function () {
      const buf1 = (
         this.createBuffer(1, this.sampleRate, this.sampleRate, )
      ) ;
      fillWithWhiteNoise(buf1.getChannelData(0, ) , ) ;
      this[AUDIOCTX_WHITENOISEBUF] = (
         () => buf1
      ) ;
      return buf1 ;
   }
) ;














const CWhiteNoise = (
currentAdestnoderefWrpcomp("CWhiteNoise", (
   identity<(
      React.FC<(
         {}
         & (
            (
               typeof currentAdestnoderefWrpcomp
            ) extends { (name : never, impl : (props : infer Props) => never ): unknown } ?
            Props
            : never
         )
      )>
   )>(function CWhiteNoise({
      c : dest ,
      aCtx , 
   } , ) {
      const b = (
         useMemo(() => (
            aCtx[AUDIOCTX_WHITENOISEBUF]()
         ) , [aCtx, ] , )
      ) ;
      return (
         <CWaveTable 
         type={b }
         f={1 }
         det={0 }
         />
      ) ;
   })
))
) ;











export default (
   CWhiteNoise
) ;
export { CWhiteNoise, } ;






