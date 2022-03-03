import React, { useEffect } from "react";
import s from "./Timer.module.css";
import { useState } from "react";
// import Minute from "../Timer.minute/Minute";

let stopinterval;
const Timer = (props) => {
  let [count, setcount] = useState(0);
  let [minuteCount, setMinuteCount] = useState(0);

 

  const startTimer = () => {
    stopinterval = setInterval(function () {
      setcount(count++);
    }, 500);
  
  };
  useEffect(() => {

      setMinuteCount(minuteCount++)
   
   
  })
  
  const stopTimer = () => {
    clearInterval(stopinterval);
  };
 
  return (
    <div className={s.timer_div}>
      {/* <Minute minuteCount = {0}  /> */}
      <div className={s.minute}>
        <h1>Minute:{minuteCount}</h1>
      </div>
      <p className={s.timer_p}>{count}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  );
};

export default Timer;
