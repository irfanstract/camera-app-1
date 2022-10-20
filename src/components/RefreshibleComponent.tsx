
/**  
 * obscure the built-in mutable Collections, by design
 * 
 */
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
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';





















const IRefreshible = (
   identity<(
      React.FC<(
         Required<React.PropsWithChildren >
      ) >
   )>((
      function IRefreshible({ children, }, ) {
         const [c, increment, ] = (
            useReducer((v: number) => (v + 1 ) , 0 , )
         ) ;
         ;
         return (
            <div style={{ display: `flex`, flexDirection: `column-reverse`, }}>
               <div>
                  <Fragment key={c } >
                  { children }
                  </Fragment>
               </div>
               <p>
                  <button type="button" onClick={() => increment() } >
                     Reset
                  </button>
               </p>
            </div>
         ) ;
      }
   ))
) ;









export {} ;
export default (
   IRefreshible
) ;








