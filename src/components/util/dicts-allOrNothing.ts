







/**   
 * either 
 * - all properties set
 * - all properties unset
 * 
 * *to avoid surprising behaviours when using this TD, 
 * avoid non-`object`s, and {@link Required make all known properties required and non-`undefined` }*.
 * 
 */
type EitherBothSetOrBothUnset<A extends {} > = (
   A | { [k in keyof A ] ?: never ; }
   
   /**   
    * every *key* must consistently appear in every *alternative*, for two reasons:
    * - otherwise, the resulting type will be considered to omit the key
    * - to become `[key] ?: never ;`, which is the heart of all these
    */
) ;
namespace EitherBothSetOrBothUnset { ; } // TS-1205
/**   
* exactly one be set and all others be unset.
* 
* consider *frequency and period* as example;
* there's invariant that `freq * period === 1 `.
* to prevent assigning/giving/specifying conflicting values at once, 
* it'd be good to restrict the argumentation/constraints to exactly one of them .
* 
* *to avoid surprising behaviours when using this TD, 
* avoid non-`object`s, and {@link Required make all known properties required and non-`undefined` }*.
* 
*/
type EitherSetAndOthersUnset<A extends {} > = (
   /**   
    * every *key* must consistently appear in every *alternative*, for two reasons:
    * - otherwise, the resulting type will be considered to omit the key
    * - to become `[key] ?: never ;`, which is the hart of all these
    */
   { 
      [whichToRequire in keyof A ] : (
         { [k in whichToRequire ] -?: A[k] ; }
         &
         { [k in keyof Omit<A, whichToRequire > ] ?: never ; }
      ) ;
}[keyof A ]
) ;
const EitherSetAndOthersUnset = {} ; // TS-1205
/**   
* either
* (a) exactly one set, as in {@link EitherSetAndOthersUnset },
* (b) all (left) unset 
*/
type EitherSetOrBothUnset<A extends {} > = (
   EitherSetAndOthersUnset<A> // obviously - allow cases of exact one property set
   | 
   { [k in keyof A ] ?: never ; } // allow cases where none set
) ;
const EitherSetOrBothUnset = {} ; // TS-1205












export {
   EitherBothSetOrBothUnset ,
   EitherSetAndOthersUnset ,
   EitherSetOrBothUnset ,
   // Partial ,
} ;
