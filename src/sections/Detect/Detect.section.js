import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  FlatList,
} from 'react-native';

import styles from './Detect.style';
import theme from '../../styles/theme';
import foodApi from '../../apis/Food.api';

class Detect extends Component {
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
      var res = await foodApi.detectIngredients(search);
      console.log(res);
      this.setState({
        // results: res.results,
        loading: false,
        // stage: 2,
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
            </View>

            {stage === 1 ? (
              <View style={styles.bodyWrapper}>
                <Text style={styles.bodyText}>Enter text to be detected</Text>

                <View style={styles.searchWrapper}>
                  <TextInput
                    selectTextOnFocus
                    placeholder="Enter text to be detected"
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
                    <Text style={styles.buttonWrapperText}>loading ...</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => this.handleSearch()}>
                    <Text style={styles.buttonWrapperText}>Submit</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}

            {stage === 2 ? (
              <View>
                <FlatList
                  initialNumToRender={results.length}
                  data={results}
                  renderItem={({item, index}) => <ResultCard res={item} />}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            ) : null}
          </View>
        </Modal>
      </View>
    );
  }
}

export default Detect;

const ResultCard = (props) => {
  const {res} = props;
  return (
    <View style={styles.resultCard}>
      <Text style={styles.resTitle}>{res.title}</Text>
      <Text style={styles.resTime}>
        Time to prepare meal: {res.readyInMinutes} minutes
      </Text>
      <Text style={styles.resLink}>check recipe at {res.sourceUrl}</Text>
    </View>
  );
};
