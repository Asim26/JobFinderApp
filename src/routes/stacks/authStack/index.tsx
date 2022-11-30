import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../shared/utils/routes';

import {useSelector} from 'react-redux';
import Login from '../../../screens/auth/login';
import SignUp from '../../../screens/auth/signup';
import StartScreen from '../../../screens/startScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {user, isFirstTime} = useSelector((state: any) => state.root.user);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={Routes.START_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.START_SCREEN} component={StartScreen} />
        <Stack.Screen name={Routes.LOGIN} component={Login} />
        <Stack.Screen name={Routes.SIGN_UP} component={SignUp} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
