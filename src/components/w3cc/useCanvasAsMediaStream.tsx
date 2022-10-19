



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
// import { EnumValueDisplayElem, } from "components/json-display/enum-value-display";
import useMemoisedResource from "components/useMemoisedResource";
// import { usePromiseValue1, usePromiseValue, } from './AsyncData';















const useCanvasAsMediaStream = (() => {
  function useCanvasAsMediaStream(src : null ) : null
  function useCanvasAsMediaStream(src : HTMLCanvasElement ) : MediaStream
  function useCanvasAsMediaStream(src : null | HTMLCanvasElement ) : null | MediaStream
  function useCanvasAsMediaStream(...[src,] : [
    src : null | HTMLCanvasElement ,
  ] ) {
    return (
      useMemoisedResource<(
        [null | MediaStream, ]
      )>((_1) => {
        return [
          (
            src ?
            src.captureStream(5, )
            : null
          ) ,
        ]
      } , [src, ] , )
    )[0] ;
  }
  return (
    useCanvasAsMediaStream
  ) ;
})() ;









export {} ;
export default (
  useCanvasAsMediaStream
) ;
export {
  useCanvasAsMediaStream ,
} ;




