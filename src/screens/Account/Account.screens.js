import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

import styles from './Account.style';
import {Header, SecondaryInputs} from './../../components';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      userName: '',
    };
  }
  render() {
    const {email, password, userName} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Acount" />
        <View style={styles.bodyWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('./../../../res/img/profileImg.jpg')}
              style={styles.image}
            />
          </View>

          <View style={styles.inputWrapper}>
            <SecondaryInputs
              placeholder={'john doe'}
              label={'User Name'}
              value={userName}
              onChangeText={(text) => this.setState({userName: text})}
              icon={require('./../../../res/img/user.png')}
            />
            <SecondaryInputs
              placeholder={'example@example.com'}
              label={'Email'}
              value={email}
              onChangeText={(text) => this.setState({email: text})}
              icon={require('./../../../res/img/mail.png')}
            />
            <SecondaryInputs
              placeholder={'location'}
              label={'Location'}
              value={password}
              onChangeText={(text) => this.setState({password: text})}
              icon={require('./../../../res/img/location.png')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Account;
