import './ExploreContainer.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import React, { useEffect, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonItemDivider } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const history = useHistory();
  const [category, setCategory] = useState<Array<any>>([]);
  useEffect(() => {
    const api = axios.create({
        baseURL: `http://localhost:3000`
    })
    api.get("/category")
        .then(res => {             
            console.log(res.data)
            setCategory(res.data)
        })
        .catch(error=>{
            console.log("Error fetching data")
        })
  }, [])

  return (
    <IonGrid>
    <IonRow>
      <IonCol>
        {category.map((ct, i) => {
          return (
            <IonItem key={i}>
              <IonLabel>
                  <h2 style={{ paddingLeft: "10px" }}>{ct.id} </h2>
                  <h2 style={{ paddingLeft: "10px" }}>{ct.title} </h2>
                  <p style={{ paddingLeft: "10px" }}>{ct.skill}</p>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonCol>
    </IonRow>
  </IonGrid>
  );
};

export default ExploreContainer;
