import {Formik} from 'formik';
import React, {useRef} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import images from '../../../assets/images/images';
import Button from '../../../shared/components/button/button';
import Header from '../../../shared/components/header/header';
import Input from '../../../shared/components/input';
import Wrapper from '../../../shared/components/wrapper';
import {navigationRef} from '../../../shared/services/NavService';
import {RF} from '../../../shared/theme/responsive';
import {UpdateProfile} from '../../../shared/utils/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './styles';

const Profile = () => {
  const initialValues = {
    name: 'asim',
    email: 'asim@gmail.com',
    password: '12345678',
  };

  const submitHandler = (values: any) => {};
  const formikRef = useRef();

  const email: any = useRef();
  const password: any = useRef();

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
            <Image source={images.profilePic} style={styles.profilePic} />
            <View style={styles.pickerContainer}>
              <Pressable onPress={() => {}}>
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
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Profile;
