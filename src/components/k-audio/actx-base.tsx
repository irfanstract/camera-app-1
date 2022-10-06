



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














/**    
 * whether the returned {@link AudioContext } would start `paused` or `running`
 * depends on the underlying platform.
 * it'd be necessary for callers to take care of that .
 * 
 */
const useIndependentACtx = (
   function useIndependentACtx1() {
      ;
      const [aCtx, setACtx ] = (
         useState<null | AudioContext >(null )
      ) ;
      ;
      useEffect(() => {
         const aCtx = (
            new AudioContext()
         ) ;
         setACtx(() => aCtx ) ;
         return (): void => {
            setTimeout(() => {
               aCtx.close() ;
            } , 8 * 1000 ) ;
         } ;
      } , [], ) ;
      ;
      return (
         aCtx
      ) ;
   }
) ;
/**   
 * a component which 
 * {@link useIndependentACtx independently allocates `AudioCOntext` }
 * 
 */
const ACtxBoundary = (
   function ACtxBoundaryC(...[{ children: payload, }, ] : [
      React.ConsumerProps<AudioContext > ,
   ] ) : React.ReactElement {
      const aCtx = (
         useIndependentACtx()
      ) ;
      ;
      return (
         <>
         { aCtx && payload(aCtx ) }
         </>
      ) ;
   }
) ;
export {
   useIndependentACtx ,
   ACtxBoundary ,
} ;


