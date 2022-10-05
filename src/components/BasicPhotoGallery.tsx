

import { base64FromPath, } from './url-fetch-util';

import { useState, useEffect, useReducer, useCallback, } from 'react';
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
import { camera, trash, close, } from 'ionicons/icons';

import { 
   Camera, 
   CameraResultType, 
   CameraSource, 
   Photo ,
} from '@capacitor/camera';
import { 
   Filesystem, 
   Directory, 
} from '@capacitor/filesystem';
import { Preferences, } from '@capacitor/preferences';
import { Capacitor, } from '@capacitor/core';






export class UserPhoto {
  /**    
   * @deprecated
   */
  constructor(
    public filepath: string ,
    public webviewPath?: string ,
    public originalResol?: readonly [number, number,] ,
  ) {}
} ;
const useSavedPhotos: (
  () => {
    photos: UserPhoto[];
    setPhotos: React.Dispatch<React.SetStateAction<UserPhoto[]>>;
    lastUpdatedStart ?: string ;
    lastUpdatedEnd ?: string ;
  }
) = (
  () => {
    const [photos, setPhotos,] = (
      useState<UserPhoto[] >([], )
    ) ;
    return {
      photos ,
      setPhotos ,
    } ;
  }
) ;
export function usePhotoGallery() {
  // TODO
  const {
    photos ,
    setPhotos ,
  } = useSavedPhotos() ;
  
  const takePhoto = async () => {
    const photo = (
      await (
        Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
          quality: 100,
        })
      )
    );
    const fileName = (
      generateFilename() + '.jpeg'
    ) ;
    setPhotos(photos => {
      ;
      const newPhotos = [
        {
          filepath: fileName,
          webviewPath: photo.webPath,
        },
        ...photos,
      ];
      return newPhotos ;
    } );
  };

  const photoGallery = (
    <IonGrid>
      <IonRow>
        {photos.map((photo, index) => (
          <IonCol size="6" key={index}>
            <a target="_blank" href={photo.webviewPath } download={photo.filepath } >
            <IonImg src={photo.webviewPath} />
            </a>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  ) ;

  return {
    takePhoto,
    photoGallery ,
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