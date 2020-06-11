import React, {Component} from 'react';
import {BackHandler, ToastAndroid, YellowBox} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  Tabs,
  Stack,
  LegacyTabs,
} from 'react-native-router-flux';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

import {TabIcons} from './../components/index';
import styles from './Navigation.style';

import Screens from './../components/TabIcons/Screens';
import {Home, Account, Add, Library, Login, Register} from './../screens';

let backPressed = 0;

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      backPressed: 1,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }

  handleBackButton() {
    if (Actions.currentScene === '_timeBound') {
      if (backPressed > 0) {
        BackHandler.exitApp();
        backPressed = 0;
      } else {
        backPressed++;
        ToastAndroid.show('press Again To Close', ToastAndroid.SHORT);
        setTimeout(() => {
          backPressed = 0;
        }, 2000);
        return true;
      }
    }
  }

  render() {
    return (
      <Router {...sceneConfig}>
        <Scene>
          <Stack key="root" hideNavBar>
            {/* <Scene key="splash" component={Splash} initial hideNavBar={true} /> */}
            <Scene
              key="login"
              gesturesEnabled={false}
              component={Login}
              hideNavBar={true}
              initial
            />
            <Scene key="register" component={Register} hideNavBar={true} />

            {/* Tab Bar */}
            <Scene
              hideNavBar
              panHandlers={null}
              animationEnabled={false}
              key="tabs">
              <Tabs
                key="tabbar"
                swipeEnabled={false}
                showLabel={false}
                tabBarStyle={styles.tabBar}
                tabBarPosition="bottom">
                <Scene
                  key="home"
                  icon={TabIcons}
                  component={Home}
                  title={Screens.HOME}
                  hideNavBar={true}
                />

                <Scene
                  key="add"
                  icon={TabIcons}
                  component={Add}
                  title={Screens.ADD}
                  hideNavBar={true}
                />

                <Scene
                  key="library"
                  icon={TabIcons}
                  component={Library}
                  title={Screens.LIBRARY}
                  hideNavBar={true}
                />

                <Scene
                  key="account"
                  component={Account}
                  icon={TabIcons}
                  hideNavBar={true}
                  title={Screens.ACCOUNT}
                />
              </Tabs>
            </Scene>
          </Stack>
        </Scene>
      </Router>
    );
  }
}

export default Navigation;

const sceneConfig = {
  cardStyle: {
    backgroundColor: '#E4E6EB',
  },
};
