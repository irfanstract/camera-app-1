



import { 
   EitherBothSetOrBothUnset, 
   EitherSetAndOthersUnset,
   EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing";
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
   ReactElement ,
   ReactNode ,

} from "react";      
import { ComponentProps, } from "components/util-jsx-props";
import useMemoisedResource from "components/useMemoisedResource";
import { 
   EnumValueDisplayElem, 
} from "components/json-display/enum-value-display";

import { useConnectDisconnect, } from "components/k-audio/uacd";
import { useCtxInferredValues, } from "../ctx";
import { CInferredValuesUser, } from "../ctx";
import { WithCurrentACtx, } from "../ctx";
import { CACtxtualDestNodeRefUser, } from "../ctx";
import { WithGivenDestNd, } from "../ctx";
import { 
   numericOrRElement ,
   CConstantValueSrc ,
} from "./constantparamsourcenode";
import { FreqAndDetuneProperties, } from "./freqAndDetuneProperties";



















type CBPF_PICK<A, B extends A > = (
   B
) ;
const CBandPassFiltered = (
   identity<(
      React.FC<(
         {}
         & Required<React.PropsWithChildren >
         & (
            never
            | {
               [fltType in BiquadFilterType ] : (
                  {}
                  & { type : fltType ; }
                  & (
                     fltType extends (
                        never 
                        | CBPF_PICK<BiquadFilterType, "lowpass" >
                        | CBPF_PICK<BiquadFilterType, "highpass" >
                        | CBPF_PICK<BiquadFilterType, "bandpass" >
                        | CBPF_PICK<BiquadFilterType, "notch" >
                     ) ? 
                     { gain ?: never ; }
                     : { gain : Required<FreqAndDetuneProperties>["f"] ; }
                  )
                  & (
                     {}
                     & Required<Pick<FreqAndDetuneProperties , "f" > >
                     & Partial <Pick<FreqAndDetuneProperties , "det" > >
                  )
                  & { Q ?: Required<FreqAndDetuneProperties>["f"] ; }
               ) ;
            }[BiquadFilterType ]
         )
      )>
   )>(function CBandPassFiltered(props , ) {
      const { children: payload, } = props ;
      const { type: specifiedType, } = props ;
      const { 
         f = 440 , // best-effort
         det: specifiedDetune = 0 ,
         gain: specifiedAmpVal = 1 ,
         Q: specifiedQValue0 ,
      } = props ;
      const {
         aCtx ,
         dest ,
      } = useCtxInferredValues() ;
      const [nd1, ] = (
         useMemoisedResource<[null | BiquadFilterNode, ]>((oldV, ) => {
            if (oldV ) {
               const [oldNd, ] = oldV ;
               ;
            }
            {
               const newNd = (
                  aCtx
                  && aCtx.createBiquadFilter()
               ) ;
               newNd && (
                  [
                     newNd.frequency, 
                     newNd.detune, 
                     newNd.gain, 
                     newNd.Q, 
                  ]
                  .forEach((aP: AudioParam, ) => {
                     aP.setValueAtTime((
                        clamp(0, aP.minValue, aP.maxValue, )
                     ) , 0 , ) ;
                  } )
               ) ;
               return [
                  newNd ,
               ] ;
            }
         } , [aCtx, ] , )
      ) ;
      useConnectDisconnect(nd1, dest, ) ;
      React["useInsertionEffect"](() => {
         if (nd1 ) {
            nd1.type = specifiedType ;
         }
      } , [nd1, specifiedType, ] ) ;
      return (
         nd1
         ?
         <div>
            <p>
               Biquad-Filtered
            </p>
            <table>
            <tbody>
            <tr>
               <td>Type</td>
               <td>
                  <code>{ specifiedType }</code>
               </td>
            </tr>
            <tr>
               <td>Frequency</td>
               <td>
                  Frequency :
                  <WithGivenDestNd 
                  value={nd1.frequency } 
                  children={numericOrRElement(f, ).valueArgument1 }
                  />
                  ;
                  Detune :
                  <WithGivenDestNd 
                  value={nd1.detune } 
                  children={numericOrRElement(specifiedDetune, ).valueArgument1 }
                  />
                  ;
               </td>
            </tr>
            <tr>
               <td>Gain</td>
               <td>
                  <WithGivenDestNd 
                  value={nd1.gain } 
                  children={numericOrRElement(specifiedAmpVal, ).valueArgument1 }
                  />
               </td>
            </tr>
            <tr>
               <td>PAYLOAD</td>
               <td>
                  <WithGivenDestNd 
                  value={nd1 } 
                  children={payload }
                  />
               </td>
            </tr>
            </tbody>
            </table>
         </div>
         :
         null
      ) ;
   } )
) ;










export { CBandPassFiltered, } ;





