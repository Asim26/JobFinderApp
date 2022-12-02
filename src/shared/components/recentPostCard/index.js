import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RF} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';
import AppSmallButton from '../appSmallButton';

const RecentPostCard = props => {
  const {id, companyName, jobTitle, jobType, budget} = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.logoContainer}>
          <AppSmallButton
            logo={images.google}
            bgColor={colors.GOOGLE_BTN_COLOR}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>
            {jobTitle ? jobTitle : 'jobTitle'}
          </Text>
          <Text style={styles.textdescription}>
            {jobType ? jobType : 'jobType'}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>{budget ? budget : 'budget'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: RF(80),
    borderRadius: RF(6),
    // borderWidth: 2,
    // backgroundColor: 'green',
    width: RF(310),
    paddingHorizontal: RF(10),
    marginBottom: RF(10),
    justifyContent: 'center',

    backgroundColor: colors.WHITE,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  logoContainer: {
    width: '20%',
    paddingHorizontal: RF(10),
  },
  textContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  textHeading: {
    fontSize: RF(16),
    fontWeight: '800',
    color: colors.BLACK,
  },
  textdescription: {},
  priceContainer: {
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default RecentPostCard;
