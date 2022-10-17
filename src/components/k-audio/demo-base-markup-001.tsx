



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
import {
   CWaveTable ,
} from "./components/oscillativenode" ;
import {
   CAmpComp ,
} from "./components/ampcomp" ;


















const XMountTimeRefable = (
   React.forwardRef((
      identity<(
         React.ForwardRefRenderFunction<(
            null
            |
            TAndTScale
         ) , {} >
      )>((
         function XMountTimeRefableC({}, ref1, ) {
            const {
               aCtxExpectedT: aCtxExpectedT ,
            } = useCtxInferredValues() ;
            const aCtxExpectedT1 = (
               (typeof aCtxExpectedT === "number") ?
               new TAndTScale(aCtxExpectedT , 1 , )
               : null
            ) ;
            React.useImperativeHandle((
               identity<(
                  React.Ref<null | object>
               )>(ref1)
            ) , () => (
               aCtxExpectedT1
            ) , [!!aCtxExpectedT1, ] , ) ;
            return (
               <div >
                  <p>
                     <code>XMountTimeRefableC</code>
                  </p>
                  <pre>
                     { JSON.stringify({ aCtxExpectedT1 , }, null, 2, ) }
                  </pre>
               </div >
            ) ;
         }
      ))
   ))
) ;



const ACtxBoundaryCcRefreshible1 = (
   identity<(
      React.FC<(
         {}
         & Required<React.PropsWithChildren >
      )>
   )>(function ACtxBoundaryCcRefreshible({ children: payload, } , ) {
      ;
      const [xt0 , ref1 , ] = (
         useState<null | TAndTScale >(null, )
      ) ;
      ;
      return (
         <IRefreshible>
         <ACtxBoundaryCc 
         children={(
            <IRefreshible>
            <Fragment key={xt0 && xt0.t }>
            <XMountTimeRefable ref={ref1} />
            </Fragment>
            { (
            ( true && xt0 )
            &&
            <Fragment>
            <WithGivenDelayOrSlowdown
            value={{ delay: xt0.t , }}
            >
            <pre>
               { JSON.stringify({ xt0, } , null , 2 , ) }  
            </pre>
            <IRefreshible>
               { payload }
            </IRefreshible>
            </WithGivenDelayOrSlowdown>
            </Fragment>
            ) }
            </IRefreshible>
         ) }
         />
         </IRefreshible>
      ) ;
   } )
) ;
































export {} ;
export { ACtxBoundaryCc, } ;
export { ACtxBoundaryCcRefreshible1, } ;
export { XMountTimeRefable, } ;