import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import images from '../../assets/images/images';
import Header from '../../shared/components/header/header';
import Wrapper from '../../shared/components/wrapper';
import {navigationRef} from '../../shared/services/NavService';
import ApplicationsCard from '../../shared/components/applicationsCard';
import styles from './styles';
import AppSmallButton from '../../shared/components/appSmallButton';
import colors from '../../assets/colors/colors';

const Applications = () => {
  const [applications, serApplications] = useState([
    {
      id: 1,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobLocation: 'Lahore',
      jobstatus: 'Confimed',
      jobBudget: '4000',
    },
    {
      id: 2,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobLocation: 'Lahore',
      jobstatus: 'Confimed',
      jobBudget: '4000',
    },
    {
      id: 3,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobLocation: 'Lahore',
      jobstatus: 'Confimed',
      jobBudget: '4000',
    },
    {
      id: 4,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobLocation: 'Lahore',
      jobstatus: 'Confimed',
      jobBudget: '4000',
    },
    {
      id: 5,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobLocation: 'Lahore',
      jobstatus: 'Confimed',
      jobBudget: '4000',
    },
    {
      id: 6,
      companyName: 'Google',
      jobTitle: 'UI / UX Designer',
      jobLocation: 'Lahore',
      jobstatus: 'Confimed',
      jobBudget: '2000',
    },
  ]);

  const applicationCardItem = (item: any) => {
    return (
      <ApplicationsCard
        id={item.id}
        companyName={item.companyName}
        jobTitle={item.jobTitle}
        location={item.jobLocation}
        jobStatus={item.jobStatus}
        jobBudget={item.jobBudget}
      />
    );
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <Header
            title={'Applications'}
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef.current.goBack();
            }}
          />
        </View>
        <View style={styles.secondRow}>
          <View>
            <Text style={styles.headingText}>35 Job Oppurtunities</Text>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={applications}
          renderItem={({item}) => applicationCardItem(item)}
          // ListEmptyComponent={() =>{}}
        />
      </View>
    </Wrapper>
  );
};

export default Applications;
