import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';
import AppSmallButton from '../../../shared/components/appSmallButton';
import Input from '../../../shared/components/input';
import JobCard from '../../../shared/components/jobCard';
import RecentPostCard from '../../../shared/components/recentPostCard';
import Wrapper from '../../../shared/components/wrapper';
import {navigate} from '../../../shared/services/NavService';
import {RF} from '../../../shared/theme/responsive';
import {Routes} from '../../../shared/utils/routes';
import styles from './styles';

const Home = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      companyName: 'Google',
      companyLogo: 'abc',
      jobTitle: 'Lead Product Manager',
      budget: '$2500/month',
      location: 'Toronto, Canada',
    },
    {
      id: 2,
      companyName: 'Google',
      companyLogo: 'abc',
      jobTitle: 'Lead Product Manager',
      budget: '$2500/month',
      location: 'Toronto, Canada',
    },
  ]);

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
  ]);

  const jobItem = (item: any) => {
    return (
      <JobCard
        id={item.id}
        companyName={item.companyName}
        companyLogo={item.companyLogo}
        jobTitle={item.jobTitle}
        budget={item.budget}
        location={item.location}
      />
    );
  };

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
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <View>
            <AppSmallButton
              bgColor={colors.APP_THEME}
              logo={images.sideDrawerButton}
              onPress={() => {}}
            />
          </View>
          <View>
            <Image source={images.profilePic} style={styles.profilePic} />
          </View>
        </View>

        <View style={styles.secondRow}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              navigate(Routes.SEARCH);
            }}>
            <Text style={styles.searchButtonText}>Search here</Text>
          </TouchableOpacity>
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
            <Text style={styles.popularText}>Popular Job</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.showAllText}>Show All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobsContainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={jobs}
            renderItem={({item}) => jobItem(item)}
            // ListEmptyComponent={() =>{}}
          />
        </View>

        <View style={styles.thirdRow}>
          <View>
            <Text style={styles.popularText}>Recent Post</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.showAllText}>Show All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={recentPosts}
          renderItem={({item}) => recentPostsItem(item)}
          // ListEmptyComponent={() =>{}}
        />
      </View>
    </Wrapper>
  );
};

export default Home;
