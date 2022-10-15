



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

import { TAndTScale, } from "components/k-audio/TOffsetAndScaleProperties";
import { PdMode, } from "components/k-audio/graph-modes";


// eslint-disable-next-line import/first
import PsTAndTScale = TAndTScale ;














const apTAndTScaleTranslatedForm = (
   identity<(
      (...args : [AudioParam, PsTAndTScale, ] )
      =>
      (
         {}
         & (
            {}
            & Pick<AudioParam,  "setTargetAtTime"  >
            & Pick<AudioParam,  "setValueAtTime"  >
            & Pick<AudioParam,  "value" >
            & Pick<AudioParam,  "linearRampToValueAtTime"  >
            & Pick<AudioParam,  "exponentialRampToValueAtTime"  >
            & Pick<AudioParam,  "cancelScheduledValues"  >
            & Pick<AudioParam,  "cancelAndHoldAtTime"  >
         )
         & Pick<AudioParam, "minValue" | "maxValue"  >
      )
   )>((
      (...[p, tCtxVal, ] ) => {
         const {
            minValue ,
            maxValue ,
         } = p ;
         ;
         /**   
          * `setValueAtTime` and other methods with equivalent sgn.
          * 
          */
         const STVT : (
            (...args : [
               (
                  keyof (
                     {}
                     & Pick<AudioParam, "setValueAtTime">
                     & Pick<AudioParam, "linearRampToValueAtTime" | "exponentialRampToValueAtTime" >
                  )
               ) ,
               { value : number ; t : number ; } ,
            ] ) 
            => 
            (never | false | true )
         ) = (
            (which, { value: targetedValue, t: specifiedT, } , ) => {
               if (tCtxVal ) {
                  (
                     p
                     [which ]((
                        targetedValue
                     ), (
                        tCtxVal.t 
                        + (specifiedT * tCtxVal.tScale )
                     ), )
                  ) ;
                  return true ;
               } else {
                  ; // TODO possible logging
                  return false ;
               }
            }
         ) ;
         /**   
          * `cancelScheduledValues` and other methods with equivalent sgn.
          * 
          */
          const CANCELSCHEDULEDVLS : (
            (...args : [
               (
                  keyof (
                     {}
                     & Pick<AudioParam, never | "cancelScheduledValues" >
                     & Pick<AudioParam, never | "cancelAndHoldAtTime" >
                  )
               ) ,
               { t : number ; } ,
            ] ) 
            => 
            (never | false | true )
         ) = (
            (which, { t: specifiedT, } , ) => {
               if (tCtxVal ) {
                  (
                     p
                     [which ]?.((
                        tCtxVal.t 
                        + (specifiedT * tCtxVal.tScale )
                     ), )
                  ) ;
                  return true ;
               } else {
                  ; // TODO possible logging
                  return false ;
               }
            }
         ) ;
         return {
            minValue ,
            maxValue ,
            get value() {
               return p.value ;
            } ,
            set value(newVal: number , ) {
               (
                  p.value = newVal
               ) ;
            } ,
            setTargetAtTime(...[targetedValue, specifiedStartT, specifiedTConstant, ]) {
               if (tCtxVal ) {
                  (
                     p
                     .setTargetAtTime((
                        targetedValue
                     ), (
                        tCtxVal.t 
                        + (specifiedStartT * tCtxVal.tScale )
                     ), (
                        specifiedTConstant 
                        * tCtxVal.tScale
                     ), )
                  ) ;
               } else {
                  ; // TODO possible logging
               }
               return this as AudioParam ;
            } ,
            linearRampToValueAtTime(targetedValue, specifiedEndT, ) {
               if ((
                  true
                  && STVT("linearRampToValueAtTime" , { value: targetedValue, t: specifiedEndT, } , )
               )) {
               } else {
               }
               return this as AudioParam ;
            },
            exponentialRampToValueAtTime(targetedValue, specifiedEndT, ) {
               if ((
                  true
                  && STVT("exponentialRampToValueAtTime" , { value: targetedValue, t: specifiedEndT, } , )
               )) {
               } else {
               }
               return this as AudioParam ;
            },
            setValueAtTime(targetedValue, specifiedEndT, ) {
               if ((
                  true
                  && STVT("setValueAtTime" , { value: targetedValue, t: specifiedEndT, } , )
               )) {
               } else {
               }
               return this as AudioParam ;
            },
            cancelScheduledValues(specifiedT, ) {
               if ((
                  true
                  && CANCELSCHEDULEDVLS("cancelScheduledValues" , { t: specifiedT, } , )
               )) {
               } else {
               }
               return this as AudioParam ;
            },
            cancelAndHoldAtTime(specifiedT, ) {
               if ((
                  true
                  && CANCELSCHEDULEDVLS("cancelAndHoldAtTime" , { t: specifiedT, } , )
               )) {
               } else {
               }
               return this as AudioParam ;
            },
         } ;
      }
   ))
) ;





export { apTAndTScaleTranslatedForm, } ;
export default (
   apTAndTScaleTranslatedForm
) ;

