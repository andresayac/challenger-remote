import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';

import { logoGithub, cloudCircleOutline } from 'ionicons/icons';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large' class='toolbar'>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <strong>Andres Aya</strong>
          <p><IonIcon icon={logoGithub}></IonIcon> <a target="_blank" rel="noopener noreferrer" href="https://github.com/andresayac">Github</a></p>
          <p><IonIcon icon={cloudCircleOutline}></IonIcon> <a target="_blank" rel="noopener noreferrer" href="https://afaya.com.co">Sitio Web</a></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
