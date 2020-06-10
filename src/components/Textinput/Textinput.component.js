import React, {Component} from 'react';
import {TextInput, View, Text, Image} from 'react-native';

import styles from './Textinput.style';
import theme from '../../styles/theme';

class Textinput extends Component {
  render() {
    const {
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      keyboardType,
      label,
      icon,
    } = this.props;

    return (
      <View style={styles.initmainwrapperstyle}>
        <Text style={styles.lableText}>{label}</Text>
        <View style={styles.textInputWrapper}>
          <TextInput
            secureTextEntry={secureTextEntry}
            onFocus={this.onFocusChange}
            placeholder={placeholder}
            placeholderTextColor={theme.DARK_COLOR}
            autoCorrect={false} // to stop auto correction on email field
            style={styles.inputText}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize="none"
            keyboardType={keyboardType}
          />
          <View style={styles.iconWrapper}>
            <Image source={icon} style={styles.icon} />
          </View>
        </View>
      </View>
    );
  }
}

export default Textinput;
