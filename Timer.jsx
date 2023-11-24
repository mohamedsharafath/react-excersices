import { useState, useEffect } from 'react';
import './Timer.css';

function Timer () {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  return (
    <>
    <h1>Digital Clock</h1>
    <div className='clock'>
      <span>{convertToTwoDigit(time.hours >12 ? time.hours-12 : time.hours)}:</span>
      <span>{convertToTwoDigit(time.minutes)}:</span>
      <span>{convertToTwoDigit(time.seconds)}</span>
      <span className='txt'>{time.hours >= 12 ? ' PM' : ' AM'}</span>
    </div>
    </>
  );
}

export default Timer;