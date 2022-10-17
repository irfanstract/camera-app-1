



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

import { ComponentProps, } from "components/util-jsx-props";
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
import IRefreshible from "components/RefreshibleComponent";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';

import { TAndTScale, } from "./ctx";

import { useCtxInferredValues,        } from "components/k-audio/ctx";
import { CInferredValuesUser,         } from "components/k-audio/ctx";
import { CTCtxCurrentValueUser,       } from "components/k-audio/ctx";
import { WithGivenDelayOrSlowdown,    } from "components/k-audio/ctx";
import { WithCurrentACtx,             } from "components/k-audio/ctx";
import { CACtxtualDestNodeRefUser,    } from "components/k-audio/ctx";
import { WithGivenDestNd,             } from "components/k-audio/ctx";
import { useIndependentACtx, ACtxBoundary, } from "./actx-base";
import { ACtxBoundary as ACtxBoundaryCc, } from "./ctxcroot";
import { ACtxBoundaryCcRefreshible1, } from "./demo-base-markup-001";
import { XMountTimeRefable, } from "./demo-base-markup-001";
import {
   CWaveTable ,
} from "./components/oscillativenode" ;
import { CPlottedSourceNode1A, } from "./components/plottedsourcenode1";
import { CPlottedSourceNode1C, } from "./components/plottedsourcenode1";
import {
   CAmpComp ,
} from "./components/ampcomp" ;
import { 
   CBandPassFiltered, 
} from "./components/bandpassfiltered1";
import { CFiniteLoopingFromT, } from "./components/loopingcomponent";
import CBassDrum1A from "./components/bassdrums/1a";
import { 
   CWhiteNoise, 
} from "./components/whitenoise";

const {
   // PRE
   CAsXADestParamEffectRoot ,

   // EVENTS
   // INITIALS
   CStartExponentialApproachAtTime ,
   CJumpToValueAtTime ,
   // CONTINUALS
   CLinearRampToValueAtTime ,

} = CPlottedSourceNode1C ;















export default (
   identity<React.FC<{}> >((
      () => {
      ;
      return (
         <ACtxBoundaryCcRefreshible1>
            <div style={{ display: `flex`, flexDirection: `column-reverse`, }}>
            <CAmpComp value={2 ** -2 } >   
               <CFiniteLoopingFromT
               period={0.5 }
               n={32 }
               >
                  <CBassDrum1A 
                  />
               </CFiniteLoopingFromT>
               { (
               // ACCENT
               <CAmpComp value={2 ** -2 } >
               <CBandPassFiltered
               type="lowpass"
               f={27.5 }
               det={
                  <Fragment>
                  <CPlottedSourceNode1A 
                  value={[
                     (c, ) => {
                        c.setValueAtTime(0, -1E+4, ) ;
                        c.setValueAtTime(0, 0, ) ;
                        c.linearRampToValueAtTime(12 * 12 * 100 , 32 , ) ;
                     } ,
                     [] ,
                  ]}
                  />
                  </Fragment>
               }
               >
               <CWhiteNoise />
               </CBandPassFiltered>
               </CAmpComp>
               ) }
            </CAmpComp>
            <div>
               <p> 
               </p>
            </div>
            </div>
         </ACtxBoundaryCcRefreshible1>
      ) ;
      }
   ))
) ;

;


