



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
import { WithGivenDestNd, } from "components/k-audio/ctx";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;

type ACanConnectOrDisconnect = (
   { connect(dest: AudioNode | AudioParam , i?: number , ): void ; }
   &
   { disconnect(dest?: AudioNode | AudioParam , i?: number , ): void ; }
) ;















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
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
   )>
) = (
   ({ type: waveShape , c: dest, aCtx, }) => {
      useInsertionEffect(() => {
         const waveTable1 = aCtx.createOscillator() ;
         identity<ACanConnectOrDisconnect>(waveTable1 ).connect(dest , ) ;
         (
            waveTableAssignPw((
               waveTable1
            ), waveShape, )
         ) ;
         waveTable1.start() ;
         return (): void => {
            identity<ACanConnectOrDisconnect>(waveTable1 ).disconnect(dest ) ;
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
const CWaveTable1A : (
   React.FC<(
      { type : Exclude<OscillatorType, "custom" > | PeriodicWave ; }
   )>
) = (
   currentAdestnoderefWrpcomp(`CWaveTable` , CWaveTableImpl, )
) ;
const CWaveTable : (
   React.FC<(
      Partial<{ type : Exclude<OscillatorType, "custom" > | PeriodicWave ; }>
   )>
) = (
   ({ type = "triangle", ...otherProps }) => (
      <CWaveTable1A 
      type={type }
      {...otherProps }
      />
   )
) ;




export {
   CWaveTable ,
   waveTableAssignPw ,
} ;


