import React, { useEffect, useState } from 'react'

function Stopwatch2() {
  const [air, setAir] = useState(0);
  const [that, setThat] = useState(false);
  function red() {
    setThat(!that);
  }
  function blue() {
    setAir(0);
    setThat(false);
  }
  useEffect(() => {
    let crow;
    if (that) {
      crow = setInterval(() => setAir((prevAir) => prevAir + 1), 1000)
    }
    return () => clearInterval(crow);
  }, [that])
  return (
    <div>
      <h1>Sweet Watch</h1>
      <div>{air}</div>
      <div>
        <button onClick={red}>{that ? "Pause" : "Start"}</button>
        <button onClick={blue}>End</button>
      </div>

    </div>
  )
}
export default Stopwatch2;
