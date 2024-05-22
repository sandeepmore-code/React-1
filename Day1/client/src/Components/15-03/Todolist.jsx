import React, { useState } from "react";

const Todo = ()=>{
  const [Todo,setTodo] = useState("");
  const [Todos,setTodos] = useState([]);
  

  function HandChange (event){
    setTodo(event.target.value)
  }

  function Handlesubmit (){
    setTodos([...Todos,Todo]);
    setTodo("")
  }
  function handleDelet(i){
   const DeleteData = Todos.filter((Todo,id)=>{
    return i!== id
   })
   setTodos(DeleteData)
   }


  return(
    <div>
      <h1>Add Todo</h1>
      <input value={Todo} onChange={HandChange} type="text" placeholder="do lunch" />
      <button onClick={Handlesubmit}>Submit</button>
     
      {Todos.length?<div>
        <h1>Your Todo list</h1>
        {Todos.map((Todo,i)=>(
        <p>{i+1}.{Todo}
        <div> <button onClick={()=>handleDelet(i)}>Delete</button></div>
        </p>
        
      ))}
      </div>: <h1>No Todo Found</h1>}
  
    </div>
  )
}
export default Todo;