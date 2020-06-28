import React, {Component} from 'react';
import {TextInput, View, Text, Image} from 'react-native';

import styles from './SecondaryInputs.style';
import theme from '../../styles/theme';

class SecondaryInputs extends Component {
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
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View>
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
          </View>
        </View>
      </View>
    );
  }
}

export default SecondaryInputs;
