import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import images from '../../assets/images/images';
import Header from '../../shared/components/header/header';
import Wrapper from '../../shared/components/wrapper';
import { navigationRef } from '../../shared/services/NavService';
import { RF } from '../../shared/theme/responsive';

const JobApplyScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <Header
            title={'Job Apply'}
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef.current.goBack();
            }}
          />
        </View>
        <View style={{}}>
        
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(20),
    // borderWidth: 2,
  },
});

export default JobApplyScreen;
