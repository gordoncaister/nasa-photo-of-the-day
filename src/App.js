import React from "react";
import "./App.css";
import APODContainer from "./components/APODContainer"
import { Jumbotron, Container } from 'reactstrap';

function App() {
  
  return (
    <div className="App" style={{color:"white","background-color":"black"}} >
      <Container fluid="true" style={{padding:"1rem 0"}}>
        <Jumbotron style={{margin: "0rem 1rem 1rem",color: "black",backgroundColor: "white"}}>
          <h1 className="apod">APOD</h1>
          <h3 className="subtitle">By<br/>Gordon Caister</h3>
        </Jumbotron>
      <APODContainer/>
      </Container>
    </div>
  );
}

export default App;
