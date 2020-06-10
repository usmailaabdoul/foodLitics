import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  mainWrapper: {
    width: '100%',
    height: 57,
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        position: 'absolute',
        top: 0,
      },
      android: {},
    }),
  },
  iconContainer: {
    alignItems: 'center',
    fontWeight: '900',
  },
  iconName: {
    ...Platform.select({
      ios: {
        width: 25,
        height: 25,
      },
      android: {
        width: 25,
        height: 25,
      },
    }),
  },
  rightIcon: {
    borderTopLeftRadius: 99,
    borderBottomLeftRadius: 99,
  },
  leftIcon: {
    borderTopRightRadius: 99,
    borderBottomRightRadius: 99,
  },

};

export default styles;
