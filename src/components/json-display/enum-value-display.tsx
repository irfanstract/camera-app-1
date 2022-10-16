





/**  
 * obscure the built-in mutable Collections, by design
 * 
 */
 import { 
   // Seq and List
   Seq, 
   List, 
   Range, 
   // Set
   Set, 
   SortedSet ,
   // Map
   Map, 
   SortedMap ,
} from "components/util-immutable-datastructure" ;
import { identity , } from "lodash";
import { clamp, } from "lodash";

import { ComponentProps, } from "components/util-jsx-props";
import React, { 
   // Callbacks
   Dispatch,
   DispatchWithoutAction, 

   // Debug
   useDebugValue,
   // UseYyyEffect(s)
   useLayoutEffect, useEffect, 
   useInsertionEffect ,
   // UseImperativeHandle
   useImperativeHandle ,
   // UseMemo and UseReducer and UseRefObject
   useCallback, useMemo, useContext, useDeferredValue, 
   useState, useReducer, 
   useRef, 

   // Components  
   Fragment ,
   ReactElement ,
   ReactNode ,

} from "react";      
import {  
   IonAlert ,
   useIonAlert ,
   useIonModal ,
   useIonActionSheet ,
   IonButton,
   IonSelect ,
   IonSelectOption ,
} from "@ionic/react";













type EnumValueSelectItem = (
   never
   | null
   | boolean  
   | number
   | string 
) ;
const EnumValueDisplayElem = (
   identity<(
      <Option extends EnumValueSelectItem >(...args : [
         properties: (
            {}
            & { options : Iterable<Option> ; }
            & { value ?: Option ; }
            & { onChange ?: Required<ComponentProps<typeof IonSelect> >["onIonChange"] ; }
         ) ,
      ]) => ReactElement
   )>((
      function EnumValueDisplayC({ options, value, onChange, }, ) {
         const formatValue: (
            (value: EnumValueSelectItem ,)
            => ReactElement
         ) = (
            (value, ) => (
               <code>
               { JSON.stringify(value, ) }
               </code>
            )
         ) ;
         const children = (
            [...options ]
            .map((value ) => (
               <Fragment 
               key={(
                  (typeof value === "number" ) ? 
                  value 
                  : `${typeof value } "${ value }"` 
               )}
               >
               <IonSelectOption value={value } >
                  { formatValue(value, ) }
               </IonSelectOption>
               </Fragment>
            ) )
         ) ;
         if (onChange ) {
         ;
         return (
            <IonSelect
            multiple={false }
            value={value }
            disabled={children.length <= 0 }
            onIonChange={onChange }
            interface="popover"
            >
               { children }
            </IonSelect>
         ) ;
         } 
         return (
            <>
            { value && formatValue(value , ) }
            </>
         ) ;
      }
   ))
) ;



export {
   EnumValueDisplayElem ,
} ;
