



import { 
   EitherBothSetOrBothUnset, 
   EitherSetAndOthersUnset,
   EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing";



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















type WFreqAndDetuneProperties = (
   {}
   &
   { [k in keyof { f?: true ; /** cents-of-semitones to detune */ det?: true ; } ] : number | React.ReactElement ; }
) ;
namespace WFreqAndDetuneProperties { ; } // TS-1205













export { WFreqAndDetuneProperties as FreqAndDetuneProperties, } ;





