import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../ListTasks.js/Task/Task'

const ListTasks = () => {
  const [status, setStatus] = useState("all")
  const list = useSelector (state => state.listeReducer.ListTasks)
  return (
    <div> 
<Button onClick={()=>setStatus("all")}>ALL</Button>
<Button onClick={()=>setStatus("Done")}>Done</Button>
<Button onClick={()=>setStatus("Undone")}>UnDone</Button>



  {status === "Done"
 ? list
 .filter((el)=>el.isDone === true)
 .map((el)=> <Task task={el} key={el.id}/>)
 : status === "Undone"
 ? list
 .filter ((el)=> el.isDone === false)
 .map((el)=><Task task={el} key={el.id}/>)
:
list.map(el=>(<Task task ={el}key={el.id}/>))}

    </div>
  )
}

export default ListTasks