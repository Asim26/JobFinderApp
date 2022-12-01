import React, {useRef, useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import Wrapper from '../../../shared/components/wrapper';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Formik} from 'formik';
import {LoginSchema} from '../../../shared/utils/validations';
import {RF} from '../../../shared/theme/responsive';
import Input from '../../../shared/components/input';
import images from '../../../assets/images/images';
import Button from '../../../shared/components/button/button';
import colors from '../../../assets/colors/colors';
import SocialButton from '../../../shared/components/socialButton';
import {navigate} from '../../../shared/services/NavService';
import {Routes} from '../../../shared/utils/routes';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../shared/redux/reducers/userReducer';

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: 'asim@gmail.com',
    password: '12345678',
  };
  const submitHandler = (values: any) => {
    let obj = {
      email: values.email,
      password: values.password,
    };
    dispatch(setUser(obj));
  };
  const formikRef = useRef();

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
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Welcome Back!</Text>
            <Text style={styles.bodyText}>
              Fill your details or continue with social media
            </Text>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
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
                    title={'Login'}
                    borderRadius={RF(10)}
                    onPress={() => {
                      handleSubmit(values);
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
              <Text style={styles.newUserText}>New User? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(Routes.SIGN_UP);
                }}>
                <Text style={styles.createAccountText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Login;
