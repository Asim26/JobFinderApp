import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FONTS} from '../../../assets/fonts';
import {RF} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';

interface OnBoardingProps {
  img: any;
  title: string;
  description: string;
}
const OnBoardingComponent = (props: OnBoardingProps) => {
  return (
    <View style={styles.swiperContentContainer}>
      <Image source={props.img} style={styles.image} />
      <Text style={styles.textHeading}>{props.title}</Text>
      <Text style={styles.textBody}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContentContainer: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: RF(20),
    alignItems: 'center',
    marginHorizontal: 34,
  },
  textHeading: {
    marginTop: RF(20),
    marginBottom: RF(20),
    fontSize: RF(20),
    fontWeight: '600',
    fontFamily: FONTS.MilliardMedium,
    color: colors.APP_THEME,
  },
  image: {
    marginBottom: RF(10),
    width: RF(210),
    height: RF(215),
  },
  textBody: {
    fontSize: RF(12),
    fontFamily: FONTS.ProximaNova,
    color: colors.ONBOARDING_TEXT_COLOR,
    textAlign: 'center',
  },
});

export default OnBoardingComponent;
