




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
















const useConnectDisconnect : (
   (src : AudioNode | null , dest : (AudioNode | AudioParam ) | null , )
   => void
) = (
   (introducedNode1, dest, ) => {
      ;
      React["useLayoutEffect"](() => {
         ;
         if (introducedNode1 && dest ) {
            if (dest instanceof AudioParam ) {
               (
               introducedNode1
               .connect(dest, )
               ) ;
               return (): void => {
                  (
                  introducedNode1
                  .disconnect(dest, )
                  ) ;
               } ;
            }
            {
               (
               introducedNode1
               .connect(dest, )
               ) ;
               return (): void => {
                  (
                  introducedNode1
                  .disconnect(dest, )
                  ) ;
               } ;
            }
         } ;
      } , [introducedNode1, dest, ] , ) ;
   }
) ;;




export {
   useConnectDisconnect ,
} ;