import React from 'react';
import {StyleSheet, Image, Pressable, TouchableHighlight} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../theme/responsive';

const SocialButton = props => {
  let marginLeft = props.marginLeft ? props.marginLeft : RF(0);
  let marginRight = props.marginRight ? props.marginRight : RF(0);
  let bgColor = props.bgColor ? props.bgColor : colors.BLACK;
  let {onPress} = props;

  return (
    <TouchableHighlight
      style={[
        {
          marginLeft: marginLeft,
          marginRight: marginRight,
          backgroundColor: bgColor,
        },
        styles.container,
      ]}
      onPress={onPress}>
      <Image source={props.logo} resizeMode="contain" style={styles.logo} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RF(20),
    paddingVertical: RF(17),
    borderRadius: RF(20),
  },
  logo: {
    width: RF(22),
    height: RF(30),
  },
});

export default SocialButton;
