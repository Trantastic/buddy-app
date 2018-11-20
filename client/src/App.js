import React, { Component } from 'react'
import { BrowserRouter as  Router, Route } from 'react-router-dom'
import { Botton } from 'react-bootstrap'
// import { Link } from 'react-router'
import Form from './components/Form';
import LandingPage from './components/LandingPage'
import Login from './components/Login'
// import Signup from './components/Signup'


class App extends Component {
  render() {
    return (
      <div>
        <Router> 
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/signUp' component={Signup} /> */}
        </Router>
        <Form />
      </div>
    )
  }
}

export default App
