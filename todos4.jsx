import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

function Todos4() {
  const [cold, setCold] = useState('')
  const [data, setData] = useState([])
  const [blue, setBlue] = useState(null)
  function element(event) {
    // console.log(event.target.value)
    setCold(event.target.value)
  }
  function water() {
    // console.log(cold)
    const t = [...data, cold]
    setData(t)
    setCold('')
  }
  function pegion(index) {
    // console.log(index)
    let r = data.filter((ele, id) => {
      return id !== index
    })
    setData(r)
  }
  function wolf(index) {
    let q = data[index]
    setCold(q)
    setBlue(null)
  }
  return (
    <div className='main'>
      <div className='taskInput'>
        <input type='text' placeholder='Enter New Task' onChange={element} value={cold} />
        <button onClick={water}>+</button>
      </div>
      {data.map((curVal, index) => {
        return (
          <>
            <div className='textContainer'>
              <div className='indexValue'>
                <p>{index}{curVal}</p>
              </div>
              <div className='buttons'>
                <MdDelete onClick={() => pegion(index)} />
                <MdEdit onClick={() => wolf(index)} />
              </div>
            </div>

          </>
        )
      })}
    </div>
  )
}

export default Todos4
