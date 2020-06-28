import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  container: {
    flex: 1,
  },
  bodyWrapper: {
    marginTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 99,
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: 99,
    alignSelf: 'center',
  },
  inputWrapper: {
    marginTop: 20,
  },
};

export default styles;
