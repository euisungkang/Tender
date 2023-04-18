import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp,
  setupIonicReact,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { happyOutline, bookOutline, homeOutline } from 'ionicons/icons'
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog';
//import Mood from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
      <IonRouterOutlet>
        <Route exact path = "/home" component = { Home } />
        <Route exact path = "/catalog" component = { Catalog } />
        {/*<Route exact path = "/mood" component = { Mood } />*/}
        <Redirect exact from = "/" to = "/home" /> 
      </IonRouterOutlet>
{/*
        <IonTabs>



          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
            </IonTabButton>
            <IonTabButton tab="catalog" href="/catalog">
              <IonIcon icon={bookOutline} />
            </IonTabButton>
            <IonTabButton tab="mood" href="/mood">
              <IonIcon icon={happyOutline} />
            </IonTabButton>
          </IonTabBar>

       </IonTabs>
       */}

      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
