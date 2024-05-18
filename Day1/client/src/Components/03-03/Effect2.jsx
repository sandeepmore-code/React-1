import {useEffect, useState } from "react";

function Effect2(){
  const [counter,setCounter]=useState(0);
 useEffect(()=>{console.log("code executed")},[]);
  return(
    <div>
      <h1>Counter-{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}
export default Effect2;