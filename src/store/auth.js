import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const debug = false;

// initial state
const initialState = {
  token: null,
  loading: false,
  username: null,
};

// create slice
export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedOut: (state) => {
      if (debug) console.log('auth/loggedOut', state);
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('expirationDate');
      state.token = null;
      state.username = null;
    },

    authStatus: (state) => {
      if (debug) console.log('auth/authStatus', state);
      if (localStorage.getItem('token') != null) {
        const actTime = new Date(new Date().getTime());
        const storTime = new Date(localStorage.getItem('expirationDate'));
        if (storTime.getTime() > actTime.getTime()) {
          state.token = localStorage.getItem('token');
          state.username = localStorage.getItem('username');
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('expirationDate');
        }
      }
    },

    authReceived: (state, action) => {
      const { key, username } = action.payload;
      state.token = key;
      state.username = username;
      state.loading = false;

      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

      localStorage.setItem('token', key);
      localStorage.setItem('username', username);
      localStorage.setItem('expirationDate', expirationDate);
    },

    authRequested: (state, action) => {
      state.loading = true;
    },

    authRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

// export reducer
export default slice.reducer;

// export actions
export const {
  loggedIn,
  loggedOut,
  authStatus,
  authReceived,
  authRequested,
  authRequestFailed,
} = slice.actions;

// export action creators
const url = '/rest-auth/login/';

export const logIn = (username, password) => (dispatch) => {
  if (debug) console.log('auth/logIn');
  dispatch(
    apiCallBegan({
      url,
      method: 'post',
      data: { username, password },
      onStart: authRequested.type,
      onSuccess: authReceived.type,
      onError: authRequestFailed.type,
    })
  );
  dispatch(checkAuthTimeout(3600));
};

export const logOut = () => (dispatch) => {
  dispatch(loggedOut());
};

export const checkAuthTimeout = (expirationDate) => (dispatch) => {
  console.log('Start timeout: ', expirationDate);
  setTimeout(() => {
    dispatch(loggedOut());
  }, expirationDate * 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const isAuthenticated = (state) => state.auth.token !== null;
