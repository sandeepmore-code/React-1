import React,{memo} from "react";

// import Usecallback from "./usecallback";
const Childcomponent=({todos,addTodo})=>{
  console.log("Child Render...")
  
  return(
    <>
    <h2>My Todos</h2>
   {todos.map((todo,index)=>{
    return <p key = {index}>{todo}</p>
   })}
   <button onClick={ addTodo}>addTodo</button>
    </>
  )
}
export default memo(Childcomponent);  