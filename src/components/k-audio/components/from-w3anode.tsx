



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
import { ComponentProps, } from "components/util-jsx-props";
// import { EnumValueDisplayElem, } from "components/json-display/enum-value-display";
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import * as ctxs from "./util-1" ;

type ADestAndCtxxProperties = (  
  (
    typeof ctxs.currentAdestnoderefWrpcomp
  ) extends { (name : never, impl : (props : infer Props) => never ): unknown } ?
  Props
  : never
) ;

const {
  CMereMonitoringElem ,
  CMereProductiveElem ,
} = ctxs ;


















const {
  CFromGivenSrcNd1 ,
  
} = (() => {
;

return {
  CFromGivenSrcNd1 : (
    ctxs.currentAdestnoderefWrpcomp("CFromGivenSrcNd", (
      identity<(
        React.FC< (
          {}
          & (
            {}
            & { value : AudioNode ; }
            // no `children` ; this shall be Src Component !
          )
          & ADestAndCtxxProperties
        )>
      )>(function (properties , ) {
        const {
          value: src, 
        } = properties ;
        ;
        const {
          c: dest ,
          aCtx ,
        } = properties ;
        ctxs.useConnectDisconnect(src, dest, ) ;
        ;
        return (
          <CMereMonitoringElem>
            <p>
              From Src Node {}
              <code>{ String(src, ) }</code> {}
            </p>
          </CMereMonitoringElem>
        ) ;
      } )
    ))
  ) ,

} ;
} )() ;









export {} ;
export { CFromGivenSrcNd1 , } ;








