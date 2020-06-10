import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import styles from './Login.style';
import {Textinput} from '../../components';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
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
              <Text style={styles.loginGreetingsText}>HELLO</Text>
              <Text style={styles.text}>Sign in to your account</Text>

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

              <TouchableOpacity style={styles.buttonWrapper}>
                <Text style={styles.buttonWrapperText}>Login</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.footerText1}>
                Dont't have an account?{' '}
                <Text style={styles.footerText2}>Register Now</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
