import React, {useRef} from "react";
import {useState} from "react";
import styles from './styles';
import {useDispatch} from "react-redux";
import {setAuthToken, setUser} from "../../../shared/redux/reducers/userReducer";
import Wrapper from "../../../shared/components/wrapper";
import {Text, View,TouchableOpacity} from "react-native";
import Button from "../../../shared/components/button/button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';
import {LoginSchema} from "../../../shared/utils/validations";
import {RF} from "../../../shared/theme/responsive";
import {navigate} from "../../../shared/services/NavService";
import {Routes} from "../../../shared/utils/routes";
import {logOutUser} from "../../../shared/services/AuthService";
import Loader from "../../../shared/components/loader";

const initialValues = {
  email: '',
  password: '',
};

const UpdatedPassword = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();

  const formikRef = useRef();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = ({email, password}: any, {setSubmitting}: any) => {
    setTimeout(() => {
      setSubmitting(false);
      dispatch(setUser({email}));
    }, 3000);
    // const params = {
    //   email,
    //   password,
    // };
    // loginUser(params)
    //   .then((res: any) => {
    //     setSubmitting(false);
    //     dispatch(setUser(res.data.user));
    //     dispatch(setAuthToken(res.data.token));
    //   })
    //   .catch((err: any) => {
    //     setSubmitting(false);
    //     showToast('Request Failed', err?.response.data?.message, false);
    //   });
  };

  const logoutUser = async () => {
    setLoading(true);
    await logOutUser().then((response:any)=>{
      dispatch(setUser(null));
      dispatch(setAuthToken(null));
    }).finally(()=>{setLoading(false)})
  };

  return (
    <Wrapper noPaddingBottom>
      <Loader isLoading={loading}/>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
        </View>
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={submitHandler}
                innerRef={formikRef}
            >
              {({handleChange, handleBlur, handleSubmit, values,errors,touched}) => (

                    <>
            <View style={styles.inputContainer}>
              <View style={styles.headingContainer}>
                <Text style={styles.headingStyles }>{"Password updated!"}</Text>
                <Text style={styles.textStyles}>{"Your password has been updated, please re-login to your account with your new password."}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <View style={{marginVertical:RF(10)}}>
                <Button
                    title={"Re-Login with New Password"}
                    onPress={()=>{
                      logoutUser();
                    }}
                />
              </View>
            </View>
                    </>
              )}
            </Formik>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default UpdatedPassword;
