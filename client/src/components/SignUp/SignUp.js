import React, { Component, Link } from 'react'
import { Button, Form, FormGroup, Label } from 'react-bootstrap'

class SignUp extends Component {

    state = {
        name: '',
        email:'',
        password: ''

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
                        <Label for="userEmail">Email:</Label>
                        <input type='userEmail' name="email" id="userEmail" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" />
                    </FormGroup>
                    <Button color="success"><Link to='/quiz'>Submit</Link></Button>
                </Form>
            </div>
        )
    }
}

export default SignUp