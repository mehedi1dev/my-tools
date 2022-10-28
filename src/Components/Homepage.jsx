import React from "react";
import './css/Homepage.css';
import { BiTimer } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Homepage = () => {
    return(
        <div className="cardContainer">
            <h1>My Tools</h1>
            <div className="cards">
                <Link className="card" to='/my-tools/timer'>
                    <span className="icon"><BiTimer/></span>
                    <p>Timer</p>
                </Link>
                <Link className="card" to='/my-tools'>
                    <span className="icon"><BiTimer/></span>
                    <p>Unknown</p>
                </Link>
                <Link className="card" to='/my-tools'>
                    <span className="icon"><BiTimer/></span>
                    <p>Unknown</p>
                </Link>
                
               
            </div>
            <div style={{height:'50px'}}></div>
        </div>
    )
}
