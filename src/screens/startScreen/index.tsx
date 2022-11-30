import React from 'react';
import {View, Text, Image} from 'react-native';
import images from '../../assets/images/images';
import Wrapper from '../../shared/components/wrapper';
import {RF} from '../../shared/theme/responsive';
import Header from '../../shared/components/header/header';
import {navigate} from '../../shared/services/NavService';
import {Routes} from '../../shared/utils/routes';
import Button from '../../shared/components/button/button';
import styles from './styles';

const StartScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header leftIconPath={images.appLogo} />
        </View>
        <View style={styles.characterContainer}>
          <Image
            source={images.character}
            style={styles.characterImg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Find a Perfect Job Match</Text>
          <Text style={styles.textBody}>
            Finding your dream job is more easire and faster with JobHub
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Lets Get Started'}
            onPress={() => {
              navigate(Routes.LOGIN);
            }}
            width={'70%'}
            borderRadius={RF(10)}
            bgColor={'#4CA6A8'}
            iconPlace={'rightCenter'}
            // icon={images.arrowBack}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default StartScreen;
