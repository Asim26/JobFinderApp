import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';
import {FONTS} from '../../../assets/fonts';
import {GST} from '../../../shared/theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(20),
    // borderWidth: 2,
  },

  contentContainer: {
    flex: 0.9,
    paddingHorizontal: RF(12),
  },
});

export default styles;
