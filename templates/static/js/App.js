import React from 'react';
import { BrowserRouter as Router, Route, LinkHashRouter, hashHistory } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { LandingPage } from './components/LandingPage';
// import Home from './components/Home';
// import more components


export default class App extends React.Component{ 
  
  render(){
    return(
      // <HashRouter history={hashHistory}>
      <div>
        <h1>Hi! There</h1>
        <Router>
          <Route path='/' component={ LandingPage } />
        </Router>
      </div> 
      // </HashRouter>
  
    )
  }

}