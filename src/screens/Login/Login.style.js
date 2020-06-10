import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.WHITE_COLOR,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextWrapper: {
    flex: 2.5,
    justifyContent: 'flex-end',
  },
  headerText1: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 4,
  },
  headerText2: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 4,
    color: theme.PRIMARY_COLOR,
  },
  bodyWrapper: {
    flex: 2.5,
  },
  loginCard: {
    //   borderWidth: 1,
    backgroundColor: '#E0E0E050',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 8,
    position: 'relative',
  },
  loginGreetingsText: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE,
    color: theme.PRIMARY_COLOR,
  },
  text: {
    fontSize: theme.FONT_SIZE_NORMAL,
  },
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 99,
  },
  buttonWrapperText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  footerText1: {
    fontSize: theme.FONT_SIZE_SMALL - 2,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  footerText2: {
    color: theme.PRIMARY_COLOR,
  },
};

export default styles;
