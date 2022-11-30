import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    paddingHorizontal: RF(14),
  },

  headerContainer: {
    height: RF(60),
    // borderWidth: 2,
  },

  headingContainer: {
    height: RF(100),
    // borderWidth: 2,
    justifyContent: 'flex-end',
  },
  headingText: {
    fontSize: RF(30),
    fontWeight: '700',
  },
  bodyText: {
    fontSize: RF(15),
    width: RF(200),
  },

  inputContainer: {
    height: RF(180),
    // borderWidth: 2,
    justifyContent: 'flex-end',
  },

  forgetPasswordContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderWidth: 2,
  },

  loginButtonContainer: {
    height: RF(70),
    // borderWidth: 2,
    justifyContent: 'flex-end',
  },

  orTextContainer: {
    // borderWidth: 2,
    paddingVertical: RF(20),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // alignItems:"center",
    justifyContent: 'center',
  },
  line: {
    height: RF(1),
    width: '10%',
    backgroundColor: colors.LIGHT_GRAY,
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: RF(14),
    color: colors.BLACK,
  },

  socialContainer: {
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpTextContainer: {
    height: RF(60),
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpTextInnerContainer: {
    flexDirection: 'row',
  },
  createAccountText: {
    fontSize: RF(12),
    fontWeight: '600',
  },
});

export default styles;
