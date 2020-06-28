import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './Home.style';
import theme from './../../styles/theme';
import Moment from 'react-moment';
import deviceStorage from '../../utils/storage';
import mealsApi from '../../apis/Meals.api';
import {Foodcard} from '../../sections/';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      meals: {},
      loading: false,
      liked: false,
    };
  }

  componentDidMount() {
    this.getMeals();
  }

  async getMeals() {
    this.setState({loading: true});

    var meals = await deviceStorage.load({
      key: 'meals',
      autoSync: false,
      syncInBackground: false,
    });

    if (meals) {
      console.log('nothing here', meals);
      this.setState({meals, loading: false});
    } else {
      // var meals = await mealsApi.suggestedMeals();
      console.log('meals', meals.recipes);
      this.setState({meals: meals.recipes, loading: false});
      deviceStorage.storeInfo('meals', meals.recipes);
    }
  }

  render() {
    const {search, meals, loading} = this.state;
    console.log(meals);
    return (
      <SafeAreaView style={{flex: 1}}>
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

        {loading ? (
          <Text>loading ...</Text>
        ) : (
          <FlatList
            initialNumToRender={meals.length}
            data={meals}
            renderItem={({item, index}) => <Foodcard meal={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default Home;
