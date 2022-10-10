



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
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import { CToGivenAudioCtxDest, CACtxtualDestNodeRefUser, } from "components/k-audio/ctx";
import { WithGivenDestNd, } from "components/k-audio/ctx";
import currentAdestnoderefWrpcomp from "./current-adestnoderef-wrpcomp" ;
import { numericOrRElement, } from "./constantparamsourcenode";

type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
 
type ACanConnectOrDisconnect = (
   { connect(dest: AudioNode | AudioParam , i?: number , ): void ; }
   &
   { disconnect(dest?: AudioNode | AudioParam , i?: number , ): void ; }
) ;















/**   
 * {@link numericOrRElement } ; {@link WithGivenDestNd } ;
 * 
 */
const WRNDE = (
   function (...[dest, v, ] : [
      dest: AudioNode | AudioParam ,
      v: number | React.ReactElement ,
   ] ) {
      const {
         vDisplay ,
         valueArgument1: vAsGraph ,
      } = numericOrRElement(v, ) ;
      return (
         <div style={{ display: `flex`, flexDirection: `column`, }} >
         { vDisplay }
         <WithGivenDestNd value={dest } >
            { vAsGraph }
         </WithGivenDestNd>
         </div >
      ) ;
   }
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
      { [k in keyof { f?: true ; /** cents-of-semitones to detune */ det?: true ; } ] : number | React.ReactElement ; }
      &
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
   )>
) = (
   ({ 
      type: waveShape , 
      f = 440, det = 0 , 
      c: dest, aCtx, 
   }) => {
      const [nd1, ] = (
      useMemoisedResource<[OscillatorNode]>((
         (...[priorState, ] ) => {
            if (priorState) {
               const [
                  oldPeer ,
               ] = priorState ;
               oldPeer.disconnect() ;
            }
            {
               const waveTable1 = aCtx.createOscillator() ;
               identity<ACanConnectOrDisconnect>(waveTable1 ).connect(dest , ) ;
               waveTable1.start() ;
               return [waveTable1, ] ;
            }
         }
      ) , [aCtx , ] , )
      ) ;
      (
            waveTableAssignPw((
               nd1
            ), waveShape, )
      ) ;
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
            <tr>
               <td>Frequency</td>
               <td>
               <ul>
               <li>
               <code>frequency</code>:
               <WithGivenDestNd value={nd1.frequency } >
                  { numericOrRElement(f ,).valueArgument1 }
               </WithGivenDestNd>
               </li>
               <li>
               <code>detune</code>:
               <WithGivenDestNd value={nd1.detune } >
                  { numericOrRElement(det ,).valueArgument1 }
               </WithGivenDestNd>
               </li>
               </ul>
               </td>
            </tr>
         </tbody>
         </table>
         </div>
      ) ;
   }
) ;
const CWaveTable1A = (
   currentAdestnoderefWrpcomp(`CWaveTable` , CWaveTableImpl, )
) ;
const CWaveTable : (
   React.FC<(
      Partial<(
         Pick<ComponentProps<typeof CWaveTable1A > , "type" >
      )>
      &
      Partial<(
         Pick<ComponentProps<typeof CWaveTable1A > , "f" | "det" >
      )>
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


