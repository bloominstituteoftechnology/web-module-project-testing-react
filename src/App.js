import React, { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Display from "./components/Display";

import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState("Select A Season");

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Integration Testing Challenge</a>
      </nav>
      <div className="App">
        <Display show={show} setSelectedSeason={setSelectedSeason} setShow={setShow} selectedSeason={selectedSeason}/>
      </div>
    </div>
  );
}