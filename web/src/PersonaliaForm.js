import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PersonaliaForm = () => {
    
    const [personalia, setPersonalia] = useState(
        {
            'pclass': 0,
            'age'   : 25,
            'sibsp' : 2,
            'parch' : 1,
        }
    )

    const url = 'http://127.0.0.1:8000'

    const submit = e => {
        e.preventDefault()
        fetch(`${url}/predict`, {
            method: 'POST', 
            body: JSON.stringify({
                "pclass": parseInt(personalia.pclass),
                "age": personalia.age,
                "sibsp": personalia.sibsp,
                "parch": personalia.parch
            }),
            headers: { 'Content-Type': 'application/json'},
         })
            .then(res => res.json())
            .then(json => console.log(`Prediction: ${(json === 1)}`))
    }

    const handleChange = e => {
        setPersonalia({...personalia, [e.target.name]: e.target.value})
        console.log(personalia)
    }

    return (
        <Form onSubmit={submit}>
            <Form.Group controlId="pclass">
                <Form.Label>Passenger class</Form.Label>
                    <div key={'inline-checkbox'} className = "mb-3">
                        <Form.Check type="radio" name="pclass" checked={personalia.pclass === "1"} onChange={handleChange} value="1" inline label = "1" id = 'inline-checkbox-1' />
                        <Form.Check type="radio" name="pclass" checked={personalia.pclass === "2"} onChange={handleChange} value="2" inline label = "2" id = 'inline-checkbox-2' />
                        <Form.Check type="radio" name="pclass" checked={personalia.pclass === "3"} onChange={handleChange} value="3" inline label = "3" id = 'inline-checkbox-3' />
                    </div>
            </Form.Group>
            <Form.Group controlId="age">
            <Form.Label>Age: {personalia.age}</Form.Label>
                    <Form.Control
                        required
                        name = "age"
                        min = "0"
                        max = "100"
                        type="range"
                        value={personalia.age}
                        step="1"
                        onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="sibsp">
            <Form.Label>Sibling and Spouses</Form.Label>
            <Form.Control 
                        required
                        name="sibsp"
                        type="number"
                        value={personalia.sibsp}
                        onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="parch">
            <Form.Label>Sibling and Spouses</Form.Label>
                    <Form.Control 
                        required
                        name="parch"
                        type="number"
                        value={personalia.parch}
                        onChange={handleChange}
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default class PersonaliaFormComponent extends React.Component {

    render() {
        return (
                <PersonaliaForm></PersonaliaForm>
        )
    }
}