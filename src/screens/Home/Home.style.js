import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.WHITE_COLOR,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  headerText1: {
    fontSize: theme.FONT_SIZE_MEDIUM + 2,
  },
  headerText2: {
    fontSize: theme.FONT_SIZE_MEDIUM + 2,
    color: theme.PRIMARY_COLOR,
  },
  dateText: {
    color: theme.DARK_COLOR + '90',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },

  search: {
    height: 50,
    // width: '80%',
    paddingLeft: 15,
    fontSize: 16,
    fontStyle: 'normal',
    color: theme.Text_PRIMARY_COLOR,
    flex: 4,
  },
  searchWrapper: {
    marginVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    borderColor: theme.BORDER_RADIUS_COLOR,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  searchButtonWrapper: {
    backgroundColor: theme.PRIMARY_COLOR,
    // flex: 1,
    // padding: ,
    height: 50,
    width: 70,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIcon: {
    width: 25,
    height: 25,
    tintColor: theme.WHITE_COLOR,
  },
};

export default styles;
