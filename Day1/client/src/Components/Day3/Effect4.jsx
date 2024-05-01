import { useEffect, useState } from "react";

function Effect4(){
  const[counter1,setCounter1]=useState(0);
  const[counter2,setCounter2]=useState(0);
  useEffect(()=>{console.log("Code EXecuted")},[counter1,counter2])
return(
  <div>
    <h1>Counter-{counter1}</h1>
    <button onClick={()=>setCounter1(counter1+1)}>+</button>
    <button onClick={()=>setCounter1(0)}>Reset</button>
    <h1>Counter-{counter2}</h1>
    <button onClick={()=>setCounter2(counter2+1)}>+</button>
    <button onClick={()=>setCounter2(0)}>Reset</button>
  </div>
)
}
export default Effect4;