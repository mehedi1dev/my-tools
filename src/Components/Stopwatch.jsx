import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import './css/Stopwatch.css'

export const Stopwatch = () => {
    const[bgColor, setBgColor] = useState('#fff');
    const[timerColor, setTimerColor] = useState("#cecece")
    const[stage, setStage] = useState("initial")

    const style = {
        backgroundColor: bgColor,
    }
     
    const stopWatchLayoutTimerStyle={
        backgroundColor: timerColor,
    }
    const startButtonStyle={
        backgroundColor: "#4cffee",
    }
    const resetButtonStyle={
        backgroundColor: "#fe3939",
        
    }
    const pauseButtonStyle={
        backgroundColor: "#fbb03b",
    }

    return(
        <div className="stopWatchContainer" style={style}>
            <Link to='/my-tools' className="goBack"><BiArrowBack/></Link>
            <div className="stopWatchLayout">    
                <div style={stopWatchLayoutTimerStyle} className="stopWatchLayoutTimer">
                    <p className="hour">00 :</p>
                    <p className="minute">00 :</p>
                    <p className="second" style={{fontSize:"25px",marginTop:"36px"}}>00</p>
                </div>
                <div className="stopWatchButtons">
                    {
                        stage==="initial" ? 
                        <button style={startButtonStyle} onClick={()=>
                            {
                            setStage("start") 
                            setTimerColor("#4cffee")
                            }
                        }>BEGIN</button> : 
                        stage === "start" ?   
                        <>
                            <button style={resetButtonStyle} onClick={()=>
                                {
                                    setStage("initial")
                                    setTimerColor("#cecece")
                                }
                            }>Reset</button>
                            <button style={pauseButtonStyle} onClick={()=>
                                {
                                    setStage("pause")
                                    setTimerColor("#fbb03b")
                                }
                            }>Pause</button>
                        </> : 
                        stage === "pause" ?   
                        <>
                            <button style={resetButtonStyle} oonClick={()=>
                                {
                                    setStage("initial")
                                    setTimerColor("#cecece")
                                }
                            }>Reset</button>
                            <button style={startButtonStyle} onClick={()=>
                                {
                                    setStage("start")
                                    setTimerColor("#4cffee")
                                }
                            }>Resume</button>
                        </> : null
                    }
                </div>
            </div>
        </div>
    )
}