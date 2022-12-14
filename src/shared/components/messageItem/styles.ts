import {StyleSheet} from 'react-native';
import {RF, wp} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
import {FONTS} from '../../../assets/fonts';

const styles = StyleSheet.create({
  profileContainer: {
    height: RF(50),
    flexDirection: 'row',
    marginVertical: RF(5),
    // borderWidth:1
  },
  profileStyles: {
    height: RF(40),
    width: RF(40),
    resizeMode: 'cover',
    borderRadius: RF(20),
  },
  profileIconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    // alignItems:'center',
  },
  profileDetailsContainer: {
    flex: 0.65,
    // paddingLeft: RF(2),
    justifyContent: 'center',
    paddingTop: RF(8),
  },
  timeContainer: {
    flex: 0.18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  onlineIcon: {
    height: RF(10),
    width: RF(10),
    borderRadius: RF(5),
    marginTop: RF(5),
    backgroundColor: colors.APP_THEME,
  },
});

export default styles;
