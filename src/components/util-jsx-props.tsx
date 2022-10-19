









type ComponentProps<A extends {} & Function > = (
   (A ) extends { (p: infer P ): unknown ; } ?
   P : never
) ;
namespace ComponentProps { ; } // TS-1205

 




export {
   ComponentProps ,
} ;
