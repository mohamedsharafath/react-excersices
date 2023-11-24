
import React, { useState, useEffect } from "react";
import "./StopClock.css";
const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
};

  // Method to reset timer back to 0
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };
  return (
    <div className="stopwatch-container">
       <table> 
        <tr>
      <td className="stopwatch-time">
        <span>Time: </span> 
        {/* {hours}:{minutes.toString().padStart(2, "0")}: */}
        {seconds.toString().padStart(1, "0")}
        <span>  Seconds</span>
        {/* {milliseconds.toString().padStart(2, "0")} */}
      </td>
      </tr>
      <tr>
      <td className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={start}>
          Start
        </button>
        <button className="stopwatch-button" onClick={stop}>
          Stop
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </td>
      </tr>
      </table>
    </div>
  );
};

export default Stopwatch;
