import { useContext } from "react";
import { MycounterContext } from "./10-03/context/Countercontect";
import { AuthContext } from "./10-03/context/AuthContext";
import NavBar from "./global/Navbar";


function Home (){
   const {counter,Increment,Decrementt,ReSet}=useContext(MycounterContext)
   const {state} = useContext(AuthContext)
   console.log(state,"State")
  return(
    <div>
      <NavBar/>
      <h1> Welcome to Home Page {state?.user?.name}</h1>
      <h1>Counter : { counter}</h1>
      <button onClick={Increment} >+</button>
      <button onClick={Decrementt}>-</button>
      <button onClick={ReSet}>Reset</button>
    </div>

  )
}
export default Home;