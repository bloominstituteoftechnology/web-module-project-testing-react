import React, { useState, useEffect } from "react";
import fetchShow from './utils/fetchShow';


import Loading from "./components/Loading";
import ShowDisplay from "./components/ShowDisplay";

import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    fetchShow()
      .then(data => {
        setShow(data);
      });
  }, []);

  const handleSelect = e => {
    setSelectedSeason(e.target.value);
  };

  return (
    <div className="App">
      <img className="poster-img" src='http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg' alt="header image" />
      
      {
        !show ? <Loading /> : <ShowDisplay show={show} selectedSeason={selectedSeason} handleSelect={handleSelect}/>
      }
    </div>
  );
}