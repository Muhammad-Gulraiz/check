import React, { useEffect, useState } from 'react'
import '../styleCss/digitalClock.css'

const DigitalClock4 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <h1 className="clock">{time}</h1>
    </div>
  )
}

export default DigitalClock4
