

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
const usePromiseValue1 = (
   function <A >(...[{ src , clearOnSwitch, initialValue, },] : [
      { src: Promise<MonomorphicDigestFnc<A> > ; } & UpvInitialValueConfig<A> ,
   ] ) {
      const {
         presentValue ,
         setPresentValueImmediately ,
         resetImmediately ,
      } = useUpvBasic({ initialValue, }, )  ;
      // const [ , pushP, ] = (
      //    useState<Promise<void> >(async () => {} )
      // ) ;
      useLayoutEffect(() => {
         let valid : boolean = true ;
         (async () => {
            if (!valid ) return ;
            clearOnSwitch && (
               resetImmediately()
            )  ;
            if (!valid ) return ;
            const doDigest = await src ;
            if (!valid ) return ;
            setPresentValueImmediately(doDigest );
            if (!valid ) {
               throw Error(`assertion error`) ;
            }
         })() ;
         return (): void => {
            valid = false ;
         } ;
      } , [clearOnSwitch, src, ], );
      // TODO
      return (
         presentValue
      ) ;
   }
) ;
const usePromiseValue = (
   function <A >(...[{ src: src0 , ...otherProps },] : [
      { src: Promise<A> ; } & UpvInitialValueConfig<A> ,
   ] ) {
      const src1 = (
         useMemo(async (): Promise<MonomorphicDigestFnc<A> > => {
            const newVal = await src0 ;
            return () => newVal ;
         }, [ src0, ], )
      ) ;
      return (
         usePromiseValue1({ src: src1, ...otherProps })
      ) ;
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
   usePromiseValue ,
   usePromiseValue1 ,
} ;