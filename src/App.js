import React from "react";
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {Homepage} from './Components/Homepage';
import {Timer} from './Components/Timer';
import {Stopwatch} from './Components/Stopwatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/my-tools' element={<Homepage/>} />
        <Route path='/my-tools/timer' element={<Timer/>} />
        <Route path='/my-tools/stopwatch' element={<Stopwatch/>} />
      </Routes>
    </div>
  );
}

export default App;
