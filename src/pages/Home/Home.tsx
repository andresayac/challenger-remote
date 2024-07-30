import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';

import './Home.css';
import { IrTransmitter } from 'capacitor-ir-transmitter';
import RemoteController from '@/components/RemoteController/RemoteController';

const Home: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonImg src="assets/provider/challenger.png" alt="Remote control" class='img-logo-size' />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>       
        <RemoteController />
      </IonContent>
    </IonPage>
  );
};

export default Home;
