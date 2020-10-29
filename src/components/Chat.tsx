import {
  IonContent, 
  IonGrid, 
  IonFooter, 
  IonRow, 
  IonCol, 
  IonTextarea, 
  IonIcon, 
  IonToolbar, 
  IonPage,
  IonHeader,
  IonAvatar,
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';
import React from 'react';
import {
  imagesOutline, 
  cameraOutline,
  chevronDownCircleOutline
} from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import './Chat.css';
import God from '../images/God.jpg';


function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

const Chat: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonGrid>
          <IonRow className="Footer">
            <IonCol size="1.5">
              <IonAvatar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0ZL7it9GAAc4a1Fb40d6fxu-paaRZ-zG2yQ&usqp=CAU" alt="username" />
              </IonAvatar>
            </IonCol>
            <IonCol size="0.5">
              <div></div>
            </IonCol>
            <IonCol size="10">
              <div className="ChatName">
                username
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to refresh"
          refreshingSpinner="circles">
        </IonRefresherContent>
      </IonRefresher>
    <br/>
      <IonGrid>
        <IonRow>
          <IonCol size="9" className="message my-message">
            <b>username</b>
            <br />
            <span>This is the biggest message of all time boy you have read it so we can test it</span>
            <div>createdAt</div>
          </IonCol>
          <IonCol offset="3" size="9" className="message other-message">
            <b>username</b>
            <br />
            <span>This is the biggest message of all time boy you have read it so we can test it. This is the biggest message of all time boy you have read it so we can test it</span>
            <div>createdAt</div>
          </IonCol>
          <IonCol size="9" className="message my-message">
            <b>username</b>
            <br /><br />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdeAWW6N_noC1ntjCHbWY1_nU25h-t0MxEYw&usqp=CAU" alt="username" />
            <div>createdAt</div>
          </IonCol>
          <IonCol offset="3" size="9" className="message other-message">
            <b>username</b>
            <br /><br />
            <img src="https://static.wixstatic.com/media/19d358_e38e6f6918914b3d884dc52f875b41ae~mv2_d_3337_2437_s_4_2.jpg/v1/fill/w_560,h_338,al_c,q_80,usm_0.66_1.00_0.01/19d358_e38e6f6918914b3d884dc52f875b41ae~mv2_d_3337_2437_s_4_2.webp" alt="username" />
            <div>createdAt</div>
          </IonCol>
          <IonCol size="9" className="message my-message">
            <b>username</b>
            <br /><br />
            <span>This is the biggest message of all time boy you have read it so we can test it. This is the biggest message of all time boy you have read it so we can test it</span>
            <br /><br />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdeAWW6N_noC1ntjCHbWY1_nU25h-t0MxEYw&usqp=CAU" alt="username" />
            <div>createdAt</div>
          </IonCol>
          <IonCol offset="3" size="9" className="message other-message">
            <b>username</b>
            <br /><br />
            <span>This image is loaded locally not from URL</span>
            <br /><br />
            <img src={God} alt="username" />
            <div>createdAt</div>
          </IonCol>
        </IonRow>
      </IonGrid>  
      <br/> 
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonRow align-item-center className="Footer">
          <IonCol size='8.5'>
            <IonTextarea className="ChatTextarea" placeholder="Message..." ></IonTextarea> 
          </IonCol>
          <IonCol size='0.5'>
            <div></div>
          </IonCol>
          <IonCol size='1.5'>
            <IonIcon icon={imagesOutline} size="large"></IonIcon>
          </IonCol>
          <IonCol size='1.5'>
            <IonIcon icon={cameraOutline} size="large"></IonIcon>
          </IonCol>
        </IonRow>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  );
};

export default Chat;
