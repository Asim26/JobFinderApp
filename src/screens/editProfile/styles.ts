import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {RF} from '../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RF(14),
    // borderWidth: 2,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(20),
    // borderWidth: 2,
  },

  profilePicContainer: {
    height: RF(120),
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2
  },
  profilePic: {
    width: RF(120),
    height: RF(120),
    borderRadius: RF(60),
    resizeMode: 'cover',
  },
  pickerContainer: {
    width: RF(35),
    height: RF(35),
    position: 'absolute',
    bottom: RF(5),
    right: RF(110),
    zIndex: 1,
  },
  editIcon: {
    width: RF(30),
    height: RF(30),
  },

  textContainer: {
    // borderWidth: 2,
    alignItems: 'center',
  },

  profilePic: {
    width: RF(100),
    height: RF(100),
    borderRadius: RF(50),
  },

  userNameText: {
    fontSize: RF(30),
    fontWeight: '800',
    color: colors.BLACK,
  },

  inputContainer: {
    height: RF(250),
    // borderWidth: 2,
    justifyContent: 'flex-end',
  },

  nameInputHeading: {marginBottom: RF(6)},
  emailInputHeading: {marginBottom: RF(6)},
  passwordInputHeading: {marginBottom: RF(6)},

  loginButtonContainer: {
    height: RF(70),
    // borderWidth: 2,
    justifyContent: 'flex-end',
  },
});

export default styles;
