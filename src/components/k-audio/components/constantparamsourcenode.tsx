



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
import useMemoisedResource from "components/useMemoisedResource";

import { useConnectDisconnect, } from "components/k-audio/uacd";
import { 
   CToGivenAudioCtxDest, 
   CWithGivenAFltImpl ,
   CACtxtualDestNodeRefUser, 
   WithGivenDestNd ,
   WithCurrentACtx ,
} from "components/k-audio/ctx";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;

type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
 














function useConstantSrcNde(aCtx : BaseAudioContext) {
   return (
      useMemoisedResource<ConstantSourceNode>((s, ) => {
      ;
      {
         // TODO
         if (s) {
            s.stop() ;
         }
      }
      {
         const nd = (
            aCtx
            .createConstantSource()
         ) ;
         nd.start() ;
         nd.offset.value = 0 ;
         return nd ;
      }
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
      } , [g1, value, ] , );
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


const CConstantValueSrc = (
   currentAdestnoderefWrpcomp("CConstantValueSrcC", CConstantValueSrcImpl, )
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





export {
   CConstantValueSrc ,
   numericOrRElement ,
} ;




