import {createSlice} from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
  fcmToken: any;
  isFirstTime: any;
  userLocation: any;
}

const initialState: State = {
  user: null,
  authToken: null,
  fcmToken: null,
  isFirstTime: true,
  userLocation: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setFCMToken: (state, action) => {
      state.fcmToken = action.payload;
    },
    setIsFirstTime: (state, action) => {
      state.isFirstTime = action.payload;
    },
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
});

export const {
  setUser,
  setAuthToken,
  setFCMToken,
  setIsFirstTime,
  setUserLocation,
} = userReducer.actions;

export default userReducer.reducer;
