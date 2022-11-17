import { Seq, List, Range, } from 'immutable';
import { fromMmeContentType, } from 'components/url-contenttypes-1';
import React from 'react';
import { withImplicitSuspense, } from 'components/useSuspenseBoundary1';
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
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import { camera, image, film, play, pause, } from 'ionicons/icons';
import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';
import ZipFile from "jszip" ;

import {
  ffmpSvcLd ,
  ffAppLd as ffRenderDemoSvcLd ,
} from "components/ffmpg-renderdemo1" ;
import * as avSeqEditingSUpport from "components/AvSeqEditor1";


















/**    
 * iterates over the `Blob`s, 
 * returning the concatenation of them all as single `Blob` .
 * therefore, the `Blob` will likely be malformed and unplayable, but
 * this method is left here for future programmers.
 * do not use this; u're on ur own .
 * 
 * @deprecated
 * 
 */
const avFileBlobGeneratorConcat1 = (
  async function consumeAll(...[genr, ]: [AsyncGenerator<Blob >, ] ): Promise<null | Blob > {
    LP1 :
    for await (const firstPart of genr ) {
      const remainingPart = (
        (await consumeAll(genr, ) )
        ||
        new Blob([], {})
      ) ;
      {
        return (
          firstPart instanceof File ?
          new File([firstPart, remainingPart, ], firstPart.name, { 
            type: firstPart.type ,
            // endings : firstPart.e
            lastModified : firstPart.lastModified ,
          } )
          : new Blob([firstPart, remainingPart, ], { 
            type: firstPart.type ,
          } )
        );
      }  
    }
    {
      return new Blob([], { type: "video/webm", }) ;
    }
  }
) ;
/**    
 * concatenates into one.
 * 
 * 
 */
const avFileBlobGeneratorConcat: (
  (...s: Parameters<typeof avFileBlobGeneratorConcat1> )
  => Promise<null | Blob >
) = (
  // TODO
  avFileBlobGeneratorConcat1
) ;


export {
	avFileBlobGeneratorConcat1 ,
	avFileBlobGeneratorConcat ,
} ;









export {} ;








