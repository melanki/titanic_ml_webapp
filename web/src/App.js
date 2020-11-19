import './App.css';
import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import './index.css';
import PersonaliaForm from './PersonaliaForm'
import titanic from './img/titanic.png';

function App() {

  const [prediction, setPrediction] = useState(2);

  const handleSetPrediction =  (newValue) => {
    console.log('setPrediction')
    setPrediction(newValue)
  }

  function getBoolean() {
    console.log(prediction)
    if(prediction[0] === 1){
      return "You would survive!"
    } else {
      return "RIP"
    }
  }


  if (prediction > 1){ 
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>Would I survive the Titanic? 🤔</h1>
          </Row>
          <Row>
            <Col><Figure.Image src={titanic} alt = "Sinking ship" fluid/></Col>
            <Col><PersonaliaForm setPrediction={handleSetPrediction} /></Col>
          </Row>
          
        </Container>
      </div>
    );
  } else if (prediction <= 1) {
    return (
      <div>
        <h1>Result</h1>
        <p>{getBoolean()}</p>
      </div>
    )
  }
}

export default App;
