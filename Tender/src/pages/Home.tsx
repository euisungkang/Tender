import { FunctionComponent, useCallback } from "react";
import styles from "./home.module.css";

import whiskey from "../components/main_whiskey.png"
import soju from "../components/main_soju.png"

const Home: FunctionComponent = () => {
  const onButtonRoundContainerClick = useCallback(() => {
    // Please sync "Catalog" to the project
  }, []);

  const onButtonRectClick = useCallback(() => {
    // Please sync "Favotrites" to the project
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.glasses}>
        <img
          className={styles.mainWhiskeyIcon}
          alt=""
          src={whiskey}
        />
        <img className={styles.mainWineIcon} alt="" src={"../components/main_wine.png"} />
        <img
          className={styles.mainWineIcon}
          alt=""
          src={"../components/main_wine.png"}
        />
        <img className={styles.mainWineIcon} alt="" src={"../components/main_wine.png"} />
        <img className={styles.mainSojuIcon} alt="" src={soju} />
      </div>
      <button className={styles.howsFeeling}>
        <div className={styles.text6}>지금은..?</div>
        <div className={styles.text5}>안녕!</div>
        <div className={styles.text4}>무슨 기분인가요?</div>
        <div className={styles.text3}>무슨 일 있었나요?</div>
        <div className={styles.text2}>오늘 하루도 푸르네요!</div>
        <div className={styles.text1}>요즘 어때?</div>
      </button>
      <div className={styles.buttonRound} onClick={onButtonRoundContainerClick}>
        <div className={styles.text}>주류 창고</div>
      </div>
      <button className={styles.buttonRect} onClick={onButtonRectClick}>
        <img className={styles.hearIcon} alt="" src={"/hear@2x.png" }/>
        <div className={styles.text7}>즐겨찾기</div>
        <img className={styles.bacIcon} alt="" src={"/bac@2x.png" }/>
      </button>
      <button className={styles.buttonRect1}>
        <img className={styles.hearIcon1} alt="" src={"/hear@2x.png"} />
        <div className={styles.text7}>최근 추천</div>
        <img className={styles.bacIcon1} alt="" src={"/bac@2x.png"} />
      </button>
      <div className={styles.deco}>
        <div className={styles.iconRect} />
        <img
          className={styles.iconStrapeSmall}
          alt=""
          src={"/icon-strape-small.svg"}
        />
        <img className={styles.iconWine} alt="" src={"/icon-wine.svg"} />
      </div>
      <div className={styles.serachBar}>
        <div className={styles.mix}>원하는 MIX를 찾으세요</div>
        <img className={styles.search2Icon} alt="" src={"/search-2@2x.png"} />
      </div>
    </div>
  );
};

export default Home;
