

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
    directory: Directory.Data,
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
              directory: Directory.Data,
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
      
          setPhotos(photosInPreferences);
        };
        loadSaved();
        ;
      } , Promise.resolve() ,)
    ) ;
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
    return {
      photosA ,
      refresh ,
      exportDoSetPhotos ,
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