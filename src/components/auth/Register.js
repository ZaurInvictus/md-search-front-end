import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { register } from '../../store/actions/auth'
import brand from '../../assets/img/emergencyshifts.svg'
import Alert from '../../components/layout/Alert'



const Register = ({ register, loading }) => {
  // console.log('loading', loading)
  const [formData, setFormData] = useState({
    email: '',
    password:''
  })
  const history = useHistory()
  const { email, password } = formData

  const changeHandler = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })



 const submitForm = e => {
   e.preventDefault()
   register(formData, history)
 }




return (
  <>

      <h1 className='large text-primary'>Register</h1>

      <Alert />
      {/* {alert && <div className='alert'>{alert}</div>} */}
      
      <form className='form' onSubmit={submitForm}>
      <div className="input__section">
          <input
            className="input--text"
            type='text'
            placeholder='email'
            name='email'
            value={email}
            onChange={changeHandler}
            required
          />
          </div>
          <div className="input__section">
          <input
            className="input--text"
            type='password'
            placeholder='password'
            name='password'
            value={password}
            onChange={changeHandler}
            required
            minLength='8'
          />
          </div>
          <button className="button button--primary" type="submit">
            {loading ? <><i style={{marginLeft: '-12px', marginRight: '8px'}} className="fa fa-refresh fa-spin"></i>Loading</> : 
              <>
               <span>Register</span> 
               {/* <img className="link__icon" src={whiteRight} alt="Submit" /> */}
              </>
            }
         </button>
        </form>

        <p className="text--mute">Forgot password?
          <Link to='/forgot-password-admin' style={{marginLeft: '5px'}}>Reset Password</Link>
        </p>
   
    </>
  )
}

// const mapStateToProps = state => ({
//    auth: state.auth
// })
const mapStateToProps = state => {
  //console.log('Admin Landing State:', state)
  return  {
    auth: state.auth,
    loading: state.auth.loading
  }
}

export default connect(
  mapStateToProps,
  { register }
)(Register)