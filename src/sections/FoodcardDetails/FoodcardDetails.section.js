import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';

import styles from './FoodcardDetails.style';
import theme from '../../styles/theme';

class FoodcardDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  closeModal = () => {
    this.setState({stage: 1});
    this.props.toggleDetailsModal(false);
  };

  stripOffHtmlTags(post) {
    var re = /(<([^>]+)>)/gi;
    const changedPost = post.replace(re, '');
    return changedPost;
  }

  render() {
    const {showDetails, meal} = this.props;
    // console.log(meal);

    return (
      <View>
        <Modal
          isVisible={showDetails}
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

            <ScrollView style={{padding: 15, marginBottom: 5}}>
              <View>
                <Image source={{uri: meal.image}} style={styles.coverImage} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text style={styles.mealTitle}>{meal.title}</Text>
                </View>

                <View style={{flex: 1}}>
                  <Text style={styles.mealDescription}>{meal.diets}</Text>
                </View>
              </View>

              <Text style={styles.mealDescription}>
                health score: {meal.healthScore}
              </Text>

              <Text style={styles.mealTag}>Description</Text>
              <Text style={styles.mealDescription}>
                {this.stripOffHtmlTags(meal.instructions)}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text style={styles.mealTag}>Ingredients</Text>
                </View>

                <View style={{flex: 1}}>
                  <Text style={styles.mealTag}>Consistency</Text>
                </View>
              </View>
              {meal.extendedIngredients.map((item, key) => {
                return (
                  <View
                    key={key}
                    style={{flexDirection: 'row', paddingVertical: 5}}>
                    <View style={{flex: 2}}>
                      <Text style={styles.ingredientText}>
                        - {item.original}
                      </Text>
                    </View>

                    <View style={{flex: 1}}>
                      <Text style={styles.ingredientText}>
                        {item.consistency}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <Text style={styles.mealDescription}>
                {meal.license} credits to {meal.creditsText}
              </Text>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

export default FoodcardDetails;
