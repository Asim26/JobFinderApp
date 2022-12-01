import {StyleSheet} from 'react-native';
import {RF} from '../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
  },
  headerContainer: {
    flex: 0.08,
    paddingHorizontal: RF(20),
  },
  characterContainer: {
    flex: 0.55,
  },
  characterImg: {
    width: RF(350),
    height: RF(375),
  },
  textContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    fontSize: RF(30),
    fontWeight: '800',
    width: RF(200),
    textAlign: 'center',
  },
  textBody: {
    width: RF(250),
    textAlign: 'center',
  },
  btnContainer: {
    flex: 0.17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
