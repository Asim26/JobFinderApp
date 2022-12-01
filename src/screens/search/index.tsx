import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';
import AppSmallButton from '../../shared/components/appSmallButton';
import Header from '../../shared/components/header/header';
import Input from '../../shared/components/input';
import JobCard from '../../shared/components/jobCard';
import RecentPostCard from '../../shared/components/recentPostCard';
import Wrapper from '../../shared/components/wrapper';
import {navigate, navigationRef} from '../../shared/services/NavService';
import {RF} from '../../shared/theme/responsive';
import {Routes} from '../../shared/utils/routes';
import Button from '../../shared/components/button/button';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Search = () => {
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobType: 'Full Time',
      budget: '$4500/m',
    },
    {
      id: 1,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobType: 'Full Time',
      budget: '$4500/m',
    },
    {
      id: 1,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobType: 'Full Time',
      budget: '$4500/m',
    },
    {
      id: 1,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobType: 'Full Time',
      budget: '$4500/m',
    },
  ]);

  const recentPostsItem = (item: any) => {
    return (
      <RecentPostCard
        id={item.id}
        companyName={item.companyName}
        jobTitle={item.jobTitle}
        jobType={item.jobType}
        budget={item.budget}
      />
    );
  };

  return (
    <Wrapper>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Header
              title={'Search'}
              leftIconPath={images.arrowBack}
              onLeftIconPress={() => {
                navigationRef.current.goBack();
              }}
            />
          </View>

          <View style={styles.secondRow}>
            <View style={styles.searchContainer}>
              <Input placeholder="UI Design" />
            </View>

            <View>
              <AppSmallButton
                bgColor={colors.APP_THEME}
                logo={images.settingsBtnLogo}
                onPress={() => {}}
              />
            </View>
          </View>

          <View style={styles.thirdRow}>
            <View>
              <Text style={styles.popularText}>35 Job Oppurtunities</Text>
            </View>
          </View>

          <View style={styles.mostRecentTextContainer}>
            <Button
              title={'Most Relevant'}
              width={'40%'}
              borderRadius={RF(10)}
            />
            <Text style={styles.mostRecentText}>Most Recent</Text>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentPosts}
            renderItem={({item}) => recentPostsItem(item)}
            // ListEmptyComponent={() =>{}}
          />
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Search;
