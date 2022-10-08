

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

import type { 
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
const updateNativePhotos = (
  async (...[newPhotos, ] : [UserPhoto[] , ] ) => (
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos), })
  )
) ;
const fromNativeStorageGetSavedPhotos = (
  async function () {
    ;
    const photosInPreferences0 = await (async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE, });
      return (
        (value ? JSON.parse(value) : []) as UserPhoto[]
      ) ;
    } )() ;
    ;
    return photosInPreferences0 ;
  }
) ;
const fromNativeStorageGetSavedPhotosAdapted = (
  async function () {
          ;
          const photosInPreferences0 = await fromNativeStorageGetSavedPhotos();
          const photosInPreferences = /* COND */ (
          // https://ionicframework.com/docs/react/your-first-app/adding-mobile 
          !isPlatform('hybrid') ?
          (
          await Promise.all((
          photosInPreferences0
          .map(async (photo): Promise<null | UserPhoto > => {
            const file = await (
            Filesystem.readFile({
              path: photo.filepath,
              directory: PHOTO_DIR,
            })
            .catch(z => {
              console.info(z ) ;
              return null ;
            })
            );
            if (!file ) return null ;
            // Web platform only: Load the photo as base64 data
            return (
              {
                ...photo,
                webviewPath : `data:image/jpeg;base64,${file.data}`,
              } // end of `UserPhoto`
            )
          } )
          ))
          )
          .filter((v): v is UserPhoto => !!v )
          : photosInPreferences0
          ) /* COND */ ;
          ;
          return {
            photosInPreferences0 ,
            photosInPreferences ,
          } ;
  }
) ;
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  const base64Data = (
    /**     
     * per
     * the advice per https://ionicframework.com/docs/react/your-first-app/adding-mobile 
     * 
     */
    await (async (): Promise<string> => {
      ;
      // "hybrid" will detect Cordova or Capacitor;
      if (isPlatform('hybrid')) {
        const file = await Filesystem.readFile({
          path: photo.path!,
        });
        return file.data;
      } else {
        return await base64FromPath(photo.webPath!);
      }
    } )()
  );
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: PHOTO_DIR,
  });

  /**     
   * per
   * the advice per https://ionicframework.com/docs/react/your-first-app/adding-mobile 
   * 
   */
  if (isPlatform('hybrid')) {
    // Display the new image by rewriting the 'file://' path to HTTP
    // Details: https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
  }
};
const PHOTO_STORAGE: string = 'photos';
const PHOTO_DIR: Directory = Directory.Data ;
/**    
 * not meant for public use.  
 * 
 * primarily the extracted basics.
 * 
 * does not itself auto-refresh ;
 * must manually be called.
 * 
 */
const useSavedPhotosImpl = (
  () => {
    const [photosA, setPhotos0] = (
      useState<(
        Promise<{ compStartDate ?: string ; compEndDate ?: string ; value : UserPhoto[] ; }> 
      )>(async () => ({ value : [] , }) )
    );
    const setPhotos1 = (
          (...[v] : [UserPhoto[] , ]): void => {
            const compEndDate = Date() ;
            setPhotos0(async () => ({ value: v , compEndDate, }) ) ;
          }
    ) ;
    const loadSaved = (() => {
      const setPhotos = (
        setPhotos1
      ) ;
      return (
        async () => {
          const {
            photosInPreferences0 ,
            photosInPreferences ,
          } = (
            await fromNativeStorageGetSavedPhotosAdapted()
          ) ;
      
          setPhotos(photosInPreferences);
        }
      ) ;
    })();
    const [ , refresh, ] = (
      useReducer(async (): Promise<void> => {
        loadSaved();
        ;
      } , Promise.resolve() ,)
    ) ;
    return {
      photosA ,
      refresh ,
      exportDoSetPhotos: (
        /**   
         * use `useCallback` the way `setState` and `reduce` has done
         * 
         */
        useCallback((
          (...[usrUpdt0] : [React.SetStateAction<UserPhoto[]> , ] ) => {
            const usrUpdt = (
              (typeof usrUpdt0 === "function") ?
              usrUpdt0
              : (() => usrUpdt0 )
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
                usrUpdt(photos, )
              ) ;
              await (
                updateNativePhotos(newPhotos)
              ) ;
              return (
                p0
              ) ;
            } ) ;
            refresh() ;
          }
        ) , [setPhotos0 , ] , )
      ) ,
    } ;
  }
) ;
const useSavedPhotos: (
  () => {
    photos: UserPhoto[];
    setPhotos: (
      /**   
       * shall be signature-equivalent with 
       * the 2nd value of the tuple returned by `useState<UserPhoto[] >(...)` 
       * (which's the `setState(...)` fnc )
       * 
       */
      React.Dispatch<React.SetStateAction<UserPhoto[]>>
    );
    lastUpdatedStart ?: string ;
    lastUpdatedEnd ?: string ;
  }
) = (
  () => {
    const {
      photosA ,
      refresh ,
      exportDoSetPhotos ,
    } = (
      useSavedPhotosImpl()
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
    const { value: photos, compStartDate, compEndDate , } = (
      usePromiseValue({ 
        clearOnSwitch: false, 
        src: photosA, 
        initialValue: { value: [] as UserPhoto[] , } ,
      })
    ) ;
    return {
      photos ,
      setPhotos: exportDoSetPhotos ,
      lastUpdatedStart: compStartDate ,
      lastUpdatedEnd: compEndDate ,
    } ;
  }
) ;
export function useSavedPhotos1() {
  const [showAlert,] = (
    useIonAlert()
  ) ;

  // TODO
  const {
    photos ,
    setPhotos ,
  } = useSavedPhotos() ;
  
  const addPhotoImpl = (
    async function (...psArgs : [
      Photo ,
      { fileName : string ; } ,
    ] ) { 
      const [
        photo ,
        { fileName, } ,
      ] = psArgs ;
      ;
      const savedFileImage = await savePicture(photo, fileName);
      setPhotos(photos => {
        ;
        const newPhotos = [
          savedFileImage,
          ...photos,
        ];
        return newPhotos ;
      } );
      ; 
      return {
      } ;
    }
  ) ;
  
  return {
    photos ,
    addPhotoImpl ,
  } ;
}
