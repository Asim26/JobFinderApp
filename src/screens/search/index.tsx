import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';
import AppSmallButton from '../../shared/components/appSmallButton';
import Header from '../../shared/components/header/header';
import Input from '../../shared/components/input';
import RecentPostCard from '../../shared/components/recentPostCard';
import Wrapper from '../../shared/components/wrapper';
import {navigate, navigationRef} from '../../shared/services/NavService';
import {hp, RF} from '../../shared/theme/responsive';
import Button from '../../shared/components/button/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import RBSheet from 'react-native-raw-bottom-sheet';
import SocialButton from '../../shared/components/socialButton';
import {SelectList} from 'react-native-dropdown-select-list';
import styles from './styles';
import {Routes} from '../../shared/utils/routes';

const Search = () => {
  const filterSheetRef = useRef<any>();
  const jobDetailSheetRef = useRef<any>();

  const openFilterBottomSheet = () => {
    filterSheetRef.current.open();
  };

  const closeFilterBottomSheet = () => {
    filterSheetRef.current.close();
  };

  const openJobDetailBottomSheet = () => {
    jobDetailSheetRef.current.open();
  };

  const closeJobDetailBottomSheet = () => {
    jobDetailSheetRef.current.close();
  };

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

  const [qualifications, setQualifications] = useState([
    {
      id: 1,
      title: 'Exceptional communication skills and team working skill',
    },
    {
      id: 2,
      title: 'Exceptional communication skills and team working skill',
    },
    {
      id: 3,
      title: 'Exceptional communication skills and team working skill',
    },
    {
      id: 3,
      title: 'Exceptional communication skills and team working skill',
    },
    {
      id: 3,
      title: 'Exceptional communication skills and team working skill',
    },
    {
      id: 3,
      title: 'Exceptional communication skills and team working skill',
    },
    {
      id: 3,
      title: 'Exceptional communication skills and team working skill',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const categoriesOptions = [
    {key: '1', value: 'UI/UX Designer'},
    {key: '2', value: 'Web developer'},
    {key: '3', value: 'Content Writer'},
    {key: '4', value: 'Business developer'},
    {key: '5', value: 'Js Developer'},
  ];

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

  const renderFilterSheetContent = () => {
    return (
      <>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View style={{flex: 0.6, marginHorizontal: RF(10)}}>
              <View
                style={{borderRadius: RF(40), backgroundColor: colors.WHITE}}>
                <View
                  style={{
                    height: RF(550),
                    borderBottomWidth: RF(0.5),
                    borderBottomColor: colors.LIGHT_GRAY,
                    marginTop: RF(40),
                    paddingBottom: RF(140),
                    paddingHorizontal: RF(20),
                  }}>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      paddingVertical: RF(10),
                      // borderWidth: 2,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: RF(16),
                        fontWeight: '700',
                        color: colors.BLACK,
                      }}>
                      {'Set Filters'}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      // borderWidth: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: RF(16),
                        fontWeight: '700',
                        color: colors.BLACK,
                        marginBottom: RF(2),
                      }}>
                      {'Category'}
                    </Text>
                    <SelectList
                      setSelected={(val: any) => setSelectedCategory(val)}
                      data={categoriesOptions}
                      save="value"
                      placeholder="Choose Category"
                      searchPlaceholder="Pick one"
                      boxStyles={{
                        marginTop: RF(10),
                        marginBottom: RF(10),
                      }}
                      dropdownStyles={{
                        marginBottom: RF(10),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      // borderWidth: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: RF(16),
                        fontWeight: '700',
                        color: colors.BLACK,
                        marginBottom: RF(2),
                      }}>
                      {'Sub Category'}
                    </Text>
                    <Input placeholder="Graphic Design" />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        // borderWidth: 2,
                        width: '48%',
                      }}>
                      <Text
                        style={{
                          fontSize: RF(16),
                          fontWeight: '700',
                          color: colors.BLACK,
                          marginBottom: RF(2),
                        }}>
                        {'Location'}
                      </Text>
                      <Input placeholder="Canada" />
                    </View>
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        // borderWidth: 2,
                        width: '48%',
                      }}>
                      <Text
                        style={{
                          fontSize: RF(16),
                          fontWeight: '700',
                          color: colors.BLACK,
                          marginBottom: RF(2),
                        }}>
                        {'Salary'}
                      </Text>
                      <Input placeholder="$5K" />
                    </View>
                  </View>

                  <View
                    style={{
                      justifyContent: 'flex-start',
                      // borderWidth: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: RF(16),
                        fontWeight: '700',
                        color: colors.BLACK,
                        marginBottom: RF(2),
                      }}>
                      {'Job Type'}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Button
                        title={'Full Time'}
                        width={'33%'}
                        borderRadius={RF(10)}
                      />
                      <Button
                        title={'Part Time'}
                        width={'34%'}
                        borderRadius={RF(10)}
                      />
                      <Button
                        title={'Contract'}
                        width={'33%'}
                        borderRadius={RF(10)}
                      />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Button
                        title={'Freelance'}
                        width={'33%'}
                        borderRadius={RF(10)}
                      />
                      <Button
                        title={'Remote'}
                        width={'34%'}
                        borderRadius={RF(10)}
                      />
                      <Button
                        title={'All Types'}
                        width={'33%'}
                        borderRadius={RF(10)}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      justifyContent: 'flex-start',
                      // borderWidth: 2,
                      paddingVertical: RF(10),
                    }}>
                    <Button
                      title={'Apply Filters'}
                      borderRadius={RF(10)}
                      onPress={() => {
                        openJobDetailBottomSheet();
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </>
    );
  };

  const renderJobDetailSheetContent = () => {
    return (
      <>
        <View style={{flex: 1}}>
          <View style={{flex: 0.6, marginHorizontal: RF(10)}}>
            <View style={{borderRadius: RF(40), backgroundColor: colors.WHITE}}>
              <View
                style={{
                  height: RF(550),
                  borderBottomWidth: RF(0.5),
                  borderBottomColor: colors.LIGHT_GRAY,
                  marginTop: RF(40),
                  paddingBottom: RF(140),
                  paddingHorizontal: RF(20),
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    // borderWidth: 2,
                  }}>
                  <SocialButton
                    logo={images.google}
                    bgColor={colors.GOOGLE_BTN_COLOR}
                  />
                </View>

                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingVertical: RF(10),
                    // borderWidth: 2,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: RF(16),
                      fontWeight: '700',
                      color: colors.BLACK,
                    }}>
                    {'UI Design Lead'}
                  </Text>
                </View>

                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingVertical: RF(5),
                    // borderWidth: 2,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RF(13),
                        color: colors.BLACK,
                      }}>
                      {'Google '}
                    </Text>
                    <View
                      style={{
                        height: RF(2),
                        width: '8%',
                        backgroundColor: colors.BLACK,
                        justifyContent: 'center',
                        marginHorizontal: RF(4),
                      }}></View>
                    <Text
                      style={{
                        fontSize: RF(13),
                        color: colors.BLACK,
                      }}>
                      {'Toronto Canada'}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: 'space-between',
                    paddingVertical: RF(5),
                    // borderWidth: 2,
                    flexDirection: 'row',
                    paddingHorizontal: RF(40),
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: RF(13),
                        color: colors.BLACK,
                        textAlign: 'center',
                      }}>
                      {'Full Time'}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RF(13),
                        color: colors.BLACK,
                      }}>
                      {'$1200/m'}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingVertical: RF(5),
                    // borderWidth: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Button
                    title={'Description'}
                    width={'40%'}
                    borderRadius={RF(10)}
                  />
                  <Text
                    style={{textAlign: 'center', paddingHorizontal: RF(15)}}>
                    Company
                  </Text>
                  <Text
                    style={{textAlign: 'center', paddingHorizontal: RF(20)}}>
                    Reviews
                  </Text>
                </View>

                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingVertical: RF(10),
                    // borderWidth: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: RF(18),
                      fontWeight: '700',
                      color: colors.BLACK,
                      marginBottom: RF(8),
                    }}>
                    {'Qualifications:'}
                  </Text>

                  <View style={{height: RF(120)}}>
                    <FlatList
                      data={qualifications}
                      renderItem={({item}) => {
                        return (
                          <View style={{marginBottom: 10}}>
                            <Text
                              style={{
                                fontSize: 16,
                              }}>{`\u2022 ${item.title}`}</Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: 'space-between',
                    // borderWidth: 2,
                    flexDirection: 'row',
                  }}>
                  <Button
                    title={'Apply Now'}
                    borderRadius={RF(10)}
                    width={'75%'}
                    height={RF(40)}
                    onPress={() => {
                      navigate(Routes.JOB_APPLY_SCREEN);
                    }}
                  />
                  <AppSmallButton
                    logo={images.chat}
                    bgColor={colors.APP_THEME}
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
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
            <View style={{width: '80%'}}>
              <Input placeholder="UI Design" containerStyle={{}} />
            </View>

            <AppSmallButton
              bgColor={colors.APP_THEME}
              logo={images.settingsBtnLogo}
              onPress={() => {
                openFilterBottomSheet();
              }}
            />
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

          <RBSheet
            ref={filterSheetRef}
            // height={hp(20)}
            openDuration={250}
            customStyles={{
              container: {
                height: hp(70),
                width: '100%',
                borderTopLeftRadius: RF(15),
                borderTopRightRadius: RF(15),
                backgroundColor: 'transparent',
                // ...GST.shadowProp
              },
            }}>
            {renderFilterSheetContent()}
          </RBSheet>

          <RBSheet
            ref={jobDetailSheetRef}
            // height={hp(20)}
            openDuration={250}
            customStyles={{
              container: {
                height: hp(70),
                width: '100%',
                borderTopLeftRadius: RF(15),
                borderTopRightRadius: RF(15),
                backgroundColor: 'transparent',
                // ...GST.shadowProp
              },
            }}>
            {renderJobDetailSheetContent()}
          </RBSheet>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Search;
