import { IonBadge, IonCheckbox, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonNote, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import {person,logIn} from 'ionicons/icons'

interface ContainerProps { }

const BottomTab: React.FC<ContainerProps> = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="register">
          <IonIcon icon={person}></IonIcon>
          <IonLabel>Register</IonLabel>
        </IonTabButton>
        <IonTabButton tab="register">
          <IonIcon icon={logIn}></IonIcon>
          <IonLabel>Login</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default BottomTab;
