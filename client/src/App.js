import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Quiz from './components/Quiz'
import { Col, Row } from 'react-bootstrap'
import './app.css'


class App extends Component {
  
  render() {

    return (
 
      <Router>
        <div>
          <Row className="show-grid">
          <Col xs={6} md={3} />
          <Col xs={6} md={6}>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signUp' component={SignUp} />
            <Route exact path='/quiz' component={Quiz} />
          </Col>
          <Col xsHidden md={3} />
          </Row>
        </div>

      </Router>
    )
  }
}

export default App
