import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import images from '../../../assets/images/images';
import {RF} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
import {FONTS} from '../../../assets/fonts';

const RadioButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.itemStyles}>
        <Image source={props.radioIcon} style={styles.imageStyles} />
      </View>
      <View style={styles.itemStyles}>
        <Text style={styles.textSyles}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RadioButton;

const styles = StyleSheet.create({
  container: {
    height: RF(30),
    width: RF(150),
    flexDirection: 'row',
    marginVertical: RF(5),
    // borderWidth: 1,
    alignItems: 'center',
  },
  imageStyles: {
    height: RF(20),
    width: RF(20),
    resizeMode: 'contain',
    tintColor: colors.LIGHT_GRAY,
  },
  textSyles: {
    fontSize: RF(14),
    fontFamily: FONTS.ProximaNova,
    fontWeight: '600',
    color: colors.COBALT,
  },
  itemStyles: {
    marginRight: RF(10),
  },
});
