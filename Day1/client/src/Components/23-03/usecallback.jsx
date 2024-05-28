import React, { useCallback, useState } from "react";
import Childcomponent from "./Childcomponents";

const Usecallback =()=>{

const [count,setCount] = useState(0);
const [todos,setTodos]= useState([])

//  const Increment =()=>{
//   setCounter(counter+1)
//  }

const increment = ()=>{
  setCount((c)=> c+1)
}

// const Increment = useCallback(()=>setCounter(counter+1),[counter])

const addTodo = useCallback(()=>{setTodos((t)=> [...t,"New Todo Add "]

)},[todos])
  return(
    <>
    <Childcomponent todos={todos} addTodo ={addTodo}/>
    <hr/>
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      {/* <Childcomponent Increment={(increment)}/> */}
    </div>
    </>
  )
}
export default Usecallback;