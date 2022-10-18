



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
  CTCtxCurrentValueUser ,
} from "components/k-audio/ctx";
import { 
  WithCurrentACtx ,
  CACtxtualDestNodeRefUser, 
  WithGivenDestNd ,
} from "components/k-audio/ctx";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;
import { 
   CConstantValueSrc, 
   numericOrRElement ,
} from "./constantparamsourcenode";
import { CAmpComp, } from "./ampcomp";

type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
 














function useDelayNode(aCtx : BaseAudioContext ) {
  /**   
   * {@link DelayNode.delayTime } appears to be {@link AudioParam *k-rated* }
   * 
   */
  return (
    useMemo(() => {
        const nd = (
          aCtx
          .createDelay()
        ) ;
        /**   
         * needs to reset this {@link AudioParam } to `0`,
         * due to inherent end-usage as the RHS of {@link AudioNode.connect }
         * 
         */
        (
          /**   
           * using `p.value = (value) ;` 
           * would disallow possibilities which `p.setValueAtTime((value), 0, )` allows 
           * 
           */
          nd.delayTime
          .setValueAtTime(0 , 0 , )
        ) ;
        return nd ;
    } , [aCtx, ] , )
  ) ;
} ;




const {
  CAfterPostprocAbsoluteDelay ,
  CAfterPostprocCtxtualDelay ,
} = (() => {
  ;
  type ComponentArgs = (
    {} 
    & { children: React.ReactNode ; }
    & { value : number | React.ReactElement ; }
  ) ;
  ;
  /**   
   * the shared code-section
   * 
   */
  const useX1 = (
    function (...[properties, ] : [
      componentProperties : (
        ComponentArgs
        & { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
      ), 
    ] ) {
      const { 
        value: valueArgument0 ,  
        children: payload = null , 
      } = properties ;
      ;
      const {
         valueArgument1 ,
         vDisplay: valueArgIndicatiiveDisplay ,
      } = (
         numericOrRElement((
            valueArgument0
         ), )
      ) ;
      ;
      const {  
        c: dest, 
        aCtx,  
      } = properties ;
      const g1 = (
         useDelayNode(aCtx, )
      ) ;
      useConnectDisconnect(g1, dest, ) ;
      ;
      return {
        valueArgument0 ,
        valueArgument1 ,
        valueArgIndicatiiveDisplay ,
        payload ,

        aCtx ,
        dest ,

        g1 ,
        
      } ;
      ;
    }
  ) ;
  return {
    CAfterPostprocAbsoluteDelay : (
      currentAdestnoderefWrpcomp("CAfterPostprocDelay", (
        identity<(
          React.FC<(
            Parameters<typeof useX1 >[0]
          )>
        )>(function CAfterPostprocDelayImpl(properties, ) {
          const {
            valueArgument0 ,
            valueArgument1 ,
            valueArgIndicatiiveDisplay ,
            payload ,
    
            aCtx ,
            dest ,
    
            g1 ,
            
          } = useX1(properties, ) ;
          ;
          const main = (
            <div style={{ display: `flex`, flexDirection: `column-reverse`, }}>
                <div>
                  <WithGivenDestNd value={g1 } >
                    { payload }
                  </WithGivenDestNd>
                </div>
                <div>
                  with <i>delay</i> : {}
                  <WithGivenDestNd value={g1.delayTime } >
                    { valueArgument1 }
                  </WithGivenDestNd>
                  {}
                </div>
            </div>
          ) ;
          return (
            <div>
              <div>
                <p>
                  after postproc delay by {}
                  <code>{ valueArgument0 }</code> {}
                </p>
              </div>
              <div>
                { main }
              </div>
            </div>
          ) ;
        } )
      ), )
    ) ,

    CAfterPostprocCtxtualDelay : (
      identity<(
        React.FC<(
          ComponentArgs
        )>
      )>(function CAfterPostprocCtxtualDelay({
        children: payload ,
        value: specifiedCtrlValue ,
      }, ) {
        const {
          valueArgument1 : specifiedCtrlGraph, 
          vDisplay: specifiedValIndicativeDisplay ,
        } = (
          numericOrRElement(specifiedCtrlValue ,)
        ) ;
        return (
          <CTCtxCurrentValueUser>
          { ({ tScale, }) => (
          <div>
            <div>
              (
                relative argument { specifiedValIndicativeDisplay } {}
                evaluated within <code>{ JSON.stringify({ tScale, }, ) }</code> {}
              )
            </div>
            <div>
            <CAfterPostprocAbsoluteDelay
            value={(
              <CAmpComp value={tScale } >
                { specifiedCtrlGraph }
              </CAmpComp>
            )}
            >
              { payload }
            </CAfterPostprocAbsoluteDelay>
            </div>
          </div>
          ) }
          </CTCtxCurrentValueUser>
        ) ;
      } )
    ) ,

  } ;
} )() ;









export {} ;
export {
  CAfterPostprocAbsoluteDelay ,
  CAfterPostprocCtxtualDelay ,
} ;






