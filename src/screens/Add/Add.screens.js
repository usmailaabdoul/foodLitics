import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './Add.style';
import theme from './../../styles/theme';
import {Header} from './../../components';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  render() {
    const {search} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header title="Vitamins count" />
        <View style={styles.bodyWrapper}>
          <Text style={styles.bodyText}>
            Check the number of vitamins in your meal{' '}
          </Text>

          <View style={styles.searchWrapper}>
            <TextInput
              selectTextOnFocus
              placeholder="how much vitamins C is found in a orange ?"
              textAlignVertical="top"
              multiline
              placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
              autoCorrect={false} // to stop auto correction on email field
              style={styles.search}
              value={search}
              onChangeText={(text) => this.setState({search: text})}
            />
          </View>

          <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonWrapperText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Add;
