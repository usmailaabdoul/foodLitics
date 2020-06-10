import {Platform} from 'react-native';
import theme from '../../styles/theme';

const styles = {
  container: {},
  initmainwrapperstyle: {
    marginTop: 15,
  },
  inputText: {
    height: 40,
    width: '90%',
    fontSize: 16,
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
    marginHorizontal: 30,
  },
  textInputWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    marginHorizontal: 30,
    borderColor: '#cccccc90',
  },
  iconWrapper: {
    bottom: -7,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: theme.PRIMARY_COLOR,
  },
};

export default styles;
