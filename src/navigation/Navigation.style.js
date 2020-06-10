import {Platform} from 'react-native';
import theme from '../styles/theme';

const styles = {
  tabBar: {
    opacity: 0.98,
    justifyContent: 'space-between',
    borderRadius: 99,
    marginTop: 2,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',

    ...Platform.select({
      ios: {
        height: 25,
        marginHorizontal: 20,
        marginBottom: 25,
      },
      android: {
        marginHorizontal: 10,
        marginBottom: 15,
      },
    }),
  },

  legacyTab: {
    backgroundColor: theme.WHITE_COLOR,
    color: '#ccc',
    borderTopColor: '#E4E6EB',
    borderTopWidth: 1,
  },
};

export default styles;
