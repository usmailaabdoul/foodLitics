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

  bodyWrapper: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bodyText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.DARK_COLOR,
  },
  search: {
    height: 90,
    width: '100%',
    paddingLeft: 15,
    fontSize: 16,
    fontStyle: 'italic',
  },
  searchWrapper: {
    marginVertical: 30,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonWrapperText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },

  resultCard: {
    borderRadius: 3,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: theme.WHITE_COLOR,
    shadowColor: '#b9b9b9',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative',
  },
  resTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    textAlign: 'center',
    paddingVertical: 5,
  },
  resTime: {
    fontSize: theme.FONT_SIZE_NORMAL,
    paddingVertical: 5,
  },
  resLink: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
};

export default styles;
