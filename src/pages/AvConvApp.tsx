import React, {} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import AvGenApp1 from 'components/ffmpg-renderdemo-app1';

const AvConvApp = (() => {
  return (
    function AvConvAppImpl(): React.ReactElement {
      return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <i>FFMPEG</i> example
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <React.Suspense>
          <p>
          <i>FFMPEG</i> examples here
          </p>
          <AvGenApp1 />
        </React.Suspense>
        </IonContent>
        </IonPage>
      ) ;
    }
  ) ;
})() ;

export default AvConvApp ;
