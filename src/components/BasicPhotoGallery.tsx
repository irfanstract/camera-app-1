

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
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  const base64Data = await base64FromPath(photo.webPath!);
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
};
const useSavedPhotos: (
  () => {
    photos: UserPhoto[];
    setPhotos: React.Dispatch<React.SetStateAction<UserPhoto[]>>;
    lastUpdatedStart ?: string ;
    lastUpdatedEnd ?: string ;
  }
) = (
  () => {
    const [photosA, setPhotos0] = (
      useState<(
        Promise<{ compStartDate ?: string ; compEndDate ?: string ; value : UserPhoto[] ; }> 
      )>(async () => ({ value : [] , }) )
    );
    const [ , refresh, ] = (
      useReducer(async (): Promise<void> => {
        const setPhotos = (
          (...[v] : [UserPhoto[] , ]): void => {
            const compEndDate = Date() ;
            setPhotos0(async () => ({ value: v , compEndDate, }) ) ;
          }
        ) ;
        const loadSaved = async () => {
          const { value } = await Preferences.get({ key: PHOTO_STORAGE, });
          const photosInPreferences0 = (value ? JSON.parse(value) : []) as UserPhoto[];
          const photosInPreferences = (
          await Promise.all((
          photosInPreferences0
          .map(async (photo): Promise<UserPhoto > => {
            const file = await Filesystem.readFile({
              path: photo.filepath,
              directory: Directory.Data,
            });
            // Web platform only: Load the photo as base64 data
            return (
              {
                ...photo,
                webviewPath : `data:image/jpeg;base64,${file.data}`,
              } // end of `UserPhoto`
            )
          } )
          ))
          );
      
          setPhotos(photosInPreferences);
        };
        loadSaved();
        ;
      } , Promise.resolve() ,)
    ) ;
    useEffect(() => {
      const intervalId = (
        setInterval((
          () => refresh()
        ) , 8 * 1000 , )
      ) ;
      refresh() ;
      return (
        (): void => {
          clearInterval(intervalId, ) ;
        }
      ) ;
    } , [refresh, ] , ) ;
    const exportDoSetPhotos = (
      /**   
       * use `useCallback` the way `setState` and `reduce` has done
       * 
       */
      useCallback((
        (...[updt0] : [React.SetStateAction<UserPhoto[]> , ] ) => {
          const updt = (
            (typeof updt0 === "function") ?
            updt0
            : (() => updt0 )
          ) ;
          setPhotos0(async (photosA) => {
            const p0 = (
              await (
                photosA
              )
            ) ;
            const { value: photos, } = p0 ;
            ;
            const newPhotos = (
              updt(photos, )
            ) ;
            await (
              Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos), })
            ) ;
            return (
              p0
            ) ;
          } ) ;
          refresh() ;
        }
      ) , [setPhotos0 , ] , )
    ) ;
    const { value: photos, compStartDate, compEndDate , } = (
      function useAw() {
        const [v, setV] = (
          useState<(
            (typeof photosA) extends Promise<infer A> ?
            A : never
          ) >({ value: [], })
        ) ;
        useEffect(() => {
          (
            photosA
            .then((v) => {
              0 && console.log({ v, }) ;
              setV(v ) ;
            } )
          ) ;
        } , [photosA, ], ) ;
        return v ;
      }
    )() ;
    return {
      photos ,
      setPhotos: exportDoSetPhotos ,
      lastUpdatedStart: compStartDate ,
      lastUpdatedEnd: compEndDate ,
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
    const savedFileImage = await savePicture(photo, fileName);
    setPhotos(photos => {
      ;
      const newPhotos = [
        savedFileImage,
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
const PHOTO_STORAGE: string = 'photos';


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