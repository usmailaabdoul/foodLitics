import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';

import styles from './SpecificIngredient.style';
import theme from '../../styles/theme';

class SpecificIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  closeModal = () => {
    this.props.toggleDetailsModal(false);
  };

  render() {
    const {showModal} = this.props;
    const {search} = this.state;

    return (
      <View>
        <Modal
          isVisible={showModal}
          onBackButtonPress={() => this.closeModal()}
          onBackdropPress={() => this.closeModal()}
          backdropTransitionOutTiming={0}
          style={styles.modal}>
          <View style={styles.container}>
            <View style={styles.closeButtonWrapper}>
              <TouchableOpacity
                onPress={() => this.closeModal()}
                style={styles.closeButton}>
                <Image
                  source={require('../../../res/img/rightArrow.png')}
                  style={styles.closeButtonImage}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.bodyWrapper}>
              <Text style={styles.bodyText}>Get ingridients</Text>

              <View style={styles.searchWrapper}>
                <TextInput
                  selectTextOnFocus
                  placeholder="Get ingridients"
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
          </View>
        </Modal>
      </View>
    );
  }
}

export default SpecificIngredient;
