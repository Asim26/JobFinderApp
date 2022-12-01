import React, {Component, useRef, useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import Wrapper from '../../../shared/components/wrapper';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Formik} from 'formik';
import {
  LoginSchema,
  SignUPSchema,
  SignUpSchema,
} from '../../../shared/utils/validations';
import {RF} from '../../../shared/theme/responsive';
import Input from '../../../shared/components/input';
import images from '../../../assets/images/images';
import Button from '../../../shared/components/button/button';
import colors from '../../../assets/colors/colors';
import SocialButton from '../../../shared/components/socialButton';
import {navigate, navigationRef} from '../../../shared/services/NavService';
import {Routes} from '../../../shared/utils/routes';
import Header from '../../../shared/components/header/header';

const SignUp = () => {
  const initialValues = {
    userName: '',
    email: '',
    password: '',
  };
  const submitHandler = values => {
    console.log('val', values);
  };
  const formikRef = useRef();

  const userName: any = useRef();
  const email: any = useRef();
  const password: any = useRef();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Wrapper>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header
              leftIconPath={images.arrowBack}
              onLeftIconPress={() => {
                navigationRef?.current?.goBack();
              }}
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Register Account</Text>
            <Text style={styles.bodyText}>
              Fill your details or continue with social media
            </Text>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUPSchema}
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
                  <Input
                    returnKeyType={'next'}
                    value={values.userName}
                    leftIcon={images.user}
                    placeholder="User Name"
                    onSubmitEditing={() => email?.current?.focus()}
                    onChangeText={handleChange('userName')}
                    error={
                      touched.userName && errors.userName ? errors.userName : ''
                    }
                  />
                  <Input
                    returnKeyType={'next'}
                    value={values.email}
                    leftIcon={images.email}
                    placeholder="Email Address"
                    onSubmitEditing={() => password?.current?.focus()}
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                  />
                  <Input
                    returnKeyType={'done'}
                    onSubmitEditing={handleSubmit}
                    value={values.password}
                    placeholder={'Password'}
                    textContentType={'password'}
                    leftIcon={images.lock}
                    rightIcon={showPassword ? images.eyeEnable : images.eye}
                    onChangeText={handleChange('password')}
                    showPassword={showPassword}
                    rightIconPress={toggleShowPassword}
                    secureTextEntry={!showPassword}
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />
                </View>

                <TouchableOpacity
                  style={styles.forgetPasswordContainer}
                  onPress={() => {}}>
                  <Text>Forget Password?</Text>
                </TouchableOpacity>

                <View style={styles.loginButtonContainer}>
                  <Button
                    title={'SIGN UP'}
                    borderRadius={RF(10)}
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                </View>
              </>
            )}
          </Formik>

          <View style={styles.orTextContainer}>
            <View style={styles.line}></View>
            <Text style={[styles.textStyle, {color: colors.BLACK}]}>
              {'  Or Continue with  '}
            </Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.socialContainer}>
            <SocialButton
              logo={images.google}
              marginLeft={RF(10)}
              marginRight={RF(10)}
              onPress={() => {}}
              bgColor={colors.GOOGLE_BTN_COLOR}
            />
            <SocialButton
              logo={images.facebook}
              marginLeft={RF(10)}
              marginRight={RF(10)}
              onPress={() => {}}
              bgColor={colors.FACEBOOK_BTN_COLOR}
            />
          </View>
          <View style={styles.signUpTextContainer}>
            <View style={styles.signUpTextInnerContainer}>
              <Text style={styles.alreadyAccountText}>
                Already Have Account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(Routes.LOGIN);
                }}>
                <Text style={styles.createAccountText}> Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default SignUp;
