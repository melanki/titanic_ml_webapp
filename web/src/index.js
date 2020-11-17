import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './PersonaliaForm'
import titanic from './img/titanic.png';


ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Row>
        <h1>Would I survive the Titanic? 🤔</h1>
      </Row>
      <Row>
        <Col><Figure.Image src={titanic} alt = "Sinking ship" fluid/></Col>
        <Col><Form /></Col>
      </Row>
      
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
