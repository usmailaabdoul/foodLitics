import {Platform} from 'react-native';
import theme from './../../styles/theme';

const styles = {
  image: {
    width: 374,
    height: 300,
    borderRadius: 8,
  },
  foodCard: {
    borderRadius: 8,
    // alignItems: 'center',
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  likeButtonWrapper: {
    position: 'absolute',
    right: 10,
    backgroundColor: theme.WHITE_COLOR,
    padding: 5,
    marginTop: 15,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likedIcon: {
    width: 30,
    height: 30,
    tintColor: theme.PRIMARY_COLOR,
  },
  unLikedIcon: {
    width: 30,
    height: 30,
  },
  detailsCard: {
    backgroundColor: '#ffffffaf',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 10,
  },
  detailesCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailesCardHeaderText: {
    textAlign: 'center',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_NORMAL,
  },
  arrowIcon: {
    width: 25,
    height: 20,
    tintColor: theme.DARK_COLOR + 'ad',
  },
  detailsCardBodyText: {
    color: theme.TEXT_COLOR,
    marginBottom: 10,
  },
  detailsCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsCardLink: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_SMALL - 1,
    textDecorationLine: 'underline',
  },
  detailsCardLikes: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_SMALL - 1,
  },
};

export default styles;
