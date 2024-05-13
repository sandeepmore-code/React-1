import { useState } from "react";

function Login (){
  const [user,setUserData]=useState({email :"",password :""});
  console.log(user,"user");
  function handleChange(event){
    setUserData({[event.target.name]: event.target.value})
  }

  // function handlesubmit(event){
  //   event.preventdefault();
      
  // }

return(

  
  <div>
    <h1><b><u>Login</u></b></h1>
    <form onChange={handleChange}>
      <label>Email</label><br/>
      <input type="email" name="email" required/><br/>
      <label>Password</label><br/>
      <input type="password" name="password" required/><br/><br/>
      <input type="submit" value="Login"/>
    </form>
  </div>
)
}
export default Login;