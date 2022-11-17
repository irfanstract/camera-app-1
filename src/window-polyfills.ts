








declare global {
   interface Array<T> {
      reversed() : Array<T> ;
   }
}
Array.prototype.reversed = (
   function () {
      return (
         this
         .map((v, i, src, ) => (
            src[(src.length + -1 ) + -i ]
         ) )
      ) ;
   }
) ;
declare global {
   interface Array<T> {
      appendedAllAsync<E1>(s: AsyncGenerator<E1, void>, ) : Promise<(T | E1)[] > ;
   }
}
Array.prototype.appendedAllAsync = (
   async function <E1,  >(s: AsyncGenerator<E1, void>, ) {
      const addedBuf = new Array<E1>;
      for await (const f of s ) {
         addedBuf.push(f, ) ;
         ;
      }
      ;
      return [...this, ...addedBuf,] ;
   }
) ;
declare global {
   interface Array<T> {
      asyncMap<E1>(s: (v: T, i: number, ) => Promise<E1 >, ) : Promise<(E1)[] > ;
   }
}
Array.prototype.asyncMap = (
   async function<E1, T>(this: Array<T>, s: (v: T, i: number, ) => Promise<E1>, ) {
      return (
         await Promise.all(this.map(s, ) )
      ) ;
   }
) ;
declare global {
   interface ArrayConstructor { 
      unfold<A, S>(v0: A, digest: { (v0: A) : null | [s: A, emit: S, ] ; } ) : S[] ;
   }
}
// Array.unfold<boolean | number | object >(8, (v) => v ) ;






export {} ; // TS-1208
