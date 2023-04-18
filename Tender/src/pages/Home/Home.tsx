import {
  IonIcon,
  IonButton,
  IonSearchbar,
  IonImg,
  IonText
} from '@ionic/react';

import iconsMerged from '../media/icons_merged.svg'

import { heartOutline, refreshOutline } from 'ionicons/icons'
import { FunctionComponent, useCallback } from "react";
import styles from "./home.module.css";
import global from "../global.module.css";

// import whiskey from "../media/main_whiskey.png"
// import soju from "../media/main_soju.png"
// import wine from "../media/main_wine.png"
// import cocktail from "../media/main_cocktail.png"
// import sake from "../media/main_sake.png"

const Home: FunctionComponent = () => {
  
  const onButtonRoundContainerClick = useCallback(() => {
    // Please sync "Catalog" to the project
  }, []);

  const onButtonRectClick = useCallback(() => {
    // Please sync "Favotrites" to the project
  }, []);

  function generateRandomMoodText() {
    var texts = ['지금은..?', '안녕!', '무슨 기분인가요?', '무슨 일 있었나요?', '오늘 하루도 푸르네요!', '요즘 어때?']
    return texts[Math.floor(Math.random() * texts.length)]
  }

  function generateRandomGlasses() {
    var glasses = ["main_whiskey.png", "main_soju.png", "main_wine.png", "main_cocktail.png", "main_sake.png"]
    console.log("../media/" + glasses[0] === "../media/main_whiskey.png")
    return "../media/" + glasses[0]
  }
  
  return (

    <div className={global.main}>
      <div className={styles.searchDiv}>
        <IonSearchbar
          className={styles.searchBar}
          animated={true}
          placeholder="원하는 MIX를 찾으세요"
          show-clear-button="focus"
        >

        </IonSearchbar>
      </div>
      <div className={styles.glassesDiv}>
        <IonImg src={require("../media/main_whiskey.png")}></IonImg>

        <IonButton className={styles.moodButton}>
          <IonText>{generateRandomMoodText()}</IonText>
        </IonButton>
      </div>

      <div className={styles.catalogDiv}>
        <div className={styles.deco}>
          <IonIcon className={styles.child} icon={iconsMerged}/>
        </div>
        <div className={styles.catalogButtonWrapper}>
          <IonButton className={styles.catalogButton} onClick={onButtonRoundContainerClick}>
            <div className={styles.text}>주류 창고</div>
          </IonButton>
        </div>
      </div>

      <div className={styles.altDiv}>
        <IonButton className={styles.favButton} onClick={onButtonRectClick}>
          <IonIcon icon={heartOutline} color="white" />
          <div className={styles.buttonText}>즐겨찾기</div>
        </IonButton>
        <IonButton className={styles.recButton}>
          <IonIcon icon={refreshOutline} />
          <div className={styles.buttonText}>최근 추천</div>
        </IonButton>
      </div>

    </div>
  );
};



export default Home;
