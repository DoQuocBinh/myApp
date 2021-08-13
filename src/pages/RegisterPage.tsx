import { IonButton, IonCol, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import {personAddOutline} from 'ionicons/icons'
import { insertCustomer } from '../storageHandler';

const RegisterPage: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('');
  const [country, setCountry] = useState('vn')
  const [languages, setLanguages] = useState<string[]>([]);
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState(new Date().toISOString());
  function formatDate(isoString:string){
    return new Date(isoString).toLocaleDateString("vi-VN");
  }
  function registerHandler(){
    //setShowToast(true);
    //setTimeout(()=>{setShowToast(false)},3000);
    var newCustomer = {name:name,country:country,languages:languages,gender:gender,birthDate:birthDate};
    localStorage.setItem("name",name);
    localStorage.setItem("dob",birthDate);
    insertCustomer(newCustomer);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">RegisterPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput type="text" onIonChange={(event)=>setName(event.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Gender</IonLabel>
            <IonRadioGroup value={gender} onIonChange={e => setGender(e.detail.value)}>
              <IonRow slot="start">
                <IonCol>
                  <IonItem>
                    <IonLabel>Male</IonLabel>
                    <IonRadio value="male"></IonRadio>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel>Female</IonLabel>
                    <IonRadio value="female"></IonRadio>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonRadioGroup>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Country</IonLabel>
            <IonSelect value={country} onIonChange={e => setCountry(e.detail.value)}>
              <IonSelectOption value='vn'>Vietnam</IonSelectOption>
              <IonSelectOption value='usa'>The USA</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Languages can speak</IonLabel>
            <IonSelect multiple={true} value={languages} onIonChange={e => setLanguages(e.detail.value)}>
              <IonSelectOption value="vietnamese">Vietnamese</IonSelectOption>
              <IonSelectOption value="spanish">Spain</IonSelectOption>
              <IonSelectOption value="english">English</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Date of Birth</IonLabel>
            <IonDatetime value={birthDate} displayFormat="DD-MM-YYYY" onIonChange={e=>setBirthDate(e.detail.value!)}></IonDatetime>
          </IonItem>
        </IonList>
        <IonButton expand="full"  onClick={registerHandler}>
          <IonIcon icon={personAddOutline} slot="icon-only"/>
        </IonButton>
        {name && <IonItem><IonLabel>Your Name: {name}</IonLabel></IonItem> }      
        {gender && <IonItem><IonLabel>Gender: {gender}</IonLabel></IonItem> }
        {country && <IonItem><IonLabel>Country: {country}</IonLabel></IonItem> }
        {languages && 
        <IonItemGroup> 
          <IonItemDivider>
             <IonLabel color="primary"><h2>You can speak</h2></IonLabel>
          </IonItemDivider>
            {languages.map((language,i)=> <IonItem key={i}><IonLabel>{language}</IonLabel></IonItem> )}
        </IonItemGroup>     
        }
        <IonItem>
          <IonLabel>Date of Birth {formatDate(birthDate)}</IonLabel>
        </IonItem>
      </IonContent>
      <IonToast isOpen={showToast} 
        position="top"
        message="Hello world"
        //duration={5000}
        buttons={[
          {
            side: 'start',
            icon: 'alert-circle-outline',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}
        ></IonToast>
    </IonPage>
  );
};
export default RegisterPage;
