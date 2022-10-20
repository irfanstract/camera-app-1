



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
 














export default (
   identity((
      function <P extends { } >(...[displayName, F10, ] : [
         displayName: string,
         impl: (
            (props : (
               { [k in keyof P ] : P[k] ; } 
               & 
               { c : AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
            ) ) => ReturnType<React.FC<{}> >
         ) ,
      ] ) {
         const F1 : (
            React.FC<(
               { [k in keyof P ] : P[k] ; }
            )>
         ) = (
            (props ) => {
               return (
                  <WithCurrentACtx>
                  { (aCtx) => (
                  <CACtxtualDestNodeRefUser>
                  { ({ dest, } ) => (
                     <F10 
                     {...props }
                     c={dest }
                     aCtx={aCtx }
                     />
                  ) }
                  </CACtxtualDestNodeRefUser>
                  ) }
                  </WithCurrentACtx>
               ) ;
            }
         ) ;
         F1.displayName = (
            displayName
         ) ;
         return F1 ;
      }
   ))
) ;




