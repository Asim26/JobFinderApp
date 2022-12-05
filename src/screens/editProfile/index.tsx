import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import images from '../../assets/images/images';
import Button from '../../shared/components/button/button';
import Header from '../../shared/components/header/header';
import Input from '../../shared/components/input';
import Wrapper from '../../shared/components/wrapper';
import {navigationRef} from '../../shared/services/NavService';
import {hp, RF} from '../../shared/theme/responsive';
import {UpdateProfile} from '../../shared/utils/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../assets/colors/colors';
import styles from './styles';
import {openCamera, openGallery} from '../../shared/services/HelperService';
import RNFetchBlob from 'rn-fetch-blob';

const EditProfile = () => {
  const initialValues = {
    name: 'asim',
    email: 'asim@gmail.com',
    password: '12345678',
  };

  const submitHandler = (values: any) => {};
  const formikRef = useRef();

  const email: any = useRef();
  const password: any = useRef();

  const sheetRef: any = useRef();

  const openBottomSheet = () => {
    sheetRef.current.open();
  };

  const closeBottomSheet = () => {
    sheetRef.current.close();
  };

  const [profilePic, setProfilePic] = useState('');
  const [image, setImage] = useState('');

  const launchCamera = () => {
    openCamera(false, (response: any) => {
      closeBottomSheet();
      if (response) {
        let uri = response.assets[0];
        const path =
          Platform.OS === 'ios' ? uri.uri.replace('file:///', '') : uri.uri;
        let imageData = {
          name: uri.fileName,
          filename: uri.fileName,
          type: uri.type,
          data: RNFetchBlob.wrap(decodeURIComponent(path)),
        };
        setImage(imageData);
        setProfilePic(uri.uri);
      }
    });
  };

  const launchGallery = () => {
    openGallery(false, (response: any) => {
      console.log('response ====gallery=>>>>', response);
      closeBottomSheet();
      if (response) {
        let uri = response.assets[0];
        const path =
          Platform.OS === 'ios' ? uri.uri.replace('file:///', '') : uri.uri;
        let imageData: any = {
          name: uri.fileName,
          filename: uri.fileName,
          type: uri.type,
          data: RNFetchBlob.wrap(decodeURIComponent(path)),
        };
        setImage(imageData);
        setProfilePic(uri.uri);
      }
    });
  };
  const renderContent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 0.6, marginHorizontal: RF(10)}}>
          <View style={{borderRadius: RF(10), backgroundColor: colors.WHITE}}>
            <View
              style={{
                height: RF(45),
                justifyContent: 'center',
                // alignItems: 'center',
                borderBottomWidth: RF(0.5),
                borderBottomColor: colors.LIGHT_GRAY,
              }}>
              <TouchableOpacity
                onPress={() => {
                  launchCamera();
                }}
                style={{
                  height: RF(30),
                  width: '100%',
                  paddingLeft: RF(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 0.1,
                    // borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.camera}
                    style={{
                      height: RF(15),
                      width: RF(15),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={{
                      fontSize: RF(12),
                      color: colors.APP_THEME,
                      // fontFamily: FONTS.Milliard,
                    }}>
                    {'Camera'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: RF(45),
                justifyContent: 'center',
                // alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  launchGallery();
                }}
                style={{
                  height: RF(30),
                  width: '100%',
                  paddingLeft: RF(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 0.1,
                    // borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.gallery}
                    style={{
                      height: RF(15),
                      width: RF(15),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: RF(12),
                      color: colors.APP_THEME,
                      // fontFamily: FONTS.Milliard,
                    }}>
                    {'Select from gallery'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 0.4, marginHorizontal: RF(10)}}>
          <TouchableOpacity
            onPress={() => {
              closeBottomSheet();
            }}
            style={{
              height: RF(45),
              backgroundColor: colors.WHITE,
              borderRadius: RF(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: RF(12),
                color: colors.RED,
                // fontFamily: FONTS.Milliard,
              }}>
              {'Cancel'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Wrapper>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Header
              title={'Profile'}
              leftIconPath={images.arrowBack}
              onLeftIconPress={() => {
                navigationRef.current.goBack();
              }}
            />
          </View>
          <View style={styles.profilePicContainer}>
            <Image
              source={profilePic ? {uri: profilePic} : images.profilePic}
              style={styles.profilePic}
            />
            <View style={styles.pickerContainer}>
              <Pressable
                onPress={() => {
                  openBottomSheet();
                }}>
                <Image source={images.editIcon} style={styles.editIcon} />
              </Pressable>
            </View>
          </View>

          <View style={styles.textContainer}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.userNameText}>Adom Shafi</Text>
              <Text>Edit Profile</Text>
            </View>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={UpdateProfile}
            onSubmit={submitHandler}
            innerRef={formikRef}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.nameInputHeading}>Name</Text>
                  <Input
                    returnKeyType={'next'}
                    value={values.name}
                    placeholder="Name"
                    onSubmitEditing={() => email?.current?.focus()}
                    onChangeText={handleChange('name')}
                    error={touched.name && errors.name ? errors.name : ''}
                  />

                  <Text style={styles.emailInputHeading}>Email</Text>
                  <Input
                    returnKeyType={'next'}
                    value={values.email}
                    placeholder="Email Address"
                    onSubmitEditing={() => password?.current?.focus()}
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                  />
                  <Text style={styles.passwordInputHeading}>Password</Text>
                  <Input
                    returnKeyType={'done'}
                    onSubmitEditing={handleSubmit}
                    value={values.password}
                    placeholder={'Password'}
                    textContentType={'password'}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />
                </View>

                <View style={styles.loginButtonContainer}>
                  <Button
                    title={'Save Now'}
                    borderRadius={RF(10)}
                    onPress={() => {
                      handleSubmit(values);
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
          <RBSheet
            ref={sheetRef}
            // height={hp(20)}
            openDuration={250}
            customStyles={{
              container: {
                height: hp(25),
                width: '100%',
                borderTopLeftRadius: RF(15),
                borderTopRightRadius: RF(15),
                backgroundColor: 'transparent',
                // ...GST.shadowProp
              },
            }}>
            {renderContent()}
          </RBSheet>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default EditProfile;
