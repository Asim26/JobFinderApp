import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';

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

  textContainer: {
    // borderWidth: 2,
    alignItems: 'center',
    paddingVertical: RF(10),
  },

  profilePic: {
    width: RF(100),
    height: RF(100),
    borderRadius: RF(50),
    marginBottom: RF(10),
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
