import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonFab, IonFabButton, } from '@ionic/react';
import { IonButton, useIonAlert, } from '@ionic/react';
import { IonIcon, } from '@ionic/react';
import { camera, trash, close, } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { // BPG
  usePhotoGallery ,
} from "components/BasicPhotoGallery" ;
import './Tab1.css';






// TODO - UNDO THE COMMIT !!!




const Tab1: React.FC = () => {
  const {
    photoGallery ,
    takePhoto ,
  } = usePhotoGallery() ;
  const [showAlert, ] = (
    useIonAlert()
  ) ;
  const showRudimentaryALert : (
    () => void
  ) = (
    () => {
      showAlert(`An Alert` , [
        {
          role : "confirm" ,
          text : "OK" ,
        } ,
      ] );
    }
  ) ;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        { photoGallery }
        <IonButton onClick={() => takePhoto() }>
          Take Photo
        </IonButton>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonButton 
        onClick={() => {
          showRudimentaryALert() ;
        } }
        >
          Show Alert
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

