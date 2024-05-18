import React, { useState } from "react";
import { createContext } from "react";

 export const MycounterContext = createContext();
const ProviderCounterContext = ({children})=>{
  const [counter,setCounter] =useState(0);
  function Increment(){
    setCounter(counter+1)
  }
  function Decrementt(){
    setCounter(counter-1)
  }
  function ReSet(){
    setCounter(0)
  }
return(
  <MycounterContext.Provider  value={{counter,Increment,Decrementt,ReSet}}>
    {children}
  </MycounterContext.Provider>
)
}
export default ProviderCounterContext;