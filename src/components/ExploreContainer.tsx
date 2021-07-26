import { IonBadge, IonCheckbox, IonFab, IonFabButton, IonIcon, IonItem, IonList, IonNote } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonList>
        <IonItem>
          <IonCheckbox slot="start"/>
          <IonList>
            <h1>Create Idea</h1>
            <IonNote>Run Idea by Brandy</IonNote>
          </IonList>
          <IonBadge color="success" slot="end">
             5 days
          </IonBadge>
        </IonItem>
    </IonList>
  );
};

export default ExploreContainer;
