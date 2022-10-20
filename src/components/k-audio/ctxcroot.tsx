



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

import { CToGivenAudioCtxDest, CACtxtualDestNodeRefUser, } from "./ctx";
import { useIndependentACtx, ACtxBoundary, } from "./actx-base";















/**    
 * {@link ACtxBoundary } plus additional takecare.
 * 
 */
const ACtxBoundaryCc = (
   identity<(
      React.FC<(
         { children : React.ReactNode ; }
      )> 
   )>((
      ({ children: payload, }) => (
         <ACtxBoundary>
         { (c, ) => {
            const suspentiveBtn = (
               <button type="button" onClick={() => c.suspend() } >
                  suspend
               </button>
            ) ;
            const resumptiveBtn = (
               <button type="button" onClick={() => c.resume() } >
                  resume
               </button>
            ) ;
            return (
               <div>
                  <p>
                     <code>{ String(c , ) }</code>
                     { suspentiveBtn }
                     { resumptiveBtn }
                  </p>
                  <CToGivenAudioCtxDest value={c } >
                  <div>
                     { payload }
                  </div>
                  </CToGivenAudioCtxDest>
               </div>
            ) ;
         } }
         </ACtxBoundary>
      )
   ))
) ;



export {
   ACtxBoundaryCc as ACtxBoundary ,
} ;




