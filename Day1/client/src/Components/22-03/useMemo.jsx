import React, { useMemo, useState } from "react"

const UseMemo=()=>{   
  const [counter,setCounter] = useState(1);
  const [todos,settodos] =useState([])
 
  function Addtodos(){
    settodos([...todos,"New Todo"])
  }
  // const lengthyCalculation = ExpensiveCalculation(counter)
  const lengthyCalculation = useMemo(()=>ExpensiveCalculation(counter),[counter]);
  return(
    <div>
      <h1>Expensive Calculation : {lengthyCalculation}</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={Addtodos}>Add Todo</button>
      {todos.map((todo)=>(
        <h1>{todo}</h1>
      ))}

    </div>
  )
}

function ExpensiveCalculation(number){
  console.log("Expensive calculation initiated")
  for (var i=0 ;i < 1000000000; i++){
    number += 1;
  }
  return number;
}
export default UseMemo