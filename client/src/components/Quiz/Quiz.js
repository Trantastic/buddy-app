import React, { Component } from 'react';
import { FormGroup, Radio, ButtonToolbar, Button } from 'react-bootstrap';


class Quiz extends Component {
    
    state = {

    };

    render() {
        return(
            <div>
                <form>
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
                </form>
                <Button className="mx-auto" style={{ width: '50%', marginBottom: '1em' }} color="primary" size="lg">Click Here</Button>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large">
                    Large button
                    </Button>
                    <Button bsSize="large">Large button</Button>
                </ButtonToolbar>
            </div>
        )
    }
    
}

export default Quiz;