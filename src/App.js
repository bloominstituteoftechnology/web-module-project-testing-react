import React, { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Display from "./components/Display";

import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState("Select A Season");

  return (
    <div className="App">
      <Display show={show} setSelectedSeason={setSelectedSeason} setShow={setShow} selectedSeason={selectedSeason}/>
    </div>
  );
}