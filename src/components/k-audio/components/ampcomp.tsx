



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
 














function useConstantSrcNde(aCtx : BaseAudioContext) {
   return (
      useMemo(() => {
         const nd = (
            aCtx
            .createConstantSource()
         ) ;
         nd.start() ;
         nd.offset.value = 0 ;
         return nd ;
      } , [aCtx, ] , )
   ) ;
} ;
function useAmpNode(aCtx : BaseAudioContext ) {
   return (
      useMemo(() => {
         const nd = (
            aCtx
            .createGain()
         ) ;
         nd.gain.value = 0 ;
         return nd ;
      } , [aCtx, ] , )
   ) ;
} ;


const CConstantValueSrcImpl : (
   React.FC<(
      { value : number ; }
      &
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
   )>
) = (
   ({ c: dest, aCtx, value, }) => {
      const g1 = (
         useConstantSrcNde(aCtx, )
      ) ;
      useConnectDisconnect(g1, dest, ) ;
      React["useInsertionEffect"](() => {
         (
            g1.offset
            .setTargetAtTime(value, 0, 0.125, )
         );
      } , [value, ] , );
      // TODO
      return (
         <div>
            <p>
               constant-source-node : {}
               <code>{ value }</code> {}
            </p>
         </div>
      ) ;
   }
) ;
const CAmpCompImpl : (
   React.FC<(
      { children: React.ReactNode ; }
      &
      { value : number | React.ReactElement ; }
      &
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
   )>
) = (
   ({ value: valueArgument0 , c: dest, aCtx, children: payload = null , }) => {
      const {
         valueArgument1 ,
         vDisplay ,
      } = (
         numericOrRElement((
            valueArgument0
         ), )
      ) ;
      const g1 = (
         useAmpNode(aCtx, )
      ) ;
      useConnectDisconnect(g1, dest, ) ;
      return (  
         <div>
         <p>
            Amp By {}
            { vDisplay } {}
         </p>
         <ol style={{ display: `flex`, flexDirection: `column-reverse`, }}>
            <li>
            <WithGivenDestNd value={g1 } >
               { payload }
            </WithGivenDestNd>
            </li>
            <li>
            <WithGivenDestNd value={g1.gain } >
               { valueArgument1 }
            </WithGivenDestNd>
            </li>
         </ol>
         </div>
      ) ;
   }
) ;
const wrp1 = (
   function <P extends { } >(...[displayName, F10, ] : [
      displayName: string,
      impl: (
         React.FC<(
            { [k in keyof P ] : P[k] ; } 
            & 
            { c : AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
         ) >
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
      F1.displayName = displayName ;
      return F1 ;
   }
) ;


const numericOrRElement = (
   (...[valueArgument0,] : [
      number | ReactElement ,
   ] ) => {
      const valueArgument1 : ReactElement = (
         typeof valueArgument0 === "number" ?
         <CConstantValueSrc value={valueArgument0 } />
         : valueArgument0
      ) ;
      const vDisplay = (
         <code>
         { (typeof valueArgument0 === "number" ) ? valueArgument0 : `(dynamic)` }
         </code>
      ) ;
      ;
      return {
         valueArgument1 ,
         vDisplay ,
      } ;
   }
) ;
const CAmpComp = (
   wrp1("CAmpCompC", CAmpCompImpl, )
) ;
const CConstantValueSrc = (
   wrp1("CConstantValueSrcC", CConstantValueSrcImpl, )
) ;





export {
   CAmpComp ,
   CConstantValueSrc ,
} ;


