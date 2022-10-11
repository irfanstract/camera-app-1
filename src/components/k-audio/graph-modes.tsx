












/**    
 * graphs could be for various different use-cases :
 * - controlling a linearly-valued param like *amp*, *pitch*, *tempo*, etc
 * - sequences a list of events
 * - audio
 * - other uses
 * 
 */
class PdMode /* */ {}
namespace PdMode {

   export class OfToSendToDest extends PdMode {
         constructor(public dest : AudioNode | AudioParam ,) {
            super() ;
         }
   } ;
   export const Stochastically = (
      class StochasticMd extends PdMode.OfToSendToDest {}
   ) ;
   export const OfQuantity = (
      class QuantityMd extends PdMode.OfToSendToDest {}
   ) ;

   // TODO
   export class OfSequencer extends PdMode {} ;

}  // TS-1205, TS-2702, 



export {
   PdMode ,
} ;







