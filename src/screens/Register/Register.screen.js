import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

import styles from './Register.style';
import {Textinput} from '../../components';
import theme from './../../styles/theme';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  async handleRegister() {
    const {email, password} = this.state;
    this.setState({loading: true});

    try {
      await auth().createUserWithEmailAndPassword(email, password);

      this.setState({loading: false});
      Alert.alert(
        'Success',
        'You have Registered successfully',
        [
          {},
          {
            text: 'ok',
            onPress: () => Actions.userInfo(),
          },
        ],
        {cancelable: false},
      );
    } catch (e) {
      var errorCode = e.code;
      if (errorCode === 'auth/wrong-password') {
        alert('the  Password To This Email Is Invalid');
      } else if (errorCode === 'auth/user-disabled') {
        alert('the Email Has Been Disabled');
      } else if (errorCode === 'auth/user-not-found') {
        alert('there Is No User Correspomding To This Email');
      } else if (errorCode === 'auth/invalid-email') {
        alert('the Email Address Is Not Valid');
      } else {
        console.log(e);
        alert('something Unexpected Happend');
      }
      this.setState({loading: false});
      return;
    }
  }

  render() {
    const {email, password} = this.state;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.wrapper}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText1}>
              food <Text style={styles.headerText2}>Litics</Text>
            </Text>
          </View>

          <View style={styles.bodyWrapper}>
            <View style={styles.loginCard}>
              <Text style={styles.loginGreetingsText}>CREATE ACCOUNT</Text>

              <View>
                <Textinput
                  placeholder={'Email'}
                  label={'Email'}
                  value={email}
                  onChangeText={(text) => this.setState({email: text})}
                  icon={require('./../../../res/img/mail.png')}
                />

                <Textinput
                  secureTextEntry
                  placeholder={'Password'}
                  label={'Password'}
                  value={password}
                  onChangeText={(text) => this.setState({password: text})}
                  icon={require('./../../../res/img/hidden.png')}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>

              {this.state.loading ? (
                <TouchableOpacity style={styles.buttonWrapper}>
                  <ActivityIndicator size={25} color={theme.WHITE_COLOR} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.handleRegister()}
                  style={styles.buttonWrapper}>
                  <Text style={styles.buttonWrapperText}>Register</Text>
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity onPress={() => Actions.popTo('login')}>
              <Text style={styles.footerText1}>
                Dont't have an account?{' '}
                <Text style={styles.footerText2}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Register;
