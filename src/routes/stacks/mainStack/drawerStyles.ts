import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';

let styles = {
  drawerMainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
  },
  userInfoContainer: {
    width: '100%',
    height: '20%',
    paddingTop: RF(20),
    flexDirection: 'row',
  },
  userImageContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userProfileImage: {
    width: RF(23),
    height: RF(23),
    resizeMode: 'cover',
    borderRadius: RF(11.5),
  },
  userTextContainer: {
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: RF(5),
  },
  userNameText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  emailText: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 13,
  },
  drawerItemsContainer: {
    width: '100%',
    height: '70%',
    marginTop: 10,
  },
  drawerItemLabelText: {
    fontWeight: '500',
    fontSize: RF(13),
    color: colors.BLACK,
  },
  drawerItemImage: {
    width: 17,
    height: 17,
    tintColor: colors.BLACK,
    resizeMode: 'contain',
  },
  drawerItemStyles: {
    height: RF(15),
    // width:wp(100),
    marginVertical: RF(2),
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
  },
};
export default styles;
