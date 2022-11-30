import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
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

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const submitHandler = values => {};
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
          <View
            style={{
              height: RF(140),
              borderWidth: 2,
              justifyContent: 'flex-end',
            }}>
            <Text style={{fontSize: RF(30), fontWeight: '700'}}>
              Welcome Back!
            </Text>
            <Text style={{fontSize: RF(15), width: RF(200)}}>
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
                <View
                  style={{
                    height: RF(130),
                    borderWidth: 2,
                    justifyContent: 'flex-end',
                  }}>
                  <Input
                    returnKeyType={'next'}
                    value={values.email}
                    leftIcon={images.email}
                    placeholder="Email Address"
                    onSubmitEditing={() => password.current.focus()}
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

                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text>Forget Password?</Text>
                </View>
                <View
                  style={{
                    height: RF(70),
                    borderWidth: 2,
                    justifyContent: 'flex-end',
                  }}>
                  <Button
                    title={'Login'}
                    borderRadius={RF(10)}
                    onPress={() => {}}
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
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Login;
