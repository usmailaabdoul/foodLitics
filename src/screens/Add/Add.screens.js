import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './Add.style';
import theme from './../../styles/theme';
import {Header} from './../../components';

import {
  Chat,
  Detect,
  GenerateMeal,
  QuickAnswers,
  RandomJock,
  SearchRecipe,
  SpecificIngredient,
} from '../../sections';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      cards: [
        {id: 1, title: 'Get the vitamin count'},
        {id: 2, title: 'Search a Recipe'},
        {id: 3, title: 'Quick Answers'},
        {id: 4, title: 'Generate a meal plan'},
        {id: 5, title: 'Search with an Image'},
        {id: 6, title: 'Get specific information about a specific ingredient'},
        {id: 7, title: 'Chat with a Bot'},
        {id: 8, title: 'Detect ingredients in text'},
        {id: 9, title: 'Get a random food jokes :)'},
      ],
      SearchRecipeModal: false,
      QuickAnswersModal: false,
      GenerateMealModal: false,
      SpecificIngredientModal: false,
      ChatModal: false,
      DetectModal: false,
      RandomJockModal: false,
    };
  }

  openRespectiveModal(id) {
    switch (id) {
      case 2:
        return this.setState({SearchRecipeModal: true});
      case 3:
        return this.setState({QuickAnswersModal: true});
      case 4:
        return this.setState({GenerateMealModal: true});
      case 6:
        return this.setState({SpecificIngredientModal: true});
      case 7:
        return this.setState({ChatModal: true});
      case 8:
        return this.setState({DetectModal: true});
      case 9:
        return this.setState({RandomJockModal: true});
    }
  }

  render() {
    const {
      cards,
      SearchRecipeModal,
      QuickAnswersModal,
      GenerateMealModal,
      SpecificIngredientModal,
      ChatModal,
      DetectModal,
      RandomJockModal,
    } = this.state;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header title="Perfom multiple tasks" />
        <Text style={styles.headerText}>Choose below</Text>
        <FlatList
          vertical
          numColumns={2}
          initialNumToRender={cards.length}
          style={{width: '100%', marginTop: 20}}
          data={cards}
          renderItem={({item, index}) => (
            <AddCards
              card={item}
              index={index}
              perfomAction={(id) => this.openRespectiveModal(id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <SearchRecipe
          showModal={SearchRecipeModal}
          toggleDetailsModal={() => this.setState({SearchRecipeModal: false})}
        />
        <QuickAnswers
          showModal={QuickAnswersModal}
          toggleDetailsModal={() => this.setState({QuickAnswersModal: false})}
        />
        <GenerateMeal
          showModal={GenerateMealModal}
          toggleDetailsModal={() => this.setState({GenerateMealModal: false})}
        />
        <SpecificIngredient
          showModal={SpecificIngredientModal}
          toggleDetailsModal={() =>
            this.setState({SpecificIngredientModal: false})
          }
        />
        <Chat
          showModal={ChatModal}
          toggleDetailsModal={() => this.setState({ChatModal: false})}
        />
        <Detect
          showModal={DetectModal}
          toggleDetailsModal={() => this.setState({DetectModal: false})}
        />
        <RandomJock
          showModal={RandomJockModal}
          toggleDetailsModal={() => this.setState({RandomJockModal: false})}
        />
      </SafeAreaView>
    );
  }
}

export default Add;

function moodSelection(card) {
  if (card.id == 1) {
    return '#6ECC64';
  }
  if (card.id == 2) {
    return '#F9B72F';
  }
  if (card.id == 3) {
    return '#7A6EFC';
  }
  if (card.id == 4) {
    return '#EB4135';
  }
  if (card.id == 5) {
    return '#BF991D';
  }
  if (card.id == 6) {
    return '#bf55ec';
  }
  if (card.id == 7) {
    return '#EB4135';
  }
  if (card.id == 8) {
    return '#BF991D';
  }
  if (card.id == 9) {
    return '#414245';
  }
}
const AddCards = (props) => {
  const {card, perfomAction} = props;
  return (
    <TouchableOpacity
      onPress={() => perfomAction(card.id)}
      style={[styles.mainCard, {backgroundColor: moodSelection(card)}]}>
      <Text style={styles.titleText}>{card.title}</Text>
    </TouchableOpacity>
  );
};
