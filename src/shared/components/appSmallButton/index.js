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
    paddingHorizontal: RF(18),
    paddingVertical: RF(12),
    borderRadius: RF(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: RF(14),
    height: RF(20),
  },
});

export default AppSmallButton;
