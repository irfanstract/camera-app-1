



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

   ; // extra semicolon due to TS-1205
   
}






export {
   FiniteLoopingFromT ,
} ;
