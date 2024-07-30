import React from 'react';
import { IonCard, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonInfiniteScroll, } from '@ionic/react';
import { arrowUp, arrowDown, arrowForward, arrowBack, power, volumeHigh, volumeLow, volumeMute, menu, close, informationCircleOutline, videocamOutline, caretUpCircleOutline, caretDownCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';
import './RemoteController.css';
import { IrTransmitter } from '@andresayac/capacitor-ir-transmitter';

import { IR_COMMANDS } from '@/constants/index';

// type of IR_COMMANDS
type IRCommandKeys = keyof typeof IR_COMMANDS;

const RemoteController: React.FC = () => {


  const handleButtonClick = async (key: IRCommandKeys ) => {
    console.log(`Button pressed: ${key}`);
    if (!IR_COMMANDS[key]) {
      console.error('Comando no encontrado');
      return;
    }
    const command = IR_COMMANDS[key];

    try {
      await IrTransmitter.transmitIR({
        frequency: 38000, // Frecuencia en Hz
        address: IR_COMMANDS.ADDRESS,
        command: command
      });
      console.log('Comando IR enviado');
    } catch (error) {
      console.error('Error al enviar el comando IR', error);
    }
  };

  return (
    <IonCard>
      <IonCardContent>
        <IonInfiniteScroll threshold="100px">
          <IonGrid>
            <IonRow>
              <IonCol size="6" >
                <IonButton expand="block" onClick={() => handleButtonClick('POWER')} color="danger">
                  <IonIcon icon={power} />
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton expand="block" onClick={() => handleButtonClick('MUTE')} color="medium">
                  <IonIcon icon={volumeMute} />
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_1')}>1</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_2')}>2</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_3')}>3</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_4')}>4</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_5')}>5</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_6')}>6</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_7')}>7</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_8')}>8</IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_9')}>9</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4"></IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('KEY_0')}>0</IonButton>
              </IonCol>
              <IonCol size="4"></IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonButton color={'success'} expand="block" onClick={() => handleButtonClick('VOLUME_UP')}>
                  <IonIcon icon={volumeHigh} />
                </IonButton>
              </IonCol>
              <IonCol size="4"></IonCol>
              <IonCol size="4">
                <IonButton color={'success'} expand="block" onClick={() => handleButtonClick('CHANNEL_UP')}>
                  <IonIcon icon={caretUpCircleOutline} />
                </IonButton>
              </IonCol>


            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonButton color={'secondary'} expand="block" onClick={() => handleButtonClick('VOLUME_DOWN')}>
                  <IonIcon icon={volumeLow} />
                </IonButton>
              </IonCol>
              <IonCol size="4">

              </IonCol>
              <IonCol size="4">
                <IonButton color={'secondary'} expand="block" onClick={() => handleButtonClick('CHANNEL_DOWN')}>
                  <IonIcon icon={caretDownCircleOutline} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow >
              <IonCol size="4">
                <IonButton expand="block" onClick={() => handleButtonClick('MENU')}>
                  <IonIcon icon={menu} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('UP')}>
                  <IonIcon icon={arrowUp} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton expand="block" onClick={() => handleButtonClick('EXIT')} color={'danger'}>
                  <IonIcon icon={close} />
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('LEFT')}>
                  <IonIcon icon={arrowBack} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('OK')}>
                  <IonIcon icon={checkmarkCircleOutline} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('RIGHT')}>
                  <IonIcon icon={arrowForward} />
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <IonButton color='tertiary' expand="block" onClick={() => handleButtonClick('SOURCE')}>
                  <IonIcon icon={videocamOutline} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='light' expand="block" onClick={() => handleButtonClick('DOWN')}>
                  <IonIcon icon={arrowDown} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton color='warning' expand="block" onClick={() => handleButtonClick('DISPLAY')}>
                  <IonIcon icon={informationCircleOutline} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonInfiniteScroll>
      </IonCardContent>
    </IonCard>
  );
};

export default RemoteController;
