import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
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
      refreshing: false,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.getMeals();
  }

  async getMeals() {
    this.setState({loading: true});

    var meals = await mealsApi.suggestedMeals();
    console.log('meals', meals.recipes);
    this.setState({meals: meals.recipes, loading: false});
    this.arrayholder = meals.recipes;
  }

  async handleRefresh() {
    this.setState({
      refreshing: true,
    });

    try {
      var meals = await mealsApi.suggestedMeals();
      this.setState({meals: meals.recipes, refreshing: false});
    } catch (e) {
      alert('Unable to get meaks');
      console.log(e);
    }
    this.setState({
      refreshing: false,
    });
  }

  searchMeals(text) {
    this.setState({search: text});

    const newMeals = this.arrayholder.filter((item) => {
      const itemData = `${item.title.toLowerCase()}`;
      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      meals: newMeals,
    });
  }
  render() {
    const {search, meals, loading, refreshing} = this.state;
    
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
              onChangeText={(text) => {
                this.setState({search: text});
                this.searchMeals(text);
              }}
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
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={25} color={theme.PRIMARY_COLOR} />
          </View>
        ) : (
          <FlatList
            initialNumToRender={meals.length}
            data={meals}
            renderItem={({item, index}) => <Foodcard meal={item} />}
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => this.handleRefresh()}
            refreshing={refreshing}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default Home;
