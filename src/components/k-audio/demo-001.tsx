



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

} from "react";      
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import { CToGivenAudioCtxDest, CACtxtualDestNodeRefUser, } from "./ctx";
import { useIndependentACtx, ACtxBoundary, } from "./actx-base";















const CWaveTableImpl : (
   React.FC<(
      { type : Exclude<OscillatorType, "custom" > | PeriodicWave ; }
      &
      { c: AudioNode ; }
   )>
) = (
   ({ type: waveShape , c: dest, }) => {
      useEffect(() => {
         const c = dest.context ;
         const o = c.createOscillator() ;
         o.connect(dest , ) ;
         {
            ;
            (typeof waveShape !== "object") && (
               o.type = waveShape
            ) ;
            (waveShape instanceof PeriodicWave ) && (
               o.setPeriodicWave(waveShape , )
            ) ;
         }
         o.start() ;
         return (): void => {
            o.disconnect() ;
         } ;
      } , [dest, ] , ) ;
      return (
         <></>
      ) ;
   }
) ;
const CWaveTable : (
   React.FC<(
      Partial<{ type : Exclude<OscillatorType, "custom" > | PeriodicWave ; }>
   )>
) = (
   ({ type: waveShape = "triangle", }) => {
      return (
         <CACtxtualDestNodeRefUser>
         { ({ dest, } ) => (
            (dest instanceof AudioNode ) 
            &&
            <CWaveTableImpl 
            type={waveShape }
            c={dest }
            />
         ) }
         </CACtxtualDestNodeRefUser>
      ) ;
   }
) ;

;


