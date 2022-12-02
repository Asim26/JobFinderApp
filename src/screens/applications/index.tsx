import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wrapper from '../../shared/components/wrapper';

const Applications = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text>Applications</Text>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default Applications;
