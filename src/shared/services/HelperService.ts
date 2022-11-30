// import Toast from 'react-native-toast-message';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import {GOOGLE_MAP_API_KEY} from '../utils/config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {store} from '../redux/store';
import {
  setAuthToken,
  setUser,
  setUserLocation,
} from '../redux/reducers/userReducer';
import Toast from 'react-native-toast-message';
import {COUNTRY_DATA} from '../utils/CountryData';
import moment from 'moment';

const photoOptions: any = {
  mediaType: 'photo',
  // maxWidth: 300,
  // maxHeight: 300,
  includeBase64: true,
};

const videoOptions: any = {
  mediaType: 'video',
  durationLimit: 60,
  videoQuality: 'low',
};

export const addLeadingZero = (val: any) => {
  return val < 10 ? `0${val}` : val;
};

export const showToast = (text1: any, text2: any, type: any) => {
  Toast.show({text1, text2, type: type ? 'success' : 'error'});
};

export const randomNumberGenerator = () => {
  const result = [];
  while (result.length < 3) {
    const randomNum = Math.ceil(Math.random() * 10);
    if (result.indexOf(randomNum) === -1) result.push(randomNum);
  }
  return result.sort();
};

export const getAddressOfUser = async (lat: any, long: any, callback: any) => {
  await Geocoder.init(GOOGLE_MAP_API_KEY);
  await Geocoder.from(lat, long)
    .then(json => {
      let addressComponent = {
        address: json?.results[0]?.formatted_address,
        state:
          json?.results[0]?.address_components[7].long_name +
          ' ' +
          json?.results[0]?.address_components[8].long_name,
        region: getRegion(json?.results[0]?.address_components[8].short_name),
      };
      callback(addressComponent);
    })
    .catch(error => {
      callback(error);
    });
};

export const getCoordinates = (address: any, placeId: any, callback: any) => {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address="${address}'&key='${GOOGLE_MAP_API_KEY}`;
  let url2 = `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_MAP_API_KEY}&placeid=${placeId}`;
  fetch(url2)
    .then(response => response.json())
    .then(data => {
      console.log('Coordinates from  address ======>>>>', data);

      const latitude = data.result.geometry.location.lat;
      const longitude = data.result.geometry.location.lng;
      let tempArr = data.result.address_components;
      let shortName = tempArr[tempArr?.length - 1].short_name;
      let address = {
        latitude,
        longitude,
        region: getRegion(shortName),
      };
      callback(address);
    });
};

const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow Travego to determine your location.`,
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }
  return false;
};

const getAndroidPermission = async () => {
  console.log('checking permisson');
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  } else {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      // ToastAndroid.show(
      //     'Location permission denied by user.',
      //     ToastAndroid.LONG,
      // );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      // ToastAndroid.show(
      //     'Location permission revoked by user.',
      //     ToastAndroid.LONG,
      // );
    }
  }
};
export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  } else if (Platform.OS === 'android') {
    return getAndroidPermission();
  } else {
    return false;
  }
};

export const getLocation = async (callback: any) => {
  const hasPermission = await hasLocationPermission();

  if (!hasPermission) {
    return;
  }

  const options = {
    accuracy: {
      android: 'high',
      ios: 'best',
    },
    // enableHighAccuracy: true,
    timeout: 3600000,
    // distanceFilter: 0,
    // forceRequestLocation: true,
    // forceLocationManager: true,
    // showLocationDialog: true,
  };
  if (Platform.OS === 'ios') {
    options['maximumAge'] = 10000;
  }

  await Geolocation.getCurrentPosition(
    position => {
      const currentLongitude = parseFloat(position.coords.longitude);
      const currentLatitude = parseFloat(position.coords.latitude);
      let location = {
        latitude: currentLatitude,
        longitude: currentLongitude,
      };
      getAddressOfUser(currentLatitude, currentLongitude, response => {
        let location = {
          latitude: currentLatitude,
          longitude: currentLongitude,
          address: response,
        };
        callback(location);
        store.dispatch(setUserLocation(location));
      });
    },
    error => {
      // Alert.alert(`Code ${error.code}`, error.message);
      console.log(error);
    },
    options,
  );
};
export const openGallery = (video: any, callback: any) => {
  launchImageLibrary(video ? videoOptions : photoOptions)
    .then((response: any) => {
      if (!response.didCancel) {
        callback(response);
      }
    })
    .catch(error => {});
};

export const openCamera = (video: any, callback: any) => {
  launchCamera(video ? videoOptions : photoOptions)
    .then((response: any) => {
      if (!response.didCancel) {
        callback(response);
      }
    })
    .catch(error => {});
};

export const isObjectExist = (object: any) => {
  if (object !== null && object !== undefined) {
    return Object.keys(object).length !== 0;
  }
};
export const isArrayExist = (array: any) => {
  return array?.length > 0;
};
export const getRegion = (shortName: any) => {
  for (let i in COUNTRY_DATA) {
    if (i?.toLowerCase() === shortName?.toLowerCase()) {
      return COUNTRY_DATA[i];
    }
  }
};

export const logOutOnUnAuth = (error: any) => {
  if (error?.response?.status === 403) {
    store.dispatch(setUser(null));
    store.dispatch(setAuthToken(null));
  }
};

export const sum = (...theArgs: any) => {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
};

export const trimText = (text: any, length: any) => {
  let temp = text.slice(0, length);
  return temp + '...';
};
export const isItemExistInArray = (array, value) => {
  return array?.some(item => item === value);
};

export const alertWindow = (
  title: any,
  message: any,
  onPressCancel: any,
  onPressOk: any,
) => {
  return Alert.alert(title, message, [
    {
      text: 'Cancel',
      // onPress: () => console.log("Cancel Pressed"),
      onPress: () => {
        onPressCancel();
      },
      style: 'cancel',
    },
    // { text: "OK", onPress: () => console.log("OK Pressed") }
    {
      text: 'OK',
      onPress: () => {
        onPressOk();
      },
    },
  ]);
};
