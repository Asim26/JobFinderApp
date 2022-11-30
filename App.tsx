import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {navigationRef} from './src/shared/services/NavService';
import RootStack from './src/routes';
import {persistor, store} from './src/shared/redux/store';
import SplashScreen from 'react-native-splash-screen';
import {
  getLocation,
  hasLocationPermission,
} from './src/shared/services/HelperService';
import {initialConfig, requestUserPermission} from './src/shared/utils/config';
import Toast from 'react-native-toast-message';
import {
  setFCMToken,
  setUserLocation,
} from './src/shared/redux/reducers/userReducer';
import {fcmService} from './src/shared/services/FCMService';
import {localNotificationService} from './src/shared/services/LocalNotifictionService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  useEffect(() => {
    hasLocationPermission();
    // requestUserPermission();
    // initialConfig();
    getLocation(response => {
      let location = {
        latitude: response?.latitude,
        longitude: response?.longitude,
        address: response,
      };
      store.dispatch(setUserLocation(location));
    });
  }, []);

  // useEffect(() => {
  //   // console.log("navigationRef usenavigation ====>>>>",navigationRef);
  //   fcmService.registerAppWithFCM();
  //   fcmService.register(onRegister, onNotification, onOpenNotification);
  //   localNotificationService.configure(onOpenNotification);
  // }, []);
  //FCM
  // function onRegister(Token: any) {
  //   store.dispatch(setFCMToken(Token));
  //   console.log('FCM TOKE=====>>>', Token);
  //   // setFCMToken(Token);
  // }

  // const onNotification = (notify: any, remoteMessage: any) => {
  //   localNotificationService.configure(onOpenNotification, remoteMessage);
  //   const options = {
  //     soundName: 'default',
  //     playSound: true,
  //   };
  //   console.log('notify ====>>>>', notify);
  //   localNotificationService.showNotification(
  //     0,
  //     notify?.title,
  //     notify?.body,
  //     notify,
  //     options,
  //   );

  //   // store.dispatch(setIsNotification(true))

  //   // }
  // };
  // const onOpenNotification = async (notify: any, remoteMessage: any) => {
  //   const notificationData = await AsyncStorage.getItem('notif');
  //   let data = JSON.parse(notificationData);
  //   console.log('data in notification ====>>>', data);
  //   // let owner = "";
  //   // let sender = JSON.parse(data.sender);
  //   // let receiver = JSON.parse(data.receiver);
  //   // let product = JSON.parse(data.product)
  //   //
  //   //
  //   // // store.dispatch(setIsNotification(false))
  //   //
  //   // if (product.ownerId === receiver.id){
  //   //     owner = receiver;
  //   // }else if (product.ownerId === sender.id){
  //   //     owner = sender;
  //   // }
  //   // if (Object.keys(data).length !== 0){
  //   //
  //   //     navigationRef?.current?.navigate(RoutesTitle.MESSAGE_SCREEN,{conversationId:data?.conversationId,product:product,receiver:sender,productOwner:owner});
  //   // }
  // };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <RootStack />
            <Toast position={'bottom'} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
