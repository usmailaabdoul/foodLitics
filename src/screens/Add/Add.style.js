import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  mainContainer: {
    flex: 1,
    // backgroundColor: theme.WHITE_COLOR,
  },
  bodyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.DARK_COLOR,
  },
  search: {
    height: 150,
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
};

export default styles;
