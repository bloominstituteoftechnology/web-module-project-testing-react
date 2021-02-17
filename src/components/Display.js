import React, { useEffect } from 'react';

import Loading from "./Loading";
import Show from "./Show";

import fetchShow from './../utils/fetchShow';

const Display = (props) => {
    const { show, selectedSeason, setSelectedSeason, setShow} = props;

    useEffect(() => {
        fetchShow().then(data => {
            setShow(data);
        });
    }, []);

    const handleSelect = e => {
        console.log(e.target);
        setSelectedSeason(e.target.value);
    };

    return (
        <div>
            <img className="poster-img" src='http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg' alt="header image" />
            {
                !show ? <Loading /> : <Show show={show} selectedSeason={selectedSeason} handleSelect={handleSelect}/>
            }
        </div>
    );
}

export default Display;