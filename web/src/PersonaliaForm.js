import React from 'react';
import Form from 'react-bootstrap/Form'

export default class PersonaliaForm extends React.Component {
    render() {
        return (
                <Form>
                    <Form.Group controlId="pclass">
                        <Form.Label>Passenger class</Form.Label>
                            <div key={'inline-checkbox'} className = "mb-3">
                                <Form.Check inline label = "1" type = 'checkbox' id = 'inline-checkbox-1' />
                                <Form.Check inline label = "2" type = 'checkbox' id = 'inline-checkbox-2' />
                                <Form.Check inline label = "3" type = 'checkbox' id = 'inline-checkbox-3' />
                            </div>
                    </Form.Group>
                    <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                            <Form.Control type="range" />
                    </Form.Group>
                    <Form.Group controlId="sibsp">
                    <Form.Label>Sibling and Spouses</Form.Label>
                            <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group controlId="family">
                    <Form.Label>Sibling and Spouses</Form.Label>
                            <Form.Control type="number" />
                    </Form.Group>
                </Form>
        
        )
    }
}