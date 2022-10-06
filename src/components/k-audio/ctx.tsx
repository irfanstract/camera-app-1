



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