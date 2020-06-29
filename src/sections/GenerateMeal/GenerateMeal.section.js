import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Image, Text, FlatList} from 'react-native';

import styles from './GenerateMeal.style';
import mealsApi from '../../apis/Meals.api';

class GenerateMeal extends Component {
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
    this.props.toggleDetailsModal(false);
  };

  async handleSearch() {
    this.setState({loading: true});

    try {
      var res = await mealsApi.generateMeal();

      this.setState({
        results: res.meals,
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
    const {loading, stage, results, nutrients} = this.state;

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
                  <Text style={styles.bodyText}>Generate a meal for today</Text>

                  {loading ? (
                    <TouchableOpacity style={styles.buttonWrapper}>
                      <Text style={styles.buttonWrapperText}>loading ...</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.buttonWrapper}
                      onPress={() => this.handleSearch()}>
                      <Text style={styles.buttonWrapperText}>Generate</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ) : null}

              {stage === 2 ? (
                <View>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20}}>
                    <Text style={styles.nutrients}>
                      Calories: {nutrients.calories},
                    </Text>
                    <Text style={styles.nutrients}>
                      Protein: {nutrients.protein},
                    </Text>
                    <Text style={styles.nutrients}>Fat: {nutrients.fat},</Text>
                    <Text style={styles.nutrients}>
                      Carbohydrates: {nutrients.carbohydrates}
                    </Text>
                  </View>
                  <FlatList
                    initialNumToRender={results.meals}
                    data={results}
                    renderItem={({item, index}) => <ResultCard res={item} />}
                    keyExtractor={(item) => item.id.toString()}
                  />
                </View>
              ) : null}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default GenerateMeal;

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
