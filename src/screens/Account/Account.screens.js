import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Account.style';
import {Header} from './../../components';

class Account extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header title="Acount" />
        <Text>Account</Text>
      </SafeAreaView>
    );
  }
}

export default Account;
