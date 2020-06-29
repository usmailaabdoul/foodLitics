import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './Splash.style';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.timerHandle = setTimeout(async () => {
      Actions.add();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText1}>
          food <Text style={styles.headerText2}>Litics</Text>
        </Text>
      </SafeAreaView>
    );
  }
}

export default Splash;
