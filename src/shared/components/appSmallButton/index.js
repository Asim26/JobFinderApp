import React from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../theme/responsive';

const AppSmallButton = props => {
  let marginLeft = props.marginLeft ? props.marginLeft : RF(0);
  let marginRight = props.marginRight ? props.marginRight : RF(0);
  let bgColor = props.bgColor ? props.bgColor : colors.BLACK;

  let {onPress} = props;

  return (
    <TouchableOpacity
      style={[
        {
          marginLeft: marginLeft,
          marginRight: marginRight,
          backgroundColor: bgColor,
        },
        styles.container,
      ]}
      onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <Image source={props.logo} resizeMode="contain" style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    width: RF(42),
    height: RF(42),
    borderRadius: RF(10),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: RF(22),
    // paddingVertical: RF(22),
    borderRadius: RF(11),
  },
  logo: {
    Width: RF(13),
    height: RF(13),
  },
});

export default AppSmallButton;
