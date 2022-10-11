



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
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;
import { 
   CConstantValueSrc, 
   numericOrRElement ,
} from "./constantparamsourcenode";

type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
 














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
         <div style={{ display: `flex`, flexDirection: `column-reverse`, }}>
            <div>
            <WithGivenDestNd value={g1 } >
               { payload }
            </WithGivenDestNd>
            </div>
            <div>
            with <i>amp</i> : {}
            <WithGivenDestNd value={g1.gain } >
               { valueArgument1 }
            </WithGivenDestNd>
            {}
            </div>
         </div>
         </div>
      ) ;
   }
) ;
const wrp1 = currentAdestnoderefWrpcomp ;


const CAmpComp = (
   wrp1("CAmpCompC", CAmpCompImpl, )
) ;





export {
   CAmpComp ,
} ;



