

import { identity, } from "lodash";

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

  // Component
  Fragment ,
  ReactElement ,
  ReactNode ,

} from "react"; 
import { isPlatform, } from '@ionic/react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonButton ,
} from '@ionic/react';
import { useIonAlert, useIonActionSheet, } from '@ionic/react';
import { camera, trash, close, } from 'ionicons/icons';











/**    
 * renders a 'Download' button.
 * 
 * maintains an `React.Ref<HTMLAnchorElement>`,
 * passing it to the rendering callback `props.impl`,
 * returning a `<button>` which 
 * (when clicked) would `click()` the resulting {@link HTMLAnchorElement } ,
 * .
 * 
 */
export default (
  identity<(
    React.FC<(
      { 
        impl : (...args : [
          (
            { ref: JSX.IntrinsicElements["a"]["ref"] & {} ; }
          ) ,
        ] ) => ReactElement ;
      }
      &
      { children ?: React.ReactNode ; }
    )>
  )>((
    function ({ impl, children: label = "DOWNLOAD", } , ) {
      /**   
       * we had an option to stick to {@link useRef }, but
       * use of {@link useRef } can lead to surprising behaviours, so
       * we stick to {@link useState } instead
       * 
       */
      const [refCurrent, ref, ] = (
        useState<null | HTMLAnchorElement >(null, )
      ) ;
      /**   
       * this MUST be mounted AT-LEAST AND AT-MOST ONCE
       * 
       */
      const mainMustMount = (
        <span hidden >
          { impl({ ref , }, ) }
        </span>
      ) ;
      const fireNative1 = (
        refCurrent ?
        (
          (): void => (
            ((...[nativeHandle, ] : [target: HTMLAnchorElement, ]): void => {
              ;
              nativeHandle.click() ;
            } )(refCurrent )
          )
        )
        : null
      ) ;
      const onHighLevelClick = fireNative1 ;
      const firingBtn = (
        onHighLevelClick ? 
        (
          <IonButton
          onClick={() => onHighLevelClick() }
          >
            { label }
          </IonButton>
        ) : (
          <IonButton 
          disabled
          >
            { label }
          </IonButton>
        )
      ) ;
      ;
      return (
        <span>
          { firingBtn }
          { mainMustMount }
        </span>
      ) ;
    }
  ))
) ;



