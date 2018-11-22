import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './landingPage.css'



const LandingPage = () =>{

    return (
        <div>

            <div className='bg'></div>
     
            <div className='content'>
                <div className='row justify-content-md-center pb-4'>
                <h1>Buddy Buddy</h1>
                </div>
                <p>Do you need a buddy?Let's find a buddy for your dogs~!Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. 
                    Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Nulla posuere.</p>
                    <div className='row justify-content-md-center btns'>
                        <Button><Link to='/login'>Login</Link></Button>
                        <Button><Link to='/signUp'>Sign Up</Link></Button>
                    </div>
                    </div>
             
            
  
        </div>
    )
}

export default LandingPage