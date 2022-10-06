

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
} from "react";          










interface MonomorphicDigestFnc<A> {
   (existingValue: A, ) : A ;
}

const useUpvBasic = (
   function <A>(...[{ initialValue, }, ] : [
      { initialValue : A ; } ,
   ] ) {
      const [presentValue, setPresentValueImmediately, ] = (
         useState<A>(initialValue, )
      ) ;
      const [ , resetImmediately, ] = (
         useReducer((
            (): void => {
               (
                  setPresentValueImmediately((v: A, ): A => (
                     initialValue
                  ) )
               ) ;
            }
         ) , void 0 , )
      ) ;
      ;
      return {
         presentValue ,
         setPresentValueImmediately ,
         resetImmediately ,
      } ;
   }
) ;
interface UpvInitialValueConfig<A> {
   /**    
    * if this were `true`, then
    * any changes to `src : Promise` 
    * would require resetting `presentlyValue` back to `initialValue`
    * .
    * 
    */
   clearOnSwitch : boolean ; 
   /**    
    * `initialValue` .
    * 
    */
   initialValue: A ;
}





export {
} ;