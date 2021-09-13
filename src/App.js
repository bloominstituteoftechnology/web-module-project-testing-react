import React from "react";

import Display from "./components/Display";

import "./styles.css";

export default function App() {
  const displayFunc = (data)=> {
    console.log(data);
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/#"><img width="40px" src="./Lambda-Logo-Red.png" alt="nav bar"/> Lambda Integration Testing Challenge</a>
      </nav>
      <div className="App">
        <Display displayFun={displayFunc}/>
      </div>
    </div>
  );
}