import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton, useIonAlert, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { // BPG
  usePhotoGallery ,
} from "components/BasicPhotoGallery" ;
import './Tab1.css';

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
        <div>
        { photoGallery }
        </div>
        <IonButton onClick={() => takePhoto() }>
          Take Photo
        </IonButton>
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
