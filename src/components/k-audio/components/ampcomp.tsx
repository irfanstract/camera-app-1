



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

import { useConnectDisconnect, } from "components/k-audio/uacd";
import { 
   CToGivenAudioCtxDest, 
   CWithGivenAFltImpl ,
   CACtxtualDestNodeRefUser, 
   WithGivenDestNd ,
   WithCurrentACtx ,
} from "components/k-audio/ctx";

type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
 














function useConstantSrcNde(aCtx : BaseAudioContext) {
   return (
      useMemo(() => {
         const nd = (
            aCtx
            .createConstantSource()
         ) ;
         nd.start() ;
         nd.offset.value = 0 ;
         return nd ;
      } , [aCtx, ] , )
   ) ;
} ;
function useAmpNode(aCtx : BaseAudioContext ) {
   return (
      useMemo(() => {
         const nd = (
            aCtx
            .createGain()
         ) ;
         nd.gain.value = 0 ;
         return nd ;
      } , [aCtx, ] , )
   ) ;
} ;


