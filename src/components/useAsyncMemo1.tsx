
import { Seq, List, Range, } from 'immutable';
import { fromMmeContentType, } from 'components/url-contenttypes-1';
import { concatAsFfConvArgs, } from 'components/ffmpg-concat-1';
import React from 'react';
import { withImplicitSuspense, } from 'components/useSuspenseBoundary1';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage ,
  IonContent ,
  IonHeader ,
  IonToolbar , 
  useIonToast ,
  useIonAlert ,
  useIonActionSheet ,
  useIonModal ,
  IonCard ,
  IonCardContent ,
  IonButton ,
  IonReorderGroup ,
  IonList ,
  IonItemSliding ,
  IonItemDivider ,
  IonItem ,
  IonReorder ,
  IonLoading ,
  IonProgressBar ,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { camera, image, film, play, pause, } from 'ionicons/icons';
import { BlobBasedTimestampedImgDisplay, } from 'components/ImgElemWithTimestamp1';
import { useBlobObjAsEmbeddable, } from 'components/ImgElemWithTimestamp1';
import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';
import ZipFile from "jszip" ;
import { fileNamesContentsItrCompileAsArray1 , } from "components/zipfile-gen-1" ;
import { zipfileInitWithFilesListNc ,          } from "components/zipfile-gen-1" ;
import { newZipFileBuilder ,          } from "components/zipfile-gen-1" ;

import {
  ffmpSvcLd ,
  ffAppLd as ffRenderDemoSvcLd ,
} from "components/ffmpg-renderdemo1" ;
import * as avSeqEditingSUpport from "components/AvSeqEditor1";
import * as ffConcat101 from "components/g-avse/ffm/concat/b101";
import {
  avFileBlobGeneratorConcat ,
} from "components/useMediaFilePostproc1" ;

export {} ; // TS-1208









const useAsyncMemo = (
  // TODO
  function <R>(...[callback, deps, ] : [
    { (ctx: {} & { aS: AbortSignal ; } , ): Promise<R > ; } ,
    React.DependencyList ,
  ] ) {
    const [p, setP, ] = (
      React.useState<Promise<R> >(async () => (
        await new Promise(() => /** leave it hanging */ {} )
      ) )
    ) ;
    React["useLayoutEffect"](() => {
      const a = new AbortController() ;
      const { signal, } = a ;
      setP(() => (
        callback({ aS: signal, }, )
      ) ) ;
      return () => {
        a.abort((
          TypeError((
            `UseAsyncMemo refreshing . usually due to change in 'deps' . `
          ))
        )) ;
      } ;
    } , deps , ) ;
    return p ;
  }
) ;





export { useAsyncMemo, } ;







