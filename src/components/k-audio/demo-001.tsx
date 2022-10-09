



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
import { ACtxBoundary as ACtxBoundaryCc, } from "./ctxcroot";
import {
   CWaveTable ,
} from "./components/oscillativenode" ;
import {
   CAmpComp ,
} from "./components/ampcomp" ;















export default (
   identity<React.FC<{}> >((
      () => (
         <ACtxBoundaryCc 
         children={(
            <CAmpComp value={2 ** -2 } >
            <CWaveTable />
            </CAmpComp>
         ) }
         />
      )
   ))
) ;

;


