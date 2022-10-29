import React from "react";
import './css/Timer.css'
import { Link } from "react-router-dom";
import {BiArrowBack, BiUpArrow, BiDownArrow} from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

export const Timer = () => {

    const[second, setSecond] = useState(0);
    const[minute, setMinute] = useState(0);
    const[hour, setHour] = useState(0);
    const[bgColor, setBgColor] = useState('#fff');
    const[action, setAction] = useState('default');
    const[start, setStart] = useState();
    const[count, setCount] = useState(0);

    const style = {
        backgroundColor: bgColor
    }

    const increaseSecond = () => {
        if(second<59){
            setSecond((prevNum) => prevNum+1);
        }
        else if(second === 59){
            setSecond(0);
            increaseMinute();
        }
    }
    const decreaseSecond = () => {
        if(second>0){
            setSecond((prevNum) => prevNum-1);
        }
        else if(second === 0){
            setSecond(59);
            decreaseMinute();
        }
    }
    const increaseMinute = () => {
        if(minute<59){
            setMinute((prevNum) => prevNum+1);
        }
        else if(minute === 59){
            setMinute(0);
            increaseHour();
        }
    }
    const decreaseMinute = () => {
        if(minute>0){
            setMinute((prevNum) => prevNum-1);
        }
        else if(minute === 0){
            setMinute(59);
            decreaseHour();
        }
    }
    const increaseHour = () => {
        if(hour<23){
            setHour((prevNum) => prevNum+1);
        }
        else if(hour === 23){
            setHour(0);
        }
    }
    const decreaseHour = () => {
        if(hour>0){
            setHour((prevNum) => prevNum-1);
        }
        else if(hour === 0){
            setHour(23);
        }
    }

    const defaultButton = () => {
        return(
            <div className="buttonSection">
                <button className="button redButton" onClick={()=>{
                    setSecond(0);
                    setMinute(0);
                    setHour(0);
                }}>
                    Reset
                </button>
                <button className="button aquaButton" onClick={() => {setStart('start')}}>
                    Start
                </button>
            </div>
        )
    }
    const pauseButton = () => {
        return(
            <div className="buttonSection">
                <button className="button redButton" onClick={()=>{
                    setStart(null);
                    setSecond(0);
                    setMinute(0);
                    setHour(0);
                    setBgColor("#fff");
                    setAction('default');
                }}>
                    Stop
                </button>
                <button className="button aquaButton" onClick={() => {
                    setStart('start');
                    setBgColor("#fff");
                    setAction('start');
                    }}>
                    Resume
                </button>
            </div>
        )
    }
    const startButton = () => {
        return(
            <div className="buttonSection">
                <button className="button redButton" onClick={()=>{
                    setStart(null);
                    setSecond(0);
                    setMinute(0);
                    setHour(0);
                    setBgColor("#fff");
                    setAction('default');
                }}>
                    Stop
                </button>
                <button className="button yellowButton" onClick={pauseTimer}>
                    Pause
                </button>
            </div>
        )
    }
    const finishButton = () => {
        return(
            <div className="buttonSection">
                <button className="button aquaButton" onClick={() => {
                    setBgColor("#fff");
                    setAction('default');
                }}>
                    Done
                </button>
            </div>
        )
    }

    const pauseTimer = () =>{
        setBgColor('#fff51e');
        setAction('pause');
        setStart('pause');
    }
    const timer = () =>{
        let tempSecond = second;
        let tempMinute = minute;
        let tempHour = hour;
        
        setAction('start')
        setBgColor("#00d4bd");
        
        if(start === 'pause'){
        }
        else{
            setTimeout(() => {
                setCount(count+1)
            }, 1000);
        }
        if(tempSecond>0){
            tempSecond = tempSecond-1;
            setSecond(tempSecond);
        }
        else if(tempSecond === 0 && tempMinute === 0 && tempHour>0){
            tempHour = tempHour-1;
            setHour(tempHour);
            tempMinute = 59;
            setMinute(tempMinute);
            tempSecond = 59;
            setSecond(tempSecond);
        }
        else if(tempSecond === 0  && tempMinute>0){
            tempMinute = tempMinute-1;
            setMinute(tempMinute);
            tempSecond = 59;
            setSecond(tempSecond);
        }
        else if(tempSecond === 0 & tempMinute === 0 & tempHour === 0){
            setStart(null);
            setAction('finish');
            setBgColor('#fe0000');
        }
        else{
            tempSecond = tempSecond - 1;
            setSecond(tempSecond);
        }
    }

    useEffect(()=>{
        if (start === 'start') {
            timer();
        }
    }, [start, count])

    useEffect(()=>{
        let buttons = document.getElementsByClassName('hideOnStart'); 
        if(action === 'default'){
            for (let index = 0; index < buttons.length; index++) {
                buttons[index].style["display"] = 'contents';
            }
        }
        else{
            for (let index = 0; index < buttons.length; index++) {
                buttons[index].style["display"] = 'none';
            }
        }
    }, [action])

    

    return(
        <div className="timerContainer" style={style}>
            <Link to='/my-tools' className="goBack"><BiArrowBack/></Link>
            <div className="timerLayout">
                <div className="clock">
                <div className="timerCount">
                        <button className="hideOnStart" onClick={increaseHour}><BiUpArrow/></button>
                        <p>{hour}</p>
                        <button className="hideOnStart" onClick={decreaseHour}><BiDownArrow/></button>
                        <h1>Hour</h1>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="timerCount">
                        <button className="hideOnStart" onClick={increaseMinute}><BiUpArrow/></button>
                        <p>{minute}</p>
                        <button className="hideOnStart" onClick={decreaseMinute}><BiDownArrow/></button>
                        <h1>Minute</h1>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="timerCount">
                        <button className="hideOnStart" onClick={increaseSecond}><BiUpArrow/></button>
                        <p>{second}</p>
                        <button className="hideOnStart" onClick={decreaseSecond}><BiDownArrow/></button>
                        <h1>Second</h1>
                    </div>
                </div>
                { (action === 'default')&& defaultButton() }
                { (action === 'start')&& startButton() }
                { (action === 'pause')&& pauseButton() }
                { (action === 'finish')&& finishButton() }
            </div>
        </div>
    )
}