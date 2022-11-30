import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RF} from '../../theme/responsive';

const AppButton = (props: any) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: props.width,
          borderRadius: props.borderRadius,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
        },
        styles.container,
      ]}
      onPress={props.onPress}>
      <Text style={{color: 'white'}}>{props.title}</Text>
      {/* {props.icon && <Image source={props.icon} style={{height:RF(40),width:RF(40)}}/>} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CA6A8',
    // width: '70%',
    // borderRadius: RF(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RF(15),
  },
});

export default AppButton;
