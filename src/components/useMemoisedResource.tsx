



/**  
 * obscure the built-in mutable Collections, by design
 * 
 */
//  import { 
//    // Seq and List
//    Seq, 
//    List, 
//    Range, 
//    // Set
//    Set, 
//    SortedSet ,
//    // Map
//    Map, 
//    SortedMap ,
// } from "components/util-immutable-datastructure" ;
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













const useMemoisedResource : {
   <State extends true | {} | object >(...args : [
      compute : (
         (existingState : null | State, ) 
         => State
      ) ,
      dependencies : React.DependencyList ,
   ] ) : State
} = (
   (dispatchImpl, dependencies, ) => {
      const [value, refresh, ] = (
         useReducer(dispatchImpl, null, dispatchImpl, )
      ) ;
      React.useLayoutEffect(refresh, dependencies, ) ;
      return (
         value
      ) ;
   }
) ;

export {
   useMemoisedResource ,
} ;
export default (
   useMemoisedResource
) ;