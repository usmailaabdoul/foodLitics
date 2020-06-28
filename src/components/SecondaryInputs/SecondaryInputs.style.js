import {Platform} from 'react-native';
import theme from '../../styles/theme';

const styles = {
  container: {},
  initmainwrapperstyle: {
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  inputText: {
    height: 40,
    width: '100%',
    fontSize: theme.FONT_SIZE_MEDIUM,
    lineHeight: 18,
    fontStyle: 'normal',
    color: theme.DARK_COLOR,
    marginBottom: -10,

    ...Platform.select({
      android: {
        marginLeft: -5,
      },
    }),
  },
  lableText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.BORDER_LINE_COLOR + 'aa',
    marginHorizontal: 20,
  },
  textInputWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    marginHorizontal: 20,
    borderColor: '#cccccc90',
  },
  iconWrapper: {
    bottom: -7,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: theme.PRIMARY_COLOR,
  },
};

export default styles;
