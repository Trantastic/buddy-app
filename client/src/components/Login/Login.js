import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label } from 'react-bootstrap'
import Quiz from './components/Quiz'

class Login extends Component {

    state = {
        login: '',
        password: '',
    }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="userName">Username:</Label>
                        <input type='username' name="user" id="userName" placeholder="Enter Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" />
                    </FormGroup>
                    <Button color="success"><Link to='/quiz' Component={Quiz}>Submit</Link></Button>
                </Form>
            </div>
        )
    }
}

export default Login