


// PhotoEnlargeModal-tsx

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
import { useIonAlert, useIonModal, useIonActionSheet, useIonPicker, } from '@ionic/react';
import { IonModal, } from '@ionic/react';
import { arrowBack, } from 'ionicons/icons';
import { camera, trash, close, } from 'ionicons/icons';
import { download, } from 'ionicons/icons';
import ActionElement from 'components/ActionElement';
import FileUsrSaveElement from 'components/FileUsrSaveElement';

import type { 
   Camera, 
   CameraResultType, 
   CameraSource, 
   Photo ,
} from '@capacitor/camera';

import type {
  UserPhoto ,
} from "./BasicPhotoGalleryImpl" ;

type ComponentProps<A extends {} & Function > = (
  (A ) extends { (p: infer P ): unknown ; } ?
  P : never
) ;















const PhotoEnlargeModal = (
  React.forwardRef((
    function ({ src: photo , } : (
      { src : UserPhoto ; }
    ) , userGivenRef : React.Ref<null | HTMLIonModalElement > ) {
      const [popupH, popupRef, ] = (
        useState<(
          null | 
          HTMLIonModalElement
        ) >(null )
      ) ;
      React.useImperativeHandle((
        userGivenRef
      ), () => popupH, ) ;
      const closeButton = (
        <ActionElement 
        onClick={popupH && (() => { popupH.dismiss() ; } ) } 
        shape="round"
        >
          <IonIcon icon={close } />
        </ActionElement>
      ) ;
      const mainElement = (
        <div
        style={{
          display: `flex` ,
          flexDirection: `column` ,
          //
        }}
        >
          <button type="button" style={{ padding: 0, }} >
            <IonImg src={photo.webviewPath} />
          </button>
          <code>
            { photo.filepath }
          </code>
        </div>
      ) ;
      const toolbar = (
        <div>
          <ActionElement onClick={null } >
            edit
          </ActionElement>
        </div>
      ) ;
      return (
        <IonModal
        ref={popupRef }
        backdropDismiss
        canDismiss
        // swipeToClose
        keyboardClose
        style={{
          ...{
            "--width" : `75%` ,
            "--height" : `75%` ,
          } ,
        }}
        >
          <div
          style={{
            display: `flex` ,
            flexDirection: `column-reverse` ,
            //
          }}
          >
            { mainElement }
            { toolbar }
            <div hidden >
              { closeButton }
            </div>
          </div>
        </IonModal>
      ) ;
    }
  ))
) ;
const usePhotoEnlargeModal = (
  function ({ src: photo, } : (
    { src : UserPhoto ; }
  ) ) {
    ;
    const [popupH, popupRef, ] = (
      useState<(
        null | 
        HTMLIonModalElement
      ) >(null )
    ) ;
    ;
    return [
      (
        <PhotoEnlargeModal 
        ref={popupRef } 
        src={photo }
        />
      ) ,
      popupH ,
    ] as const ;
  }
) ;

const PhotoEnlargeActionElement = (
  function ({ src: photo, } : (
    { src : UserPhoto ; }
  ) ) {
    const [photoEnlargeModal, photoEnlargeCallable, ] = (
      usePhotoEnlargeModal({ src: photo, }, )
    ) ;
    return (
      <Fragment>
        <IonButton 
        // slot="icon-only"
        onClick={() => {
          photoEnlargeCallable && (
            photoEnlargeCallable.present()
          ) ;
        }}
        >
          ENLARGE
        </IonButton>
        { photoEnlargeModal }
      </Fragment>
    ) ;
  }
) ;
const PhotoEnlargeableElement = (
  function ({ src: photo, } : (
    { src : UserPhoto ; }
  ) ) {
    const [photoEnlargeModal, photoEnlargeCallable, ] = (
      usePhotoEnlargeModal({ src: photo, }, )
    ) ;
    return (
      <Fragment>
        <button 
        type="button" 
        onClick={() => {
          photoEnlargeCallable && (
            photoEnlargeCallable.present()
          ) ;
        } }
        style={{ padding: 0, }} 
        >
        <IonImg src={photo.webviewPath} />
        </button>
        { photoEnlargeModal }
      </Fragment>
    ) ;
  }
) ;





export {
  PhotoEnlargeModal ,
  usePhotoEnlargeModal ,

  PhotoEnlargeActionElement ,
  PhotoEnlargeableElement ,
  
  //
} ;
