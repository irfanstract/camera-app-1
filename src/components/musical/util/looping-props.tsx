



import { 
   EitherBothSetOrBothUnset, 
   EitherSetAndOthersUnset,
   EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing";
// /**  
//  * obscure the built-in mutable Collections, by design
//  * 
//  */
// import { 
//    // Seq and List
//    Seq, 
//    List, 
//    Range, 
//    // Set
//    Set, 
//    SortedSet ,
//    // Map
//    Map, 
//    SortedMap ,
// } from "components/util-immutable-datastructure" ;
import { identity , } from "lodash";
import { clamp, } from "lodash";













namespace FiniteLoopingFromT {

   export type StartPointProps = (
      {}
      & Partial<{ startT : number ; }>
   ) ;
   export type Periodic = (
      {}
      & { period : number ; }
   ) ;
   export type EndPointProps = (
      {}
      & EitherSetAndOthersUnset<(
         {}
         & { n : number ; }
         & { totalDuration : number ; }
         & { endT : number ; }
      )>
   ) ;

   export const parseSPeProperties = (
      (cProps : (
         {}
         & FiniteLoopingFromT.StartPointProps
         & FiniteLoopingFromT.Periodic
         & FiniteLoopingFromT.EndPointProps
      ) , ) => {
         ;
         const { 
            // START T
            startT = 0 ,
            // PERIODS
            period , 
         } = cProps ;
         ;
         const {
            endT ,
            n ,
         } = (
            identity<(
               (props : FiniteLoopingFromT.EndPointProps, ) 
               => 
               Required<(
                  Record<keyof FiniteLoopingFromT.EndPointProps, number>
               ) >
            )>((cProps  ) => {
               if (typeof cProps.endT === "number" ) {
                  const {
                     endT ,
                     totalDuration = (
                        endT - startT
                     ) ,
                     n = (
                        totalDuration
                        / period
                     ) ,
                  } = cProps ;
                  return {
                     endT ,
                     n ,
                     totalDuration ,
                  } ;
               }
               if (typeof cProps.n === "number" ) {
                  const {
                     n , 
                     totalDuration = (
                        n * period
                     ) ,
                     endT = (
                        startT + totalDuration
                     ) ,
                  } = cProps ;
                  return {
                     endT ,
                     n ,
                     totalDuration ,
                  } ;
               }
               if (typeof cProps.totalDuration === "number" ) { 
                  const {
                     totalDuration ,
                     n = (
                        totalDuration 
                        / period
                     ) , 
                     endT = (
                        startT + totalDuration
                     ) ,
                  } = cProps ;
                  return {
                     endT ,
                     n ,
                     totalDuration ,
                  } ;
               }
               throw TypeError() ;
            })
         )(cProps, ) ;
         ;
         return {
            startT ,
            period ,
            endT ,
            n ,
         } ;
      }
   ) ;

   ; // extra semicolon due to TS-1205
   
}






export {
   FiniteLoopingFromT ,
} ;
