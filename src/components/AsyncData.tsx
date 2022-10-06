

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