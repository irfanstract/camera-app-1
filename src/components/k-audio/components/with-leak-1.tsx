



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
import { CFromGivenSrcNd1, } from "./from-w3anode";
















const useImplYNode = (
   function <A extends [
      BaseAudioContext ,
      (
         never
         | null
         | AudioNode 
         | AudioParam
      ), 
   ]>(...args : [
      ctx : A[0] , 
      dest : (
         never
         | A[1]
      ) ,
   ] ) {
      const [
         aCtx ,
         destNd ,
      ] = args ;
      ;
      /**   
       * two reasons :
       * - {@link destNd } 
       *   can't be guaranteed to be {@link AudioNode } (rather than {@link AudioParam } )
       * - invoking {@link destNd.connect } or `disconnect` 
       *   could break things
       * 
       */
      const yNode1 = (
         useMemo(() => (
            aCtx.createGain()
         ) , [aCtx, ] , )
      ) ;
      /**   
       * the one to be exposed.
       * 
       */
      const tapNd = (
         useMemo(() => (
            aCtx.createGain()
         ) , [aCtx, ] , )
      ) ;
      ctxs.useConnectDisconnect(yNode1, destNd, ) ;
      ctxs.useConnectDisconnect(yNode1, tapNd, ) ;
      ;
      return {
         // RE
         aCtx ,
         ctxtualDestNd: destNd ,
         // NEW
         yNode1 ,
         tapNd ,
      } ;
   }
) ;
/**
 * uses ave two options
 * - keeping the {@link AudioNode } ref passed when calling the callback
 * - specifying `fwdRef`
 * 
 */
const CWithLeak = (() => {
;
const {
  WithGivenDestNd ,
} = ctxs ;
type ADestAndCtxxProperties = (  
  (
      typeof ctxs.currentAdestnoderefWrpcomp
  ) extends { (name : never, impl : (props : infer Props) => never ): unknown } ?
  Props
  : never
) ;
;
type Payload = (
  null
  | React.ReactNode 
  | (
    (...a: [
        (
          {}
          & ReactElement
        ), 
    ] ) => ReactElement
  )
) ;
return (
  ctxs.currentAdestnoderefWrpcomp("CWithLeaking", (
    identity<(
      React.FC< (
          {}
          & ADestAndCtxxProperties
          & (
            never
            | { 
              children : (
                Payload
              ) ;
              fwdRef ?: React.Ref<never | AudioNode | ReactElement > ;
            }
          )
      )>
    )>((
      function CWithLeaking({ 
          children: payload, 

          fwdRef : specifiedRef ,

          c: ctxtualDestNd ,
          aCtx ,

      } , ) {
          const {
            yNode1 ,
            tapNd ,
          } = useImplYNode(aCtx, ctxtualDestNd, ) ;
          const {
            tapNdRenderedFormRefValue ,
          } = (
            
            useMemo(() => {
              ;
              ;
              return {
                
                tapNdRenderedFormRefValue : (
                  <CFromGivenSrcNd1 
                  value={tapNd} 
                  />
                ) ,
                
              } ;
            } , [tapNd , ] , )
            
          ) ;
          const tapNdRendered = (
            tapNdRenderedFormRefValue
          ) ; // 
          const doRenderPayload = (
            (typeof payload === "function" ) ?
            payload
            : (() => payload )
          ) ;
          const payloadRendered = (
            doRenderPayload((
              tapNdRendered
            ) , )
          ) ;
          return (() => {
            return (
                <WithGivenDestNd value={yNode1 } >
                <Fragment>
                { payloadRendered }
                </Fragment>
                </WithGivenDestNd>
            ) ;
          })() ;
      }
    ))
  ))
) ;
} )() ;











export {} ;
export { CWithLeak, } ;












