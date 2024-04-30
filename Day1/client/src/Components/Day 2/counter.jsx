import React, { useState } from "react";


function Counter(){

  const [counter,setCounter] = useState(1);

  function Increment(){
    if(counter <10){
      setCounter(PreValue => PreValue+1);
     }
  }

  







return(
  <div>
    <h1>Counter- {counter}</h1>
    <button onClick={Increment}>+</button>
    <button>-</button>
    <button>Reset</button>
  </div>
)
}
export default Counter;