import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {RF} from '../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    paddingHorizontal: RF(14),
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(20),
    // borderWidth: 2,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(10),
    // borderWidth: 2,
  },
  headingText: {
    fontSize: RF(20),
    fontWeight: '700',
    color: colors.BLACK,
  },
});

export default styles;
