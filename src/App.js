import React from "react";
import "./App.css";
import APODContainer from "./components/APODContainer"

function App() {
  
  return (
    <div className="App">
      <header>
        <h1 className="apod">APOD</h1>
        <h3 className="subtitle">By<br/>Gordon Caister</h3>
      </header>
      <APODContainer/>
    </div>
  );
}

export default App;
