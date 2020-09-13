import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from '../actions/types';
  
const initialState = {
   token: localStorage.getItem('token'),
   loading: false,
   // user: null
}
  
  export default function(state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case REGISTER_START:
      case LOGIN_START: 
        return {
          ...state,
          loading: true
        }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token)
        return {
          ...state,
          ...payload,
          loading: false
        }
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token')
        localStorage.clear()
        return {
          ...state,
          token: null,
          loading: false
        }
      default:
        return state;
    }
  }
  