import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './Login.style';

class Login extends Component {
  render() {
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
