import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './Home.style';
import theme from './../../styles/theme';
import Moment from 'react-moment';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  render() {
    const {search} = this.state;
    return (
      <SafeAreaView>
        <View>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText1}>
              food <Text style={styles.headerText2}>Litics</Text>
            </Text>
            <View>
              <Moment
                element={Text}
                style={styles.dateText}
                format="dddd, MMM DD"
              />
            </View>
          </View>
          <View style={styles.searchWrapper}>
            <TextInput
              selectTextOnFocus
              placeholder="Search for meals ..."
              placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
              autoCorrect={false} // to stop auto correction on email field
              style={styles.search}
              value={search}
              onChangeText={(text) => this.setState({search: text})}
            />
            <TouchableOpacity style={styles.searchButtonWrapper}>
              <Image
                source={require('./../../../res/img/search.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.foodCard}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={require('./../../../res/img/img2.png')}
              style={styles.image}
            />
            <View style={styles.likeButtonWrapper}>
              <Image
                source={require('./../../../res/img/love_filled.png')}
                style={styles.likedIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.detailsCard}>
            <View style={styles.detailesCardHeader}>
              <View style={{flex: 3}}>
                <Text style={styles.detailesCardHeaderText}>
                  Nigerian Jollof Rice Nigerian Jollof Rice
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Image
                  source={require('./../../../res/img/point-to.png')}
                  style={styles.arrowIcon}
                />
              </View>
            </View>
            <View>
              <Text style={styles.detailsCardBodyText}>
                It is a long established fact that a reader will be distracted
                by the readable content ...
              </Text>
            </View>
            <View style={styles.detailsCardFooter}>
              <Text style={styles.detailsCardLink}>
                Check reciept and callories
              </Text>
              <Text style={styles.detailsCardLikes}>200 likes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
