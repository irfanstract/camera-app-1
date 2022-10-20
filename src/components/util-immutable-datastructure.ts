







export { 
   default as Immutable, 
   // default as IterableOps, 
   default as Iterable, 
   default as Collection, 
   default as Aggregate, 
   // default as SeqOps, 
} from "immutable" ;
/**  
 * obscure the built-in mutable Collections, by design
 * 
 */
export { 
   // Seq and List
   Seq, 
   Seq as Sequence, 
   List, 
   List as Array, 
   Range, 
   // Set
   Set, 
   OrderedSet as SortedSet, 
   // Map
   Map, 
   OrderedMap as SortedMap, 
} from "immutable" ;
/**  
 * bonus - JRE-based or Scala-based naming
 * 
 */
export { 
   Seq as SeqOps ,
   Seq as IterableOps ,
   Seq as IterableOnceOps ,
   Seq as MemoisingStream , // named this way to signify the memory-leak potential
   Seq as Stream ,
} from "immutable" ;


