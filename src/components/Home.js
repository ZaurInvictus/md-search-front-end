import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import brand from '../assets/img/emergencyshifts.svg'
// import parseJwt from '../utils/JWTdecoder'



const Home = () => {
  // Get and parse token 
  //   const authToken = localStorage.getItem('token')
  //   const decoded = parseJwt(authToken)
  //   let user_type
  //   let exp
  //   if(decoded){
  //     user_type = decoded.type
  //     exp = decoded.exp
  //   }


  //  if(user_type === 'user' && Date.now() <= exp * 1000) {
  //     return <Redirect to='/dashboard' />
  //   } else if(user_type === 'admin' && Date.now() <= exp * 1000){
  //     return <Redirect to='/admin' />
  //   }

  return (
       <>
       <header className="header">
         <div className="brand">
          <a className="brand__link" href="#">
           <img className="brand__logo" src={brand} alt="Brand Name"/>
          </a>
        </div>
        <nav className="nav">
          <Link to='/about' className='nav__link'>About</Link>
          <Link to='/contact' className='nav__link'>Contact</Link>
          <Link to='/login' className='nav__link'>Sign In</Link>
          <Link to='/register' className='button'>Post a Listing</Link>
        </nav>
       </header>
     

       <aside className="sidebar">
        <span className="segment__heading">Filter Listings</span>
        <form className="sidebar__form">
         <input type="text" name="keyword" id="keyword" placeholder="Search by keyword..." autoComplete="off"/>
         <input type="text" name="location" id="location" placeholder="Search by location..." autoComplete="off"/>
         <select>
           <option value="default">Department</option>
           <option value="1">Emergency</option>
           <option value="2">Intensive Care</option>
         </select>
         <select>
           <option value="default">Pay Type</option>
           <option value="1">Hourly</option>
           <option value="2">Salary</option>
           <option value="3">Contract</option>
         </select>
         <button className="button">Filter Listings</button>
        </form>
        <div className="sidebar__footer">
         <div className="footer__links">
          <a  className="footer__link" href="#">Privacy Policy</a>
         </div>
         <span className="copyright">2020 © Emergency Shifts</span>
        </div>
       </aside>


    <main className="main">
    <span className="segment__heading" style={{gridColumn: "1 / -1"}}>Active Listings</span>
    <div className="listings__list">
      <div className="listings__item">
        <div className="listings__logo__wrapper">
          <img className="listings__logo" src="/images/LogoPlaceholder.svg" alt="Employer Name" />
        </div>
        <div className="listings__content">
          <div className="listings__details">
            <span className="listings__employer">ABC Hospital</span>
            <span className="listings__location">Houston, Texas</span>
          </div>
          <h3 className="listings__title">Emergency Physician</h3>
          <span className="listings__tagline">A flexible position at a renowned hospital</span>
        </div>
      </div>

      <div className="listings__item">
        <div className="listings__logo__wrapper">
          <img className="listings__logo" src="/images/LogoPlaceholder.svg" alt="Employer Name"/>
        </div>
        <div className="listings__content">
          <div className="listings__details">
            <span className="listings__employer">ABC Hospital</span>
            <span className="listings__location">Houston, Texas</span>
          </div>
          <h3 className="listings__title">Emergency Physician</h3>
          <span className="listings__tagline">A flexible position at a renowned hospital</span>
        </div>
      </div>
      
      <div className="listings__item">
        <div className="listings__logo__wrapper">
          <img className="listings__logo" src="/images/LogoPlaceholder.svg" alt="Employer Name"/>
        </div>
        <div className="listings__content">
          <div className="listings__details">
            <span className="listings__employer">ABC Hospital</span>
            <span className="listings__location">Houston, Texas</span>
          </div>
          <h3 className="listings__title">Emergency Physician</h3>
          <span className="listings__tagline">A flexible position at a renowned hospital</span>
        </div>
      </div>
      
      <div className="listings__item">
        <div className="listings__logo__wrapper">
          <img className="listings__logo" src="/images/LogoPlaceholder.svg" alt="Employer Name"/>
        </div>
        <div className="listings__content">
          <div className="listings__details">
            <span className="listings__employer">ABC Hospital</span>
            <span className="listings__location">Houston, Texas</span>
          </div>
          <h3 className="listings__title">Emergency Physician</h3>
          <span className="listings__tagline">A flexible position at a renowned hospital</span>
        </div>
      </div>
      
      <div className="listings__item">
        <div className="listings__logo__wrapper">
          <img className="listings__logo" src="/images/LogoPlaceholder.svg" alt="Employer Name"/>
        </div>
        <div className="listings__content">
          <div className="listings__details">
            <span className="listings__employer">ABC Hospital</span>
            <span className="listings__location">Houston, Texas</span>
          </div>
          <h3 className="listings__title">Emergency Physician</h3>
          <span className="listings__tagline">A flexible position at a renowned hospital</span>
        </div>
      </div>
    </div>
  </main>

      </>
    )
  }
  
  export default Home
  {/* <Link to='/login' className="button button--primary"> 
    <span>Log In</span>
  </Link> 
  <Link to='/signup' className="button button--primary"> 
    <span>New User</span>
  </Link>  */}