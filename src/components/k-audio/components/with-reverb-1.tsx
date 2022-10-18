



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
import { CWithLeak, } from "./with-leak-1";
import { CAmpComp, } from "./ampcomp";
import { 
   CAfterPostprocAbsoluteDelay, 
   CAfterPostprocCtxtualDelay ,
} from "./delayed-1";

type ADestAndCtxxProperties = (  
  (
      typeof ctxs.currentAdestnoderefWrpcomp
  ) extends { (name : never, impl : (props : infer Props) => never ): unknown } ?
  Props
  : never
) ;
















export const {
  CAfterAbsoluteReverbEffect ,
  CAfterRelativeReverbEffect ,
} = (() => {
;
type Properties = (
  {}
  & { children: React.ReactNode ; }
  & { echoPeriod ?: number | React.ReactElement ; }
  & { ampPerS    ?: number | React.ReactElement ; }
) ;
;
const impl1 = (
  function <
  AbsOrRelative extends "absolute" | "relative" ,
  > (...args : [
    AbsOrRelative ,
  ] ) {
    const [absRelMode, ] = args ;
    const WithXDelayEffect : (
      never
      | (typeof CAfterPostprocAbsoluteDelay )
      | (typeof CAfterPostprocCtxtualDelay  )
    ) = (
      {
        absolute : (CAfterPostprocAbsoluteDelay) ,
        relative : (CAfterPostprocCtxtualDelay ) ,
      }[absRelMode ]
    ) ;
    return (
    identity<(
      React.FC<(
        {}
        & Properties
      )>
    )>(function CAfterReverbEffect({
      echoPeriod: specifiedEchoPeriod = (1 / 8 ) ,
      ampPerS : specifiedAmpPerS = (2 ** -2 ) ,
      children : payload ,
    }, ) {
      return (
        <div>
        <div>
          <p>
            After The Reverb Effect {}
            <code>{ absRelMode } { String(specifiedEchoPeriod, ) }</code>
          </p>
        </div>
        <div>
          <CWithLeak>
          { (refback1, ) => (
            <Fragment>
            <div style={{ display: `none`, }} >
              <WithXDelayEffect 
              value={specifiedCtrlValue } 
              >
                { refback1 }
              </WithXDelayEffect>
            </div>
            <div>
              { payload }
            </div>
            </Fragment>
          ) }
          </CWithLeak>
        </div>
        </div>
      ) ;
    } )
    ) ;
  }
) ;
return {
  CAfterAbsoluteReverbEffect : (
    impl1("absolute" , )
  ) ,
  CAfterRelativeReverbEffect : (
    impl1("relative" , )
  ) ,
} ;
} )() ;








export {} ;