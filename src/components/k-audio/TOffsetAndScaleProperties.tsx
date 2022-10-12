














class TAndTScale {

   withDurativeFactor(f: number ) {
      return (
         new TAndTScale(this.t, f * this.tScale, )
      ) ;
   }
   withSpeedFactor(f: number ) {
      return (
         new TAndTScale(this.t, this.tScale / f , )
      ) ;
   }

   constructor(
      public t: number ,
      public tScale: number ,
   ) {}
   static initially = () => (
      new TAndTScale(0, 1, )
   ) ;

}
namespace TAndTScale { ; }  // TS-1205, TS-2702, 





export { 
   TAndTScale ,
} ;





