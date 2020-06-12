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
  image: {
    width: 374,
    // height: 350,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  searchIcon: {
    width: 25,
    height: 25,
    tintColor: theme.WHITE_COLOR,
  },
  foodCard: {
    borderRadius: 8,
    // alignItems: 'center',
    backgroundColor: '#ccc',
    marginHorizontal: 20,
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
  detailsCard: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  detailesCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailesCardHeaderText: {
    textAlign: 'center',
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
