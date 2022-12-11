import { useState } from "react";
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import './css/Stopwatch.css'

export const Stopwatch = () => {
    
    const[bgColor, setBgColor] = useState('#fff');

    const style = {
        backgroundColor: bgColor
    }
    return(
        <div className="stopWatchContainer" style={style}>
            <Link to='/my-tools' className="goBack"><BiArrowBack/></Link>
            <div className="stopWatchLayout">
                <h1>StopWatch</h1>
                <p>Under Construction !</p>
            </div>
        </div>
    )
}