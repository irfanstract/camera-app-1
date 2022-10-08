

import { base64FromPath, } from './url-fetch-util';

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
  IonButton ,
} from '@ionic/react';
import { useIonAlert, } from '@ionic/react';
import { IonModal, } from '@ionic/react';
import { camera, trash, close, } from 'ionicons/icons';
import { download, } from 'ionicons/icons';
import ActionElement from 'components/ActionElement';
import FileUsrSaveElement from 'components/FileUsrSaveElement';

/**    
 * now being type-only import.
 * superseded by the async, fallible path below.
 * 
 */
import type { 
  //  Camera, 
  //  CameraResultType, 
  //  CameraSource, 
   Photo ,
} from '@capacitor/camera';
import { Preferences, } from '@capacitor/preferences';
import { Capacitor, } from '@capacitor/core';

import {
  UserPhoto ,
  useSavedPhotos1 ,
} from "./BasicPhotoGalleryImpl" ;

import {
  // PhotoEnlargeModal ,
  // usePhotoEnlargeModal ,

  PhotoEnlargeActionElement ,
  PhotoEnlargeableElement ,
  
  //
} from "components/PhotoEnlargeModal" ;

/**    
 * importing it leniently/fail-fast.
 * 
 */
const ASYNC_CGP = import("components/camera-getphoto") ;






export { UserPhoto, } ;
export { useSavedPhotos1, } ;
export function usePhotoGallery() {
  const [showAlert,] = (
    useIonAlert()
  ) ;

  const {
    photos ,
    addPhotoImpl ,
  } = useSavedPhotos1() ;

  const takePhoto = async () => {
    FLOW:
    {
    ;
    const CGP = await ASYNC_CGP.catch(e => (console.warn(e) , null ) ) ;
    if (!CGP ) {
      await (
        showAlert(`CAMERA NOT FOUND.`)
      ) ;
      break FLOW ;
    }
    ;
    const photo = (
      await (
        CGP.openCameraAndTakePhoto( )
        /** "Cancel"ed, Denied,  */
        .catch(e => {
          console.info(e) ;
          return null ;
        } )
      )
    );
    if (!photo ) {
      await (
        showAlert(`NO PHOTO taken.`)
      ) ;
      break FLOW ;
    }
    try {
    ;
    const fileName = (
      generateFilename() + '.jpeg'
    ) ;
    const {} = (
      await (
        addPhotoImpl(photo , { fileName, }, )
      ) 
    ) ;
    } catch (z) {
      console.warn(z, ) ;
      {
        ;
        await (
          showAlert(`the photo was TAKEN BUT GONE AWAY failing the save .`)
        ) ;
        break FLOW ;
      }
    }
    }
  };

  const photoGallery0 = (
    <IonGrid>
      <IonRow>
        {photos.map((photo, index) => (
          <IonCol size="6" key={index}>
            <PhotoEnlargeableElement 
            src={photo }
            />
            <PhotoEnlargeActionElement 
            src={photo }
            />
            <FileUsrSaveElement
            impl={({ ref, }, ) => (
              <a 
              ref={ref} // core
              target="_blank" // to prevent overnav
              href={photo.webviewPath } // core
              download={photo.filepath } // necessary
              />
            ) }
            >
              <IonIcon icon={download } />
            </FileUsrSaveElement>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  ) ;
  const photoGallery = (
    <div>
      <IonTitle>
        A Photo Collection  
      </IonTitle>
      { photoGallery0 }
      <div>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      <FileUsrSaveElement 
      impl={({ ref, }) => (
        <a 
        ref={ref} // core
        target="_blank" // to prevent overnav
        href='data:text/plain,peeek this booo !'
        download="peekthisboo.txt"
        />
      ) }
      >
        PEEK SOME BOO 
      </FileUsrSaveElement>
      </div>
    </div>
  ) ;

  return {
    takePhoto,
    /**     
     * the full UI; the items as-well-as the extra actions .
     * 
     */
    photoGallery ,
    /**     
     * only the items, without anything else .
     * 
     */
    photoGallery0 ,
    photos ,
  };
} ;


const generateFilename : (
  () => string
) = (
  () => {
    const dN = (
      Date.now()
    ) ;
    const rndn = (
      Math.random()
    ) ;
    return [dN, rndn, ].join("") ;
  }
) ;