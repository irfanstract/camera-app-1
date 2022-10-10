



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

import { CToGivenAudioCtxDest, CACtxtualDestNodeRefUser, } from "components/k-audio/ctx";















const waveTableAssignPw : (
   (...args: [
      OscillatorNode ,  
      Exclude<OscillatorType, "custom" > | PeriodicWave , 
   ] ) => void
) = (
   (waveTable1, waveShape, ) => {
      ;
      (typeof waveShape !== "object") && (
         waveTable1.type = waveShape
      ) ;
      (waveShape instanceof PeriodicWave ) && (
         waveTable1.setPeriodicWave(waveShape , )
      ) ;
   }
) ;
const CWaveTableImpl : (
   React.FC<(
      { type : Exclude<OscillatorType, "custom" > | PeriodicWave ; }
      &
      { c: AudioNode ; }
   )>
) = (
   ({ type: waveShape , c: dest, }) => {
      useInsertionEffect(() => {
         const c = dest.context ;
         const waveTable1 = c.createOscillator() ;
         waveTable1.connect(dest , ) ;
         (
            waveTableAssignPw((
               waveTable1
            ), waveShape, )
         ) ;
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




export {
   CWaveTable ,
   waveTableAssignPw ,
} ;


