












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
   export class OfALinearParamSequencing {
      constructor(
         public impl : (
            Pick<AudioParam, (
               never
               | OfALinearParamSequencing.MinMax 
               | OfALinearParamSequencing.BasicSetYyyAtTime
               | keyof Pick<AudioParam , "automationRate" >
            ) >
         ) , 
      ) {}
   } ;
   export namespace OfALinearParamSequencing {
      export type MinMax = (
         keyof Pick<AudioParam , "minValue" | "maxValue" >
      ) ;
      export type BasicSetYyyAtTime = (
         never 
         | keyof Pick<AudioParam , "setValueAtTime" | "value" | "setTargetAtTime" | "setValueCurveAtTime" > // does not require previously-scheduled values
         | keyof Pick<AudioParam , "linearRampToValueAtTime" | "exponentialRampToValueAtTime" | "cancelAndHoldAtTime" > // requires previously-scheduled values
      ) ;
      export type BasicCancelAllScheduled = (
         keyof Pick<AudioParam , "cancelScheduledValues" >
      ) ;
   } ;

}  // TS-1205, TS-2702, 



export {
   PdMode ,
} ;







