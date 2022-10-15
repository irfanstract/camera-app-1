



import { 
   EitherBothSetOrBothUnset, 
   EitherSetAndOthersUnset,
   EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing";
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
import { 
   FiniteLoopingFromT, 
} from "components/musical/util/looping-props";

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
// import { EnumValueDisplayElem, } from "components/json-display/enum-value-display";
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import { CToGivenAudioCtxDest, CACtxtualDestNodeRefUser, } from "components/k-audio/ctx";
import { WithGivenDestNd, } from "components/k-audio/ctx";
import {  // t-ctx(s)
   CTCtxCurrentValueUser, 
   WithGivenDelayOrSlowdown,   
} from "components/k-audio/ctx";
import {  
   CMereProductiveElem ,
   CMereMonitoringElem ,
} from "components/k-audio/ctx";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;




















type ExportedComponentsProps = {
   
   /**    
    * given `startT` and-then `period` and-then (either of the three) ;
    * 
    */
   CFiniteLoopingFromT : (
      {}
      & FiniteLoopingFromT.StartPointProps
      & FiniteLoopingFromT.Periodic
      & FiniteLoopingFromT.EndPointProps
   ) ;

} ;
type ExportedComponents = {
   
   [componentName in keyof ExportedComponentsProps ] : (
      React.FC<(
         {}
         & Required<React.PropsWithChildren>
         & ExportedComponentsProps[componentName ]
      )>
   ) ;

} ;
const CFLFT_PROPS_PARSE = (
   FiniteLoopingFromT
   .parseSPeProperties
) ;
export const {
   CFiniteLoopingFromT ,
   
} = (() : ExportedComponents => {
   return {
      CFiniteLoopingFromT : (
         (cProps , ) => {
            const { 
               // PAYLOADS
               children : payload ,
            } = cProps ;
            const {
               startT ,
               period ,
               endT ,
               n ,
            } = (
               CFLFT_PROPS_PARSE(cProps , )
            ) ;
            return (
               <div >
                  <p>
                     Looping
                  </p>
                  <CMereMonitoringElem>
                     <pre>
                     { (
                        JSON.stringify({
                           startT ,
                           period ,
                           endT ,
                           n ,
                        } , null , 2 , )
                     ) }
                     </pre>
                  </CMereMonitoringElem>
               </div>
            ) ;
         } 
      ) ,
   } ;
})() ;




export {} ;
