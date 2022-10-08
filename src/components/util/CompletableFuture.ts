












const CompletableFuture0 = (
   class <A> {
      resolve !: (value : A | PromiseLike<A> ) => void ;
      reject  !: (value?: unknown            ) => void ;
      p       !: Promise<A> ;
      constructor() {
         ;
         this.p = (
            new Promise<A>((resolve, reject, ) => {
               this.resolve = resolve ;
               this.reject = reject ;
            } )
         ) ;
      }
   }
) ;
const newCompletableFuture = (
   function <A>() {
      const { p, resolve, reject, } = (
         new CompletableFuture0<A>()
      ) ;
      return [p, { reject, resolve, }, ] as const ;
   }
) ;



export {
   newCompletableFuture ,
} ;




