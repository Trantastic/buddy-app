import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './landingPage.css'



const LandingPage = () =>{

    return (
        <div>

            <div className='bg'></div>
            <Row className='contet'>
                <Col xs={6} md={3} />
                <Col xs={6} md={6}>
                <h1>Buddy Buddy</h1>
                <p>Do you need a buddy?Let's find a buddy for your dogs~!Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. 
                    Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Nulla posuere.</p>
                    <div className='btns'>
                        <Button><Link to='/login'>Login</Link></Button>
                        <Button><Link to='/signUp'>Sign Up</Link></Button>
                    </div>
                </Col>
                <Col xsHidden md={3} />
            </Row>
        </div>
    )
}

export default LandingPage