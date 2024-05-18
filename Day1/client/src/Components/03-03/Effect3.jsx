import { useEffect, useState } from "react";


function Effect3(){
  const [counter,setCounter]=useState(0);

  useEffect(()=>{console.log("code Executed")},[counter])
  return(
    <div>
      <h1>Counter-{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={()=>setCounter(0)}>Reset</button>

      
    </div>
  )
}
export default Effect3;