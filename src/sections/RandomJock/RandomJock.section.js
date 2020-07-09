import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';

import styles from './RandomJock.style';
import theme from '../../styles/theme';
import foodApi from '../../apis/Food.api';

class RandomJock extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    try {
      var res = await foodApi.jokes();
      console.log(res);
      this.setState({
        results: res,
        loading: false,
        stage: 2,
        nutrients: res.nutrients,
      });
    } catch (e) {
      console.log(e);
      this.setState({loading: false});
      alert('something unexpected happened');
    }
  }

  render() {
    const {showModal} = this.props;
    const {loading, stage, results} = this.state;

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
                <Text style={styles.bodyText}>Food Jokes :)</Text>

                {loading ? (
                  <TouchableOpacity style={styles.buttonWrapper}>
                    <ActivityIndicator size={25} color={theme.WHITE_COLOR} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => this.handleSearch()}>
                    <Text style={styles.buttonWrapperText}>Get a jock</Text>
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

export default RandomJock;
