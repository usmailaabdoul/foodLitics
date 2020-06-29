import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './Foodcard.style';
import theme from './../../styles/theme';
import {FoodcardDetails} from '../../sections';

class Foodcard extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      showDetails: false,
    };
  }

  lastTap = null;
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      this.toggleLike();
    } else {
      this.lastTap = now;
    }
  };

  toggleLike = () => this.setState((state) => ({liked: !state.liked}));

  stripOffHtmlTags(post) {
    var re = /(<([^>]+)>)/gi;
    const changedPost = post.replace(re, '');
    return changedPost;
  }

  render() {
    const {liked, showDetails} = this.state;
    const {meal} = this.props;

    return (
      <View style={styles.foodCard}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.handleDoubleTap()}>
          <Image
            source={{
              uri: meal.image,
            }}
            style={styles.image}
          />
          <View style={styles.likeButtonWrapper}>
            {liked ? (
              <Image
                source={require('./../../../res/img/love_filled.png')}
                style={styles.likedIcon}
              />
            ) : (
              <Image
                source={require('./../../../res/img/love_unfilled.png')}
                style={styles.unLikedIcon}
              />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({showDetails: true})}
          activeOpacity={0.5}
          style={styles.detailsCard}>
          <View style={styles.detailesCardHeader}>
            <View style={{flex: 3}}>
              <Text style={styles.detailesCardHeaderText}>{meal.title}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.detailsCardBodyText}>
              {this.stripOffHtmlTags(meal.instructions).substr(0, 100)}
              {this.stripOffHtmlTags(meal.instructions).length > 100
                ? '...'
                : ''}
            </Text>
          </View>
          <View style={styles.detailsCardFooter}>
            <Text style={styles.detailsCardLink}>
              Check reciept and other details
            </Text>
            <Text style={styles.detailsCardLikes}>200 likes</Text>
          </View>
        </TouchableOpacity>

        <FoodcardDetails
          showDetails={showDetails}
          meal={meal}
          toggleDetailsModal={() => this.setState({showDetails: false})}
        />
      </View>
    );
  }
}

export default Foodcard;
