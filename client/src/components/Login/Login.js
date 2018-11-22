import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'
import './login.css'

class Login extends Component {

    state = {
        login: '',
        password: '',
    }

    render() {
        return(
            <div className="row justify-content-md-center content">
                <Form className="login-form">
                    <FormGroup>
                        <p>Username:</p>
                        <FormControl type="text" name="user" id="userName" placeholder="Enter Username" />
                    </FormGroup>
                    <FormGroup>
                        <p>Password:</p>
                        <FormControl type="password" name="password" id="password" placeholder="Enter Password" />
                    </FormGroup>
                    <Button type="submit"><Link to="/quiz">Submit</Link></Button>
                </Form>
            </div>
        )
    }
}

export default Login