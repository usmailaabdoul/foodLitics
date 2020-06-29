import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    backgroundColor: theme.WHITE_COLOR,
    shadowColor: '#b9b9b9',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative',
    marginHorizontal: 20,
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.TEXT_COLOR,
    textAlign: 'center',
  },
  profileImageWrapper: {
    alignSelf: 'center',
    marginTop: 25,
    marginHorizontal: 30,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 99,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: theme.WHITE_COLOR,
  },
  imageWrapper: {
    borderRadius: 99,
  },
  cameraIcon: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignSelf: 'flex-start',
    borderRadius: 99,
    borderWidth: 2,
    borderColor: theme.WHITE_COLOR,
    padding: 10,
    shadowColor: theme.PRIMARY_COLOR,
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative',

    ...Platform.select({
      ios: {
        bottom: 60,
        left: 130,
      },
      android: {
        paddingHorizontal: 4,
        bottom: 35,
        left: 70,
      },
    }),
  },
  input: {
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 99,
    top: 30,
    justifyContent: 'center',
    alignSelf: 'center',

    shadowColor: '#b9b9b9',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative',
  },
  saveButtonText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
};

export default styles;
