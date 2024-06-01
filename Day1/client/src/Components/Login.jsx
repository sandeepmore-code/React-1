// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// function Login (){
//   const router = useNavigate();
//   const [userData,setUserData]= useState({email :"",password :""});
//   console.log(userData,"userData");

//   function handleChange(event){
//     setUserData({...userData,[event.target.name]:event.target.value})
//   }

//   async function handlesubmit(event){
//     event.preventDefault();
//     if(userData.email && userData.password){
//       try {
//         const resPonse = {data : {success : true , message : "Login Successful."}
//         if(resPonse.data.success){
//           setUserData({email : "",password : ""})
//           toast.success(resPonse.data.message)
//           router('/')
//         }
//       }catch(error){
//         toast.error(error.response.data.message)  
//       }
//     }else{
//       alert("all fields are required")
//     }
//   }
// return(

  
//   <div>
//     <h1><b><u>Login</u></b></h1>
//     <form onSubmit={handlesubmit}>
//       <label>Email</label><br/>
//       <input type="email" name="email" onChange={handleChange} required/><br/>
//       <label>Password</label><br/>
//       <input type="password" name="password" onChange={handleChange} required/><br/><br/>
//       <input type="submit" value="Login"/>
//     </form>
//   </div>
// )
//   }
// export default Login;




import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./10-03/context/AuthContext";
import axios from "axios";
import api from "../AxiosConfig";

function Login() {
  const {LOGIN} = useContext(AuthContext)
  const router = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        // const response = { data: { success: true, message: "Login Successful" , userData:{name : 'awdiz', email : " awdiz@gmail.com"}, token : "abcde" } };
        const response = await api.post('/login',{userData})
        if (response.data.success) {
          // localStorage.setItem("token",JSON.stringify(response.data.token))
          LOGIN(response.data.userData)
          setUserData({ email: "", password: "" });
          toast.success(response.data.message);
          router('/Home');
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert("All fields are required");
    }
  }

  return (
    <div>
      <h1><b><u>Login</u></b></h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br/>
        <input type="email" name="email" value={userData.email} onChange={handleChange} required/><br/>
        <label>Password</label><br/>
        <input type="password" name="password" value={userData.password} onChange={handleChange} required/><br/><br/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default Login;

