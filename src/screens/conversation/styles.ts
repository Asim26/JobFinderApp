import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {RF} from '../../shared/theme/responsive';
import {GST} from '../../shared/theme/globalStyles';
import {FONTS} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: RF(10),
    backgroundColor: colors.WHITE,
    ...GST.shadowProp,
  },
  contentContainer: {
    flex: 0.9,
    paddingTop: RF(20),
  },
  inputContainer: {
    width: '100%',
    height: RF(70),
    justifyContent: 'center',
  },
  headerIconStyle: {
    height: RF(20),
    width: RF(20),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
  headerTextStyle: {
    // fontFamily: FONTS.MilliardMedium,
    fontSize: RF(15),
    color: colors.APP_THEME,
  },

  icon: {
    height: RF(20),
    width: RF(20),
    marginTop: RF(-31),
  },

  middleIcon: {
    // marginHorizontal: RF(10),
    marginLeft: RF(10),
  },
});

export default styles;
