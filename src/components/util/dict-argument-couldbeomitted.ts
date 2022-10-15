






/**   
 * this *type-alias* 
 * takes care 
 * deciding whether the parameter can be made *optional*
 * (which will only be the case when(ever) it has *zero* *required property* ).
 * 
 * no need to care about updating the `?:` on every change in `props`, as
 * using this idiom the change will happen automatically as needed.
 * see below.
 * 
 * @example
 * 
 * // all props are optional here, but ... 
 * function bar(properties : { priority ?: number ; } ): void ;
 * // later on
 * // bar() ; // // missing required (object literal ) argument
 * 
 */
type OptionsCouldBeOmittedAltogether<A extends {} > = (
   [A, [{}, ] ] extends [{}, readonly [A, ] ] ? 
   [A? ]
   : [A ]
);
namespace OptionsCouldBeOmittedAltogether { ; }     // TS-1205










export {
   OptionsCouldBeOmittedAltogether ,
} ;
