


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













;  



type CtxValue = (
   {} 
   & { pd: PdMode ; } 
   & { aCtx: BaseAudioContext ; } 
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

} ;  
namespace AUsable { ; } // TS-1205







export { 
   CtxValue , 
   CtxInferredValues ,
} ;
export default AUsable ;
