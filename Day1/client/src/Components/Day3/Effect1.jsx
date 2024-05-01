import { useEffect, useState } from "react";

function UseEffect (){
const [counter,setCounter] = useState(0);
const [counter1,setCounter1] =useState(7);

useEffect(()=>{
  console.log("code executed")
})
return(
  <div>
    <h1>Counter-{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={()=>setCounter(0)}>Reset</button>

    <h1>Counter1-{counter1}</h1>
    <button onClick={()=>setCounter1(counter1+1)}>+</button>
    <button onClick={()=>setCounter1(7)}>Reset</button>
  </div>
)
}
export default UseEffect;