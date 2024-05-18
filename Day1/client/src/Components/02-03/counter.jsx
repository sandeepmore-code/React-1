import React, { useState } from "react";


function Counter(){
  const initialPrice = 1000
  const [counter,setCounter] = useState(1);
  const [price,setPrice] = useState(initialPrice);

  function Increment(){
    if(counter <10){
      setCounter(PreValue => PreValue+1);
      setPrice(initialPrice*(counter+1));
    }
  }

  function Decrement (){
    if(counter > 1){
      setCounter(PreValue=> PreValue -1)
      setPrice(initialPrice*(counter-1));
    }
    
  }

  function Reset(){
  setCounter(1);
  setPrice(1000);
  }

return(
  <div>
    <h1>Qty- {counter} of each good {price}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
  </div>
)
}
export default Counter;