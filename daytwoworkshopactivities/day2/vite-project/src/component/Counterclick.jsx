import React from 'react'
import { useState } from 'react'

function Counterclick() {
    const [count, setcount] =useState(0);

 const handlechange=(step)=>{
    setcount(count +step);
 }

  return (
    <div>
        <p>Counter:{count}</p>
        <p>Button click time:{count}</p>
        
      <button onClick={()=>handlechange(1)} >incrementbyone</button>
      <button onClick={()=>handlechange(-2)} >decrementbytwo</button>
      
    </div>
  )
}

export default Counterclick
