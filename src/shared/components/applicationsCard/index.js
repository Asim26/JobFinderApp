import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RF} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';
import AppSmallButton from '../appSmallButton';
import Button from '../button/button';

const ApplicationsCard = props => {
  let {id, companyName, jobTitle, location, jobStatus, jobBudget, onPress} =
    props;

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
          <Text style={styles.textdescription}>
            {companyName ? companyName : 'Company Name'}
          </Text>
          <Text style={styles.textHeading}>
            {jobTitle ? jobTitle : 'Job Title'}
          </Text>
          <Text style={styles.textdescription}>
            {location ? location : 'Location'}
          </Text>
        </View>
        <View style={styles.moreOptionsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={images.more}
              resizeMode="contain"
              style={{height: RF(15)}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingHorizontal: RF(18),
          // borderWidth: 2,
        }}>
        <View>
          <Button
            title={jobStatus ? jobStatus : 'pending'}
            width={'70%'}
            borderRadius={RF(10)}
            titleStyle={{
              color: colors.FACEBOOK_BTN_COLOR,
              fontSize: RF(13),
            }}
            bgColor={'#DFE8FF'}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: RF(18),
              color: colors.FACEBOOK_BTN_COLOR,
              fontWeight: '500',
            }}>
            ${jobBudget ? jobBudget : '0'} Monthly
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: RF(128),
    borderRadius: RF(6),
    // borderWidth: 2,
    // backgroundColor: 'green',
    width: RF(310),
    paddingHorizontal: RF(10),
    // paddingVertical: RF(4),
    marginTop: RF(4),
    marginBottom: RF(4),
    marginLeft: RF(2),
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
    // borderWidth:2,
    width: '22%',
    height: RF(50),
    paddingHorizontal: RF(10),
    justifyContent: 'center',
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
  moreOptionsContainer: {
    width: '18%',
    alignItems: 'flex-end',
  },
});

export default ApplicationsCard;
