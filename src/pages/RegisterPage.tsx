import { IonButton, IonCol, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';

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
    setShowToast(true);
    setTimeout(()=>{setShowToast(false)},3000);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>RegisterPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
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
        <IonButton expand="block" onClick={registerHandler}>Register</IonButton>
        {name && <IonItem><IonLabel>Your Name: {name}</IonLabel></IonItem> }      
        {gender && <IonItem><IonLabel>Gender: {gender}</IonLabel></IonItem> }
        {country && <IonItem><IonLabel>Country: {country}</IonLabel></IonItem> }
        {languages && 
        <IonItem> 
          <IonLabel position="stacked">You can speak</IonLabel>
          <IonList>
            {languages.map((language,i)=> <IonItem key={i}><IonLabel>{language}</IonLabel></IonItem> )}
          </IonList>
        </IonItem>     
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
