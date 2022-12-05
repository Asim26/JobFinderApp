import React, {Component, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import images from '../../assets/images/images';
import Header from '../../shared/components/header/header';
import Wrapper from '../../shared/components/wrapper';
import {navigationRef} from '../../shared/services/NavService';
import {RF} from '../../shared/theme/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import {jobApplicationSchema} from '../../shared/utils/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Input from '../../shared/components/input';
import {SelectList} from 'react-native-dropdown-select-list';
import Button from '../../shared/components/button/button';
import styles from './styles';

const JobApplyScreen = () => {
  const dispatch = useDispatch();

  const countryOptions = [
    {key: '1', value: 'Pakistan'},
    {key: '2', value: 'India'},
    {key: '3', value: 'Bangladesh'},
    {key: '4', value: 'Canada'},
    {key: '5', value: 'United States'},
  ];

  const [selectedCountry, setSelectedCountry] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    message: '',
    cv: '',
  };
  const submitHandler = (values: any) => {
    let obj = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      country: selectedCountry,
      message: values.message,
      cv: values.cv,
    };
  };

  const formikRef = useRef();

  return (
    <Wrapper>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.HeaderContainer}>
            <Header
              title={'Job Apply'}
              leftIconPath={images.arrowBack}
              onLeftIconPress={() => {
                navigationRef.current.goBack();
              }}
            />
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={jobApplicationSchema}
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
                  <View style={styles.firstRow}>
                    <View style={{width: '45%'}}>
                      <Text style={{}}>First Name</Text>
                      <Input
                        returnKeyType={'next'}
                        value={values.firstName}
                        placeholder="FirstName"
                        onChangeText={handleChange('firstName')}
                        error={
                          touched.firstName && errors.firstName
                            ? errors.firstName
                            : ''
                        }
                      />
                    </View>
                    <View style={{width: '45%'}}>
                      <Text style={{}}>Last Name</Text>
                      <Input
                        returnKeyType={'next'}
                        value={values.lastName}
                        placeholder="Last Name"
                        onChangeText={handleChange('lastName')}
                        error={
                          touched.lastName && errors.lastName
                            ? errors.lastName
                            : ''
                        }
                      />
                    </View>
                  </View>

                  <View style={styles.secondRow}>
                    <View style={{width: '95%'}}>
                      <Text style={{}}>Your Email</Text>
                      <Input
                        returnKeyType={'next'}
                        value={values.email}
                        placeholder="email"
                        onChangeText={handleChange('email')}
                        error={
                          touched.email && errors.email ? errors.email : ''
                        }
                      />
                    </View>
                  </View>

                  <View style={styles.thirdRow}>
                    <View style={{width: '95%'}}>
                      <Text style={{}}>Country</Text>

                      <SelectList
                        setSelected={(val: any) => {
                          handleChange('country'), setSelectedCountry(val);
                        }}
                        data={countryOptions}
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
                  </View>

                  <View style={styles.fourthRow}>
                    <View style={{width: '95%'}}>
                      <Text style={{}}>Message</Text>
                      <Input
                        returnKeyType={'next'}
                        value={values.message}
                        placeholder="country"
                        onChangeText={handleChange('message')}
                        containerStyle={{
                          height: RF(100),
                          alignItems: 'flex-start',
                          borderWidth: 1,
                        }}
                        error={
                          touched.message && errors.message
                            ? errors.message
                            : ''
                        }
                      />
                    </View>
                  </View>

                  <View style={styles.fifthRow}>
                    <View style={{width: '95%'}}>
                      <Text style={{}}>Your CV</Text>
                      <Input
                        returnKeyType={'next'}
                        value={values.cv}
                        placeholder="cv"
                        onChangeText={handleChange('cv')}
                        error={touched.cv && errors.cv ? errors.cv : ''}
                      />
                    </View>
                  </View>

                  <View style={styles.btnRow}>
                    <Button
                      title={'Apply Now'}
                      borderRadius={RF(10)}
                      onPress={() => {
                        submitHandler(values);
                      }}
                    />
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default JobApplyScreen;
