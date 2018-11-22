import React, { Component } from 'react';
import { Form, FormGroup, Radio, Button } from 'react-bootstrap';
import './quiz.css'


class Quiz extends Component {
    
    state = {

    };

    render() {
        return(
            <div>

            <div className='row justify-content-md-center lists'>

                <Form>
                    <FormGroup>
                        <p>How important are dogs to you?</p>
                        <Radio name="radioGroup" inline>
                            1
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            2
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            3
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            4
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            5
                        </Radio>
                    </FormGroup>
                    <FormGroup>
                        <p>How important is traveling to you?</p>
                        <Radio name="radioGroup" inline>
                            1
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            2
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            3
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            4
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            5
                        </Radio>
                    </FormGroup>
                    <FormGroup>
                        <p>Pick a color:</p>
                        <Radio name="radioGroup" inline>
                            Red
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            Green
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            Blue
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            Yellow
                        </Radio>{ ' ' }
                        <Radio name="radioGroup" inline>
                            Purple
                        </Radio>{ ' ' }
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
           
            </div>
        )
    }
    
}

export default Quiz;