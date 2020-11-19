import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function PersonaliaForm (parentCallback) {
    
    const [personalia, setPersonalia] = useState(
        {
            'pclass': "1",
            'sex'   : "1",
            'age'   : 25,
            'sibsp' : 2,
            'parch' : 1,
            'fare'  : 50,
            'cabin' : "X"
        }
    )

    const url = 'http://127.0.0.1:8000'

    const submit = e => {
        e.preventDefault()
        let getPrediction = function() {fetch(`${url}/predict`, {
            method: 'POST', 
            body: JSON.stringify({
                "pclass": parseInt(personalia.pclass),
                "sex" : parseInt(personalia.sex),
                "age": personalia.age,
                "sibsp": personalia.sibsp,
                "parch": personalia.parch,
                "fare": personalia.fare,
                "cabin": personalia.cabin
            }),
            headers: { 'Content-Type': 'application/json'},
         })
            .then(res => res.json())
            .then(json => {return json})
        }
        const prediction = getPrediction()
        console.log(parentCallback)
        handleChange(prediction)
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
                        <Form.Check type="radio" name="pclass" checked={personalia.pclass === "1"} onChange={handleChange} value="1" inline label = "Poor" id = 'inline-checkbox-1' />
                        <Form.Check type="radio" name="pclass" checked={personalia.pclass === "2"} onChange={handleChange} value="2" inline label = "More Poor" id = 'inline-checkbox-2' />
                        <Form.Check type="radio" name="pclass" checked={personalia.pclass === "3"} onChange={handleChange} value="3" inline label = "Poorest" id = 'inline-checkbox-3' />
                    </div>
            </Form.Group>
            <Form.Group controlId="sex">
                <Form.Label>Passenger class</Form.Label>
                    <div key={'inline-checkbox'} className = "mb-3">
                        <Form.Check type="radio" name="sex" checked={personalia.sex === "1"} onChange={handleChange} value="male" inline label = "Male" id = 'inline-checkbox-11' />
                        <Form.Check type="radio" name="sex" checked={personalia.sex === "0"} onChange={handleChange} value="female" inline label = "Female" id = 'inline-checkbox-12' />
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
            <Form.Group controlId="fare">
            <Form.Label>Fare</Form.Label>
                    <Form.Control 
                        required
                        name="fare"
                        type="number"
                        value={personalia.fare}
                        onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="cabin">
                <Form.Label>Cabin</Form.Label>
                    <div key={'inline-checkbox'} className = "mb-3">
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "X"} onChange={handleChange} value="X" inline label = "X" id = 'cabin-checkbox-1' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "C"} onChange={handleChange} value="C" inline label = "C" id = 'cabin-checkbox-2' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "B"} onChange={handleChange} value="B" inline label = "B" id = 'cabin-checkbox-3' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "D"} onChange={handleChange} value="D" inline label = "D" id = 'cabin-checkbox-4' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "E"} onChange={handleChange} value="E" inline label = "E" id = 'cabin-checkbox-5' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "A"} onChange={handleChange} value="A" inline label = "A" id = 'cabin-checkbox-6' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "F"} onChange={handleChange} value="F" inline label = "F" id = 'cabin-checkbox-7' />
                        <Form.Check type="radio" name="cabin" checked={personalia.cabin === "G"} onChange={handleChange} value="G" inline label = "G" id = 'cabin-checkbox-8' />
                    </div>
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