



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
import { ACtxBoundary as ACtxBoundaryCc, } from "./ctxcroot";
import {
   CWaveTable ,
} from "./components/oscillativenode" ;
import {
   CAmpComp ,
} from "./components/ampcomp" ;















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
         const waveTable1 = c.createOscillator() ;
         waveTable1.connect(dest , ) ;
         {
            ;
            (typeof waveShape !== "object") && (
               waveTable1.type = waveShape
            ) ;
            (waveShape instanceof PeriodicWave ) && (
               waveTable1.setPeriodicWave(waveShape , )
            ) ;
         }
         waveTable1.start() ;
         return (): void => {
            waveTable1.disconnect() ;
         } ;
      } , [dest, waveShape, ] , ) ;
      return (
         <div>
         <p>
            Wave Table {}
         </p>
         <table>
         <tbody>
            <tr>
               <td>OScillative Shape</td>
               <td>
               <code>{ String(waveShape, ) }</code>
               </td>
            </tr>
         </tbody>
         </table>
         </div>
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

export default (
   identity<React.FC<{}> >((
      () => (
         <ACtxBoundary>
         { (c, ) => {
            const suspentiveBtn = (
               <button type="button" onClick={() => c.suspend() } >
                  suspend
               </button>
            ) ;
            const resumptiveBtn = (
               <button type="button" onClick={() => c.resume() } >
                  resume
               </button>
            ) ;
            return (
               <div>
                  <p>
                     <code>{ String(c , ) }</code>
                     { suspentiveBtn }
                     { resumptiveBtn }
                  </p>
                  <CToGivenAudioCtxDest value={c } >
                  <div>
                     <CWaveTable />
                  </div>
                  </CToGivenAudioCtxDest>
               </div>
            ) ;
         } }
         </ACtxBoundary>
      )
   ))
) ;

;


