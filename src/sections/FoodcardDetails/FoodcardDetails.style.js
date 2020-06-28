import theme from '../../styles/theme';

const styles = {
  modal: {
    // justifyContent: 'flex-end',
    margin: 0,
    marginHorizontal: 15,
    // flex: 1,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    maxHeight: '90%',
    paddingBottom: 10,
    // flex: 1,
  },
  coverImage: {
    width: 350,
    height: 300,
    borderRadius: 5,
  },
  mealTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TEXT_COLOR,
    textAlign: 'center',
    marginVertical: 15,
  },
  mealDescription: {
    fontSize: theme.FONT_SIZE_NORMAL,
    color: theme.TEXT_COLOR,
    marginVertical: 10,
  },
  mealTag: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.TEXT_COLOR,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  ingredientImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  ingredientText: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.DARK_COLOR,
  },

  closeButtonWrapper: {
    padding: 5,
    paddingVertical: 10,
    backgroundColor: '#cccccc40',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  closeButton: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  closeButtonImage: {
    width: 50,
    height: 30,
    tintColor: theme.RED_ERROR_COLOR,
  },
};

export default styles;
