import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './Register.style';
import {Textinput} from '../../components';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }
  render() {
    const {email, password, name} = this.state;

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
                  placeholder={'john doe'}
                  label={'User name'}
                  value={name}
                  onChangeText={(text) => this.setState({name: text})}
                  icon={require('./../../../res/img/user.png')}
                />

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
                <Text style={styles.buttonWrapperText}>Register</Text>
              </TouchableOpacity>
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
