import React from "react";
import './css/Homepage.css';
import { BiTimer, BiStopwatch } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Homepage = () => {
    return(
        <div className="cardContainer">
            <h1>My Tools</h1>
            <div className="cards">
                <Link className="card" to='/my-tools/timer'>
                    <span className="icon"><GiSandsOfTime/></span>
                    <p>Timer</p>
                </Link>
                <Link className="card" to='/my-tools/stopwatch'>
                    <span className="icon"><BiStopwatch/></span>
                    <p>Stopwatch</p>
                </Link>
                <Link className="card" to='/my-tools'>
                    <span className="icon"><BiTimer/></span>
                    <p>More Coming</p>
                </Link>
                
               
            </div>
            <div style={{height:'50px'}}></div>
        </div>
    )
}
