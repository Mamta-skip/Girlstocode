import React, { useState } from 'react'

function Todos() {
  const[item,setitem]=useState("");
  const[list,setlist]=useState([]);
  return (
    <div>
      <input type="text" 
      placeholder='Enter Text'
      value={item}
      onChange={(e)=>{setitem( e.target.value)
   }}/>
   <button onClick={()=>{setlist([...list,{item:item}])}}>Add</button>
   <ul>
    {
      list.map((items,index)=>(
       <li key={index}>{items.item}</li> 
      ))
    }
   </ul>
    </div>
  )
}

export default Todos
