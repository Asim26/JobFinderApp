import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SocialButton from '../socialButton';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';

const CompanyLogo = props => {
  let {company} = props;
  //   let company = 'facebook';

  return (
    <View style={styles.container}>
      {company == 'google' && (
        <>
          <SocialButton
            logo={images.google}
            bgColor={colors.GOOGLE_BTN_COLOR}
          />
        </>
      )}
      {company == 'facebook' && (
        <>
          <SocialButton
            logo={images.facebook}
            bgColor={colors.FACEBOOK_BTN_COLOR}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '17%',
    // height: '16%',
  },
});

export default CompanyLogo;
