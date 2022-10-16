



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












function useConstantSrcNde(aCtx : BaseAudioContext) {
   return (
      useMemoisedResource<ConstantSourceNode>((s, ) => {
      ;
      {
         // TODO
         if (s) {
            s.stop() ;
         }
      }
      {
         const nd = (
            aCtx
            .createConstantSource()
         ) ;
         nd.start() ;
         /**    
          * to avoid unexpected interleave,
          * `t` should be specified-explicitly `0` .
          * 
          */
         nd.offset.setValueAtTime(0, 0, ) ;
         return nd ;
      }
      } , [aCtx, ] , )
   ) ;
} ;



export {
   useConstantSrcNde ,
} ;
export default (
   useConstantSrcNde
) ;