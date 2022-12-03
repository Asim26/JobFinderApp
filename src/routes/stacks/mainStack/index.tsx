import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';

import {Routes} from '../../../shared/utils/routes';
import {View, Text, Image, Platform, Alert} from 'react-native';
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
import Applications from '../../../screens/applications';
import {
  setAuthToken,
  setUser,
} from '../../../shared/redux/reducers/userReducer';
import {store} from '../../../shared/redux/store';

import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import styles from './drawerStyles';

import JobApplyScreen from '../../../screens/jobApplyScreen';
import EditProfile from '../../../screens/editProfile';

const logoutConfirmation = () =>
  Alert.alert('Log out', 'Are you sure you want to logout?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'Log out',
      onPress: () => {
        logoutUser();
      },
    },
  ]);

const logoutUser = async () => {
  store.dispatch(setUser(null));
  store.dispatch(setAuthToken(null));
};

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
        name={Routes.DRAWER}
        component={MyDrawer}
        options={{
          tabBarLabel: 'HOME',
          tabBarLabelStyle: {
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' ? RF(5) : null,
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
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
        component={NotificationSettings}
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
      <Stack.Screen name={Routes.DRAWER} component={MyDrawer} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={Home} />
      <Stack.Screen name={Routes.SEARCH} component={Search} />
      <Stack.Screen
        name={Routes.NOTIFICATION_SETTINGS}
        component={NotificationSettings}
      />
      <Stack.Screen name={Routes.APPLICATIONS} component={Applications} />
      <Stack.Screen name={Routes.JOB_APPLY_SCREEN} component={JobApplyScreen} />
      <Stack.Screen name={Routes.EDIT_PROFILE} component={EditProfile} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        overlayColor: 'rgba(0,0,0,0.7)',
      }}
      drawerStyle={{backgroundColor: colors.WHITE}}
      initialRouteName={Routes.HOME_SCREEN}
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name={Routes.HOME_SCREEN} component={Home} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <View {...props} style={styles.drawerMainContainer}>
      <View style={styles.userInfoContainer}></View>
      <View style={styles.drawerItemsContainer}>
        <DrawerItem
          style={{borderBottomWidth: RF(1)}}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{'Edit Prodile'}</Text>
          )}
          onPress={() => props.navigation.navigate(Routes.EDIT_PROFILE)}
        />
        <DrawerItem
          style={{borderBottomWidth: RF(1)}}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{'Applications'}</Text>
          )}
          onPress={() => props.navigation.navigate(Routes.APPLICATIONS)}
        />
        <DrawerItem
          style={{borderBottomWidth: RF(1)}}
          label={() => (
            <Text style={styles.drawerItemLabelText}>
              {'Notification Settings'}
            </Text>
          )}
          onPress={() =>
            props.navigation.navigate(Routes.NOTIFICATION_SETTINGS)
          }
        />
        <DrawerItem
          style={{borderBottomWidth: RF(1)}}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{'LogOut'}</Text>
          )}
          onPress={() => {
            logoutConfirmation();
          }}
        />
      </View>
    </View>
  );
}

export default MainStack;
