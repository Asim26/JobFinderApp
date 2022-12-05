import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {RF} from '../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(20),
    // borderWidth: 2,
  },
  inputContainer: {
    height: RF(600),
    // borderWidth: 2,
    justifyContent: 'flex-start',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    height: RF(80),
    // borderWidth: 2,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    height: RF(80),
    // borderWidth: 2,
  },
  thirdRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    // height: RF(100),
    // borderWidth: 2,
  },
  fourthRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    // borderWidth: 2,
    height: RF(150),
  },
  fifthRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    height: RF(100),
    // borderWidth: 2,
  },
  btnRow: {
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
  },
});
export default styles;
