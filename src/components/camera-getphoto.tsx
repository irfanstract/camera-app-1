

import { base64FromPath, } from './url-fetch-util';

import { useState, useEffect, useReducer, useCallback, } from 'react';
import { usePromiseValue1, usePromiseValue, } from './AsyncData';
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
} from '@ionic/react';
import { useIonAlert, } from '@ionic/react';
import { camera, trash, close, } from 'ionicons/icons';

import { 
   Camera, 
   CameraResultType, 
   CameraSource, 
   Photo ,
} from '@capacitor/camera';
import { Preferences, } from '@capacitor/preferences';
import { Capacitor, } from '@capacitor/core';












const openCameraAndTakePhoto = (
   async () => (
      await (
         Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
         })
      )
   )
) ;



export {
   openCameraAndTakePhoto ,
} ;
/**   
 * the decl name matches well !
 * 
 */
export default openCameraAndTakePhoto ;