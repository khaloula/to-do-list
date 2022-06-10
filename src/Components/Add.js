import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../js/actionsType/listTask'

const Add = () => {
  const [text, seTtext] = useState("")
  const dispatch = useDispatch()
  const handleADD = (e)=>{
    e.preventDefault()
    if(text){
      dispatch(addTask({id:Math.random(),text,isDone:false}))
      seTtext ("")
    }else {
      alert ("can not add empty text !!")
    }
  }
  return (
    <div>
      <input
      onSubmit={handleADD}
      placeholder='enter new task'
      type={text}
      onChange={(e)=>seTtext(e.target.value)}
      value={text}
      />
      <button onClick={ handleADD}>add</button>
    </div>
  )
}

export default Add