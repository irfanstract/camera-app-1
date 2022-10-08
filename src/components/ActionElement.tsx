

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

type ComponentProps<A extends {} & Function > = (
  (A ) extends { (p: infer P ): unknown ; } ?
  P : never
) ;

 










export default (
  identity<(
    React.FC<(
      Omit<(
        ComponentProps<typeof IonButton>
      ) , "disabled" | "onClick">
      &
      { 
        onClick : (
          null 
          | (ComponentProps<typeof IonButton>["onClick"] & object )
        ) ;
      }
    )>
  )>((
    function ({ onClick, ...p } ) {
      return (
        onClick ?
        <IonButton onClick={onClick } {...p } />
        : <IonButton disabled {...p } />
      ) ;
    }
  ))
) ;
