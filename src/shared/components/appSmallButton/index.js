import React from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  TouchableHighlight,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../theme/responsive';

const AppSmallButton = props => {
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
      <View style={{alignItems: 'center'}}>
        <Image source={props.logo} resizeMode="contain" style={styles.logo} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RF(18),
    paddingVertical: RF(12),
    borderRadius: RF(10),
  },
  logo: {
    width: RF(10),
    height: RF(18),
  },
});

export default AppSmallButton;
