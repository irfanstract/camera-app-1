



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

import { TAndTScale,     } from "components/k-audio/TOffsetAndScaleProperties";
import { PdMode,         } from "components/k-audio/graph-modes";

// import { CInferredValuesUser,         } from "components/k-audio/ctx";
import { CTCtxCurrentValueUser,       } from "components/k-audio/ctx";
import { WithCurrentACtx,             } from "components/k-audio/ctx";
import { CACtxtualDestNodeRefUser,    } from "components/k-audio/ctx";
import { WithGivenDestNd,             } from "components/k-audio/ctx";
import { CAmpComp,                 } from "components/k-audio/components/ampcomp";
import { numericOrRElement,        } from "components/k-audio/components/constantparamsourcenode";
import { CPlottedSourceNode1A,     } from "components/k-audio/components/plottedsourcenode1";
import { CWaveTable,               } from "components/k-audio/components/oscillativenode";


















export default (
   identity<(
      React.FC<(
         {}
      )>
   )>((
      function CBassDrum({} , ) {
         return (
            <Fragment>
            <CAmpComp
            value={(
               <Fragment>
               <CPlottedSourceNode1A 
               value={[
                  (c, ): void => {
                     c.setTargetAtTime(0, -1E+5 /** note the sign ! */ , 1E-5, ) ;
                     c.setValueAtTime(1, 0  , ) ;
                     c.linearRampToValueAtTime(0, 1, ) ;
                  } ,
                  [] ,
               ]}
               />
               </Fragment>
            )}
            > 
               <CWaveTable 
               f={55 }
               det={(
                  <Fragment>
                  <CPlottedSourceNode1A 
                  value={[
                     (c, ): void => {
                        ;
                        c.setTargetAtTime( 12 * 100, -1E+5 /** note the sign ! */  , 1E-5, ) ;
                        c.setTargetAtTime( 12 * 100, 0        , 1E-5, ) ;
                        c.linearRampToValueAtTime(-12 * 100, 0.5,   ) ;
                     } ,
                     [] ,
                  ]}
                  />
                  </Fragment>
               )}
               />
            </CAmpComp>
            </Fragment>
         ) ;
      }
   ))
) ;




