import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';

import styles from './Chat.style';
import theme from '../../styles/theme';
import foodApi from '../../apis/Food.api';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      loading: false,
      stage: 1,
      results: [],
    };
  }

  componentDidMount() {}

  closeModal = () => {
    this.setState({stage: 1});
    this.props.toggleDetailsModal(false);
  };

  async handleSearch() {
    this.setState({loading: true});
    const {text} = this.state;

    try {
      var res = await foodApi.chat(text);

      this.setState({
        results: res.results,
        loading: false,
        stage: 2,
        text: '',
      });
    } catch (e) {
      console.log(e);
      this.setState({loading: false});
      alert('something unexpected happened');
    }
  }

  render() {
    const {showModal} = this.props;
    const {text, loading, stage, results} = this.state;

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

            {stage === 1 ? (
              <View style={styles.bodyWrapper}>
                <Text style={styles.bodyText}>Chat with our food bot</Text>

                <View style={styles.searchWrapper}>
                  <TextInput
                    selectTextOnFocus
                    placeholder="Chat message"
                    multiline
                    placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
                    autoCorrect={false} // to stop auto correction on email field
                    style={styles.search}
                    value={text}
                    onChangeText={(text) => this.setState({text: text})}
                  />
                </View>

                {loading ? (
                  <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonWrapperText}>loading ...</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => this.handleSearch()}>
                    <Text style={styles.buttonWrapperText}>Chat</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}

            {stage === 2 ? (
              <View style={styles.resultCard}>
                <Text style={styles.resTime}>{results.text}</Text>
              </View>
            ) : null}
          </View>
        </Modal>
      </View>
    );
  }
}

export default Chat;
