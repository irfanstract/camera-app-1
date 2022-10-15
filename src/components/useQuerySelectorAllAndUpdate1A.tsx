



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
// import useMemoisedResource from "components/useMemoisedResource";

















export default (
   (...[config, ] : [
      {
         useSelector : (
            () => string
         ) ;

         useDispatcher1A : (
            () => (
               { 
                  update : (
                     React.Dispatch<(
                        List<(
                           never
                           | HTMLElement
                        )>
                     )>
                  ) ;
               }
            )
         ) ;
         
      } ,
   ] ) => {
   ;
   const {
      useSelector ,

      useDispatcher1A ,

   } = config ;
   const useRefAndDispatcher1 = (
      () => {
         const {
            update ,
         } = useDispatcher1A() ;
         const [eH, setEH, ] = (
            useState<null | HTMLElement>(null, )
         ) ;
         const selector = (
            useSelector()
         ) ;
         const [ , refresh, ] = (
            useReducer((): void => {
               const natvElems = (
                  List((
                     eH ?
                     eH.querySelectorAll(`.${selector }`)
                     : []
                  ))
                  .filter((e): e is HTMLElement => (
                     e instanceof HTMLElement 
                  ))
               ) ;
               update(natvElems, ) ;
            } , void true , )
         ) ;
         return [
            void true ,
            setEH ,
            { refresh, } ,
         ] as const ;
      }
   ) ;
   const useRefAndPeriodicDispatch = (
      () => {
         ;
         const [
            ,
            ref1 ,
            { refresh, } ,
         ] = useRefAndDispatcher1() ;
         React["useEffect"](() => {
            const tmoutId = (
               setInterval(() => (
                  void (
                     refresh()
                  )
               ) , 80 , )
            ) ;
            return () => void (
               clearInterval(tmoutId, )
            ) ;
         } , [] , ) ;
         ;
         return [
            void true ,
            ref1 ,
         ] as const ;
      }
   ) ;
   const returnv = {
      useSelector ,

      useRefAndDispatcher1 ,
      useRefAndPeriodicDispatch ,

   } ;
   return (
      returnv
   ) ;
   }
) ;


