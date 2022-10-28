import React from "react";
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

export const Timer = () => {
    return(
        <>
            <Link to='/my-tools' className="goBack"><BiArrowBack/></Link>
            <div className="timerContainer">
                
            </div>
        </>
    )
}