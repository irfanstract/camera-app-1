



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
import { newCompletableFuture, } from "components/util/CompletableFuture";
import { TAndTScale, } from "./TOffsetAndScaleProperties";
import { PdMode, } from "./graph-modes";

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
import downloadGivenBlob from "components/files-dialogues/downloadGivenBlob";

import { useConnectDisconnect, } from "./uacd";
import {
   CtxValue ,
   ctx ,
   useInitially1 ,
   useIWithGivenDestNd1 ,
   useIWithDelayOrSlowdown ,
   useCtxInferredValues ,
} from "./ctx-1a" ;















export {
   PdMode ,
   TAndTScale ,
} ;
type ANFC<A extends AudioNode > = (
   { 
      init : (
         (...args : [BaseAudioContext, {}?, ] ) 
         => A
      ) ; 
   }
   &
   { 
      update : (
         (...args : [A, {}?, ] ) 
         => ReturnType<React.EffectCallback >
      ) ; 
      updateDependencies : (
         React.DependencyList
      ) ;
   }
) ;
namespace ANFC { ; } // TS-1205
const useANodeFltCallback1 : (
   <A extends AudioNode >(...args : [
      (
         ANFC<A>
      ), 
   ] ) 
   => (CtxValue | null )
) = (
   (...[impl1, ] ) => {
      /**    
       * QUERYING FOR
       * THE CTXTUAL VALUES
       * 
       */
      const {
         aCtx ,
         aCtxExpectedT ,
         dest ,
         tCtxValue ,
      } = (
         useCtxInferredValues()
      ) ;
      /**    
       * THE INSTANTIATION
       * 
       */
      const {
         introducedNode1 ,
      } = (
         React.useMemo(() => (
            (aCtx && dest ) ?
            {
               introducedNode1: (
                  impl1.init(aCtx )
               ) ,
            }
            : { introducedNode1 : null , }
         ) , [aCtx , ] )
      ) ;
      /**    
       * THE UPDATING
       * 
       */
      React["useLayoutEffect"](() => {
         ;
         if (introducedNode1 ) {
            return (
               impl1.update(introducedNode1 , )
            ) ;
         } ;
      } , impl1.updateDependencies , ) ;
      /**    
       * THE `connect()` AND `disconnect()` CALLS
       * 
       */
      useConnectDisconnect((
         introducedNode1
      ), dest, ) ;
      /**    
       * 
       */
      return (
         useMemo((): (null | CtxValue) => {
            if ((
               true 
               && introducedNode1 
               && tCtxValue
               && aCtxExpectedT 
            )) {
               return {
                  pd: new PdMode.Stochastically(introducedNode1 , ) ,
                  aCtx: introducedNode1.context ,
                  aCtxExpectedT ,
                  tCtx: tCtxValue ,
               } ;
            } else {
               return null ;
            }
         } , [introducedNode1, tCtxValue, ], )
      ) ;
   }
) ;
const xRec1 = (
   async function (...a : [
      AudioContext ,
      (
         Required<ReturnType<typeof useInitially1 > >["rootPtLeak"]
      ) ,
      {} ,
   ] ) {
      const [
         aCtx ,
         rootPtLeak ,
         {} ,
      ] = a ;
      ;
      let [assmb]: [null | Blob] = [null] ;
      assmb = null ;
      const pushData = (
         (v: Blob) => {
            const b0 = (
               assmb || new Blob([], { type: v.type, })
            ) ;
            assmb = (
               new Blob([b0, v, ], { type: b0.type, })
            ) ;
         }
      );
      const sNd1 = (
         aCtx.createMediaStreamDestination()
      ) ;
      const [whenShallDisconnect, { resolve: signifyShallDisconnect, }, ] = (
         newCompletableFuture<(
            never
            | (
               {}
            )
         )>()
      ) ;
      const whenDataFinal = (async () => {
         await whenShallDisconnect ;
         console.log((
            `rec stopped ; data will be available soon ;`
         ));
         await (
            new Promise<void>(R => (
               setTimeout(R, 2 * 1000 , )
            ) )
         ) ;
      } )() ;
      rootPtLeak.connect(sNd1, ) ;
      await (
         new Promise<void>(R => (
            setTimeout(R , 1 * 1000 , )
         ))
      ) ;
      const r1 = (
         new MediaRecorder(sNd1.stream, {
            mimeType : "video/webm" ,
         } , )
      ) ;
      await (
         new Promise<void>(R => (
            setTimeout(R , 1 * 1000 , )
         ))
      ) ;
      (async () => {
         await whenShallDisconnect ;
         rootPtLeak.disconnect(sNd1, ) ;
      } )() ;
      r1.addEventListener("start", () => {
         console.log(TypeError("recording starting") , ) ;
      }) ;
      r1.addEventListener("stop" , signifyShallDisconnect, ) ;
      r1.addEventListener("error", e => {
         console.warn(e.error, ) ;
         signifyShallDisconnect(e, ) ;
      }, ) ;
      (async () => {
         await whenDataFinal ;
         const d = assmb ;
         if (d) {
            downloadGivenBlob(d, { name: "recording", }, ) ;
         }
         // TODO
      } )() ;
      r1.addEventListener("dataavailable", (e) => {
         const { data, } = e ;
         console.log({ data, e, }) ;
         pushData(data, ) ;
      }) ;
      const highLevelStop = () => {
         if ((
            true
            || (r1.state === "recording" || r1.state === "paused" )
         )) {
            r1.stop() ;
         }
      } ;
      (async() => {
         await (
            new Promise<void>(R => (
               setTimeout(R , 1 * 1000 , )
            ))
         ) ;
         r1.start() ;
         (async () => {
            ;
            for(;;) {
               ;
               await (
                  new Promise<void>(R => (
                     setTimeout(R , 3 * 1000 , )
                  ))
               ) ;
               console.log({ 
                  state : r1.state,
                  bitR : [
                     r1.audioBitsPerSecond ,
                     r1.videoBitsPerSecond ,
                  ] as const ,
               }) ;
               r1.requestData() ;
            }
         })() ;
      } )() ;
      ;
      return [
         (
            <button type="button" onClick={highLevelStop} >
               Stop
            </button>
         ) ,
         {
            stop: (
               highLevelStop
            ) ,
         } ,
      ] as const ;
   }
) ;
const CToGivenAudioCtxDest : (
   React.FC<(
      Required<React.PropsWithChildren >
      &
      { value : BaseAudioContext ; }
   )>
) = (
   ({ value: aCtx, children: payload, }) => {
      const { Provider, } = ctx ;
      const prvv1 = (
         useInitially1(aCtx, )
      ) ;
      const [recSwitchE, setReSwitchE, ] = (
         useState<React.ReactElement>((
            <></>
         ))
      ) ;
      const onRecBtnClick = async () => {
         const {
            rootPtLeak = null ,
         } = prvv1 ;
         if ((
            true 
            && aCtx instanceof AudioContext
            && rootPtLeak
         )) {
            const [
               e,
               { stop, } ,
            ] = await xRec1(aCtx, rootPtLeak, {}, ) ;
            setReSwitchE(() => e , ) ;
         }
      } ;
      return (
         <div
         style={{
            display: "flex" ,
            flexDirection: "column-reverse" ,
         }}
         >
            <div>
            <Provider value={prvv1 } >
               { payload }
            </Provider>
            </div>
            <p>
               { recSwitchE }
               <button type="button" onClick={onRecBtnClick } >
                  REC 
               </button>
            </p>
         </div>
      ) ;
   }
) ;
const CWithGivenAFltImpl = (
   function <A extends AudioNode >(...[{ children: payload, impl, }, ] : [
      options: (
         Required<React.PropsWithChildren >
         &
         { impl : ANFC<A> ; }
      ) ,
   ] ) {
      const { Provider, } = ctx ;
      const prvv1 = (
         useANodeFltCallback1(impl, )
      ) ;
      ;
      return (
         prvv1 ?
         <Provider value={prvv1 } >
            { payload }
         </Provider>
         : null
      ) ;
   }
) ;
const WithGivenDestNd = (
   identity<(
      React.FC<(
         { value : Parameters<typeof useIWithGivenDestNd1 >[0] ; }
         &
         Required<React.PropsWithChildren >
      )>
   )>((
      function WithGivenDestNdC({ value: dest, children: payload, }) {
         ;
         const { Provider, } = ctx ;
         const prvv1 = (
            useIWithGivenDestNd1(dest, )
         ) ;
         ;
         return (
            prvv1 ?
            <Provider value={prvv1 } >
               { payload }
            </Provider>
            : null
         ) ;
      }
   ))
) ;
const WithGivenDelayOrSlowdown = (
   identity<(
      React.FC<(
         { value : Parameters<typeof useIWithDelayOrSlowdown >[0] ; }
         &
         Required<React.PropsWithChildren >
      )>
   )>((
      function WithGivenDestNdC({ value: dest, children: payload, }) {
         ;
         const { Provider, } = ctx ;
         const prvv1 = (
            useIWithDelayOrSlowdown(dest, )
         ) ;
         ;
         return (
            prvv1 ?
            <div>
            <p>
               { JSON.stringify(dest, null, 2, ) }
            </p>
            <Provider value={prvv1 } >
               <div style={{ display: `flex`, flexDirection: `column`, }} >
               <aside>
               <CTCtxCurrentValueUser>
               { ({ t: absoluteT, tScale, }) => (
                  <pre>
                     { JSON.stringify({ absoluteT, tScale, }, null, ) }
                  </pre>
               ) }
               </CTCtxCurrentValueUser>
               </aside>
               { payload }
               </div>
            </Provider>
            </div>
            : null
         ) ;
      }
   ))
) ;
export {
   CToGivenAudioCtxDest ,
   CWithGivenAFltImpl ,
   ANFC ,
   useCtxInferredValues ,
   useIWithGivenDestNd1 ,
   WithGivenDestNd ,
   WithGivenDelayOrSlowdown ,
} ;
export const WithCurrentACtx = (
   identity<(
      React.FC<(
         React.ConsumerProps<BaseAudioContext>
      )>
   ) >((
      function WithCurrentACtxC({ children, }) {
         const ctxv = (
            React
            .useContext(ctx, )
         ) ;
         return (
            <>
            { ctxv && children(ctxv.aCtx, ) }
            </>
         ) ;
      }
   ))
) ;
const CACtxExpectedCurrentStateValuesUser : (
   React.FC<(
      React.ConsumerProps<(
         {}
         & {
            /**    
             * the expected `t`
             */
            expectedT : number ;
         }
      )>
   )>
) = (
   ({ children: payload , }) => {
      const { Consumer, } = ctx ;
      return (
         <Consumer>
         { (c) => {
            if (c) {
               const { 
               } = c ;
               return (
                  payload({
                     expectedT : (
                        c.aCtxExpectedT
                     ) ,
                  } , )
               ) ;
            } else {}
            return null ;
         } }
         </Consumer>
      ) ;
   }
) ; 
const CACtxtualDestNodeRefUser : (
   React.FC<(
      React.ConsumerProps<PdMode.OfToSendToDest >
   )>
) = (
   ({ children: payload , }) => {
      const { Consumer, } = ctx ;
      return (
         <Consumer>
         { (c) => {
            if (c) {
               const { pd, } = c ;
               if (pd instanceof PdMode.OfToSendToDest ) {
                  return (
                     payload(pd, )
                  ) ;
               }
            } else {}
            return null ;
         } }
         </Consumer>
      ) ;
   }
) ;
const CTCtxCurrentValueUser : (
   React.FC<(
      React.ConsumerProps<(
         {}
         & TAndTScale 
      )>
   )>
) = (
   ({ children: payload , }) => {
      const { Consumer, } = ctx ;
      return (
         <Consumer>
         { (c) => {
            if (c) {
               const { tCtx, } = c ;
               return (
                  payload(tCtx , )
               ) ;
            } else {}
            return null ;
         } }
         </Consumer>
      ) ;
   }
) ; 
const CInferredValuesUser : (
   React.FC<(
      React.ConsumerProps<(
         ReturnType<(
            typeof useCtxInferredValues
         )>
      )>
   )>
) = (
   ({ children: payload , }) => {
      const ctxInferredValues = (
         useCtxInferredValues()
      ) ;
      return (
         <>
         { (
            payload((
               ctxInferredValues
            ) , )
         ) }
         </>
      ) ;
   }
) ;
export {
   CInferredValuesUser ,
   CACtxtualDestNodeRefUser ,
   CACtxExpectedCurrentStateValuesUser ,
   CTCtxCurrentValueUser ,
} ;
/**    
 * monitoring-or-visualisational only,
 * not-at-all playing role in the main production
 * 
 */
const CMereMonitoringElem : (
   React.FC<(
      Required<React.PropsWithChildren >
   )>
) = (
   ({ children, }) => (
      <div style={{ border: `0.1em solid black` }} >
         { children }
      </div> 
   )
) ;
/**    
 * playing role in the main production,
 * not-at-all displaying any monitoring 
 * 
 */
const CMereProductiveElem : (
   React.FC<(
      Required<React.PropsWithChildren >
   )>
) = (
   ({ children, }) => (
      <div style={{ border: `0.1em solid red` }} >
         { children }
      </div> 
   )
) ;
export {
   CMereMonitoringElem ,
   CMereProductiveElem ,
} ;