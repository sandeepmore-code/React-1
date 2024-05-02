import { useState } from "react";
import {  useNavigate } from "react-router-dom";



function Register(){
  
const saNdu=useNavigate();
const [userData,setUserData]=useState({name: "",email :"",password : "",confirmpassword :""});
console.log(userData,"userData")

function handleChange(event){
setUserData({...userData,[event.target.name] : event.target.value})

}

 async function handleSubmit(event){
  event.preventDefault();
  if(userData.name&& userData.email && userData.password && userData.confirmpassword){
    try{
      const Response = {data:{sucess :true,Message : "Registration Sucessfull"}}
     if(Response.data.sucess){
      setUserData({name: "",email :"",password : "",confirmpassword :""});
      alert(Response.data.Message);
      saNdu('/login')
      
     }
    }catch(error){
      alert(error.Response.data.Message)
    }
   
  }else{
    
    alert("All feilds are required")
  }
}


  return(
    <div>
      <h1 >Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" onChange={handleChange} value={userData.name} name="name" required/><br/>
        <label>Email</label><br/>
        <input type="email" onChange={handleChange} value={userData.email} name="email" required/><br/>
        <label>Password</label><br/>
        <input type="password" onChange={handleChange} value={userData.password} name="password" required/><br/>
        <label>Confirm Password</label><br/>
        <input type="password" onChange={handleChange} value={userData.confirmpassword} name="confirmpassword" required/><br/>
        <input type="submit" value="Register"/>

      </form>
    </div>
  )
}
export default Register;