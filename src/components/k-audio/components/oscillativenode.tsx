



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
import { clamp, } from "lodash";

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
import { EnumValueDisplayElem, } from "components/json-display/enum-value-display";
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import useScheduledSrcNodeAlloc from "./useScheduledSourceNodeAlloc1";

import { CToGivenAudioCtxDest, CACtxtualDestNodeRefUser, } from "components/k-audio/ctx";
import { WithGivenDestNd, } from "components/k-audio/ctx";
import {  
   CMereProductiveElem ,
   CMereMonitoringElem ,
} from "components/k-audio/ctx";
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
type KWaveShape = (
   never
   | Exclude<OscillatorType, "custom" > 
   | PeriodicWave
) ;
namespace KWaveShape {

   export const renderEditor : (
      (...args : [vl : KWaveShape, update ?: React.Dispatch<KWaveShape>, ] ) 
      => React.ReactElement
   ) = (
      (value, editH, ) => (
         <EnumValueDisplayElem 
         value={(typeof value === "string") ? value : undefined }
         options={[
            "sine" ,
            "triangle" ,
            "square" ,
            "sawtooth" ,
         ]}
         onChange={editH && ((e) => editH(e.detail.value , ) ) }
         />
      )
   ) ;

}















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
         <CMereMonitoringElem>
         <p>
         value: {}
         { vDisplay }
         {}
         </p>
         </CMereMonitoringElem>
         <div>
         graph: {}
         <WithGivenDestNd value={dest } >
            { vAsGraph }
         </WithGivenDestNd>
         {}
         </div>
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
      { type : KWaveShape ; }
      &
      { [k in keyof { f?: true ; /** cents-of-semitones to detune */ det?: true ; } ] : number | React.ReactElement ; }
      &
      { c: AudioNode | AudioParam ; aCtx : BaseAudioContext ; }
      &
      { editListeners ?: { wvShape ?: React.Dispatch<KWaveShape> ; } ; }
   )>
) = (
   ({ 
      type: waveShape , 
      f = 440, det = 0 , 
      editListeners = {} ,
      c: dest, aCtx, 
   }) => {
      const [nd1, ] = (
      useScheduledSrcNodeAlloc({ 
         ctx: aCtx ,
         dest: dest ,
      } , (c) => c.createOscillator() , )
      ) ;
      React["useInsertionEffect"]((): void => {
         (
            waveTableAssignPw((
               nd1
            ), waveShape, )
         ) ;
      } , [nd1, waveShape, ] , ) ;
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
               { KWaveShape.renderEditor(waveShape, editListeners.wvShape, ) }
               </td>
            </tr>
            <tr>
               <td>Frequency</td>
               <td>
               <ul>
               <li>
               <code>frequency</code>:
               { WRNDE(nd1.frequency , f , ) }
               </li>
               <li>
               <code>detune</code>:
               { WRNDE(nd1.detune , det , ) }
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
         Omit<ComponentProps<typeof CWaveTable1A > , "type" >
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


