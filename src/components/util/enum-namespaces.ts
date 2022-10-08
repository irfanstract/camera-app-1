









type ObjValue<A extends {} , Key extends keyof A > = (
   (Required<A> )[Key ]      
) ;  
namespace ObjValue { ; } // TS-1205 

type Enum = (  
   { readonly [K : string ] : string | number | boolean ; }    
   |  
   { readonly [K : string ] : symbol ; }                    
   |     
   { readonly [K : string ] : {} ; }    
) ;
namespace Enum { ; } // TS-1205 
type EnumValue<A extends {} > = (
   ObjValue<A, keyof A >
) ;   
namespace EnumValue { ; } // TS-1205 





export {
   ObjValue ,
   Enum ,
   EnumValue ,
} ;