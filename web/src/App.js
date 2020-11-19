import './App.css';
import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './PersonaliaForm'
import titanic from './img/titanic.png';

function App() {

  const [prediction, setPrediction] = useState(3);

  const hanldeChange = function (newValue) {
    setPrediction(newValue)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <h1>Would I survive the Titanic? 🤔</h1>
        </Row>
        <Row>
          <Col><Figure.Image src={titanic} alt = "Sinking ship" fluid/></Col>
          <Col><Form parentCallback={hanldeChange} /></Col>
        </Row>
        <p>{prediction}</p>
        
      </Container>
    </div>
  );
}

export default App;
