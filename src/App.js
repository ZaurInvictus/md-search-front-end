import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
// UTILS
import PrivateRoute from './utils/PrivateRoute'
import NotFound from './components/layout/NotFound'
// USER 
import Home from './components/Home'
import Register from './components/auth/Register'

function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path='/' component={Home} /> 
        <Route exact path='/register' component={Register} /> 

        <Route component={NotFound} /> 
      </Switch>
    </Router>
  )
}

export default App
