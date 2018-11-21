import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Quiz from './components/Quiz'


class App extends Component {
  render() {
    return (
        <Router>
          <div> 
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signUp' component={SignUp} />
            <Route exact path='/quiz' component={Quiz} />
          </div>
        </Router>
    )
  }
}

export default App
