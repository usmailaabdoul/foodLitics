import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import styles from './QuickAnswers.style';
import theme from '../../styles/theme';
import mealsApi from '../../apis/Meals.api';

class QuickAnswers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
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
    const {search} = this.state;

    try {
      var res = await mealsApi.quickQuestion(search);
      console.log(res);
      this.setState({
        results: res,
        loading: false,
        stage: 2,
        search: '',
      });
    } catch (e) {
      console.log(e);
      this.setState({loading: false});
      alert('something unexpected happened');
    }
  }

  render() {
    const {showModal} = this.props;
    const {search, loading, stage, results} = this.state;

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

              {stage === 1 ? (
                <View style={styles.bodyWrapper}>
                  <Text style={styles.bodyText}>Get quick responses</Text>

                  <View style={styles.searchWrapper}>
                    <TextInput
                      selectTextOnFocus
                      placeholder="enter question: 'How much vitamin c is in 2 apples?'"
                      multiline
                      placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
                      autoCorrect={false} // to stop auto correction on email field
                      style={styles.search}
                      value={search}
                      onChangeText={(text) => this.setState({search: text})}
                    />
                  </View>

                  {loading ? (
                    <TouchableOpacity style={styles.buttonWrapper}>
                      <ActivityIndicator size={25} color={theme.WHITE_COLOR} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.buttonWrapper}
                      onPress={() => this.handleSearch()}>
                      <Text style={styles.buttonWrapperText}>Ask</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ) : null}

              {stage === 2 ? (
                <View style={styles.resultCard}>
                  <Image
                    source={{uri: results.image}}
                    style={{width: 200, height: 200}}
                  />
                  <Text style={styles.resTitle}>{results.answer}</Text>
                  <Text style={styles.resTime}>Type: {results.type}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default QuickAnswers;
