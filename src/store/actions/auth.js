import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { setAlert } from './alert'


import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types'



// REGISTER
export const register = (formData, history) => async dispatch => {
  dispatch({ type: REGISTER_START })
  try {
    const res = await axiosWithAuth().post('/register', formData)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
 
    dispatch(setAlert(`Welcome`, 'success'))
    history.push( '/dashboard')
  } catch (err) {
     if(err && err.response !== undefined) {
     const errors = err.response.data.errors
     errors ? errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) :  
     dispatch(setAlert('Error registering.', 'danger'))
   } else {
     dispatch(setAlert('Error registering.', 'danger'))
   }
     dispatch({ type: REGISTER_FAIL })
   }
 }



// LOGIN
export const login = (formData, history) => async dispatch => {
 dispatch({ type: LOGIN_START })
 try {
   const res = await axiosWithAuth().post('/login', formData)
   dispatch({
     type: LOGIN_SUCCESS,
     payload: res.data
   })

   dispatch(setAlert(`Welcome`, 'success'))
   history.push( '/dashboard')
 } catch (err) {

    if(err && err.response !== undefined) {
    const errors = err.response.data.errors
    errors ? errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) :  
    dispatch(setAlert('Error logging in.', 'danger'))

  } else {
    dispatch(setAlert('Error logging in.', 'danger'))
  }
    dispatch({ type: LOGIN_FAIL })
  }
}


// LOGOUT
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
