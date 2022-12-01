import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';

import {Routes} from '../../../shared/utils/routes';
import {View, Image, Platform} from 'react-native';
import tabStyles from '../tabStyles';
import colors from '../../../assets/colors/colors';
import {ScreenTitle} from '../../../shared/utils/ScreenTitle';
import {FONTS} from '../../../assets/fonts';
import {RF} from '../../../shared/theme/responsive';

import {useSelector} from 'react-redux';
import Home from '../../../screens/bottomTabs/home';
import Messages from '../../../screens/bottomTabs/messages';
import Profile from '../../../screens/bottomTabs/profile';
import images from '../../../assets/images/images';
import Settings from '../../../screens/bottomTabs/settings';
import NotificationSettings from '../../../screens/bottomTabs/settings/notificationSettings';
import Search from '../../../screens/search';

const Tab = createBottomTabNavigator();
// let notVerified = (user.productId.length === 1 && !user.isAccountVerified )

const renderTopBorder = () => {
  return <View style={tabStyles.topBorStyes}></View>;
};
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.WHITE, borderTopWidth: 0},
        tabBarActiveTintColor: colors.LIGHT_GREEN,
        tabBarBackground: () => <View style={tabStyles.tabBarStyles}></View>,
      }}>
      <Tab.Screen
        name={Routes.HOME_SCREEN}
        component={Home}
        options={{
          tabBarLabel: ScreenTitle.HOME,
          tabBarLabelStyle: {
            // fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' ? RF(5) : null,
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD: "" }]}></View>*/}
              <Image
                source={images.glob}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_THEME : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Routes.MESSAGE}
        component={Messages}
        options={{
          tabBarLabel: ScreenTitle.MESSAGE,
          tabBarLabelStyle: {
            // fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' ? RF(5) : null,
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
              <Image
                source={images.message}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_THEME : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: ScreenTitle.PROFILE,
          tabBarLabelStyle: {
            // fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' ? RF(5) : null,
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
              <Image
                source={images.user}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_THEME : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.SETTINGS}
        component={Settings}
        options={{
          tabBarLabel: ScreenTitle.SETTINGS,
          tabBarLabelStyle: {
            // fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' ? RF(5) : null,
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
              <Image
                source={images.settings}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_THEME : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {user} = useSelector((state: any) => state.root.user);
  return (
    <Stack.Navigator
      initialRouteName={Routes.BOTTOM_TABS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.BOTTOM_TABS} component={MyTabs} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={Home} />
      <Stack.Screen name={Routes.SEARCH} component={Search} />
      <Stack.Screen
        name={Routes.NOTIFICATION_SETTINGS}
        component={NotificationSettings}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
