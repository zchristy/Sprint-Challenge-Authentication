import axios from 'axios';
import { axiosWithAuth } from '../components/auth/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:3300/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${err}`
      });
    });
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post('http://localhost:3300/api/register', creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.message
      });
    });
};

export const FETCH_JOKES_START = 'FETCH_JOKES_START';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';
export const FETCH_JOKES_FAILURE = 'FETCH_JOKES_FAILURE';

export const getJokes = () => dispatch => {
  dispatch({ type: FETCH_JOKES_START });
  axiosWithAuth()
    .get('/api/jokes')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_JOKES_FAILURE,
        payload: `${err}`
      });
    });
};
