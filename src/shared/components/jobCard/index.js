import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {RF} from '../../../shared/theme/responsive';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';
import AppSmallButton from '../appSmallButton';

const JobCard = props => {
  let {companyName, companyLogo, jobTitle, budget, location} = props;

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.logoRowContainer}>
          <View>
            <AppSmallButton
              logo={images.google}
              bgColor={colors.GOOGLE_BTN_COLOR}
            />
          </View>
          <View style={styles.likeContainer}>
            <Image source={images.heart} style={styles.likeLogoStyle} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <Text style={styles.companyName}>
              {companyName ? companyName : 'company Name'}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.jobTitle}>
              {jobTitle ? jobTitle : 'Job Title'}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.budgetStyle}>{budget ? budget : 'budget'}</Text>
            <Text style={styles.locationStyle}>
              {location ? '  ' + location : 'location'}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: RF(175),
    // borderWidth: 2,
    backgroundColor: colors.WHITE,
    width: RF(290),
    borderRadius: RF(20),
    marginRight: RF(20),
    marginLeft: RF(2),
    marginVertical: RF(10),
    paddingHorizontal: RF(15),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  logoRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(10),
  },
  likeContainer: {
    justifyContent: 'center',
  },
  likeLogoStyle: {
    width: RF(22),
    height: RF(22),
    resizeMode: 'contain',
  },
  textContainer: {
    paddingVertical: RF(10),
  },
  row: {
    flexDirection: 'row',
  },
  companyName: {
    paddingBottom: RF(6),
  },
  jobTitle: {
    paddingBottom: RF(6),
    fontSize: RF(18),
    fontWeight: '800',
    color: colors.BLACK,
  },
  budgetStyle: {
    fontSize: RF(14),
    fontWeight: '800',
    color: colors.BLACK,
  },
  locationStyle: {
    fontSize: RF(14),
  },
});

export default JobCard;
