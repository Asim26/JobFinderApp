import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    paddingHorizontal: RF(14),
  },
  orTextContainer: {
    marginVertical: RF(20),
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

    // fontFamily: FONTS.ProximaNova,
    // marginBottom:RF(15),
  },
});

export default styles;
