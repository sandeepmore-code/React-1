// import { useState } from "react";
// import toast from "react-hot-toast";
// import {  useNavigate } from "react-router-dom";

// function Login (){
//   const router = useNavigate();
//   const [user,setUserData]= useState({email :"",password :""});
//   console.log(user,"userData");
//   function handleChange(event){
//     setUserData({,[event.target.name]:event.target.value})
//   }

//   async function handlesubmit(event){
//     event.preventDefault();
//     if(user.email && user.password){
//       try{
//         const response = {data:{success : true , message : "Login Successful"}}
//         if(response.data.success){
//           setUserData({email : "",password : ""})
//           toast.success(response.data.message)
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
//     <form onChange={handlesubmit}>
//       <label>Email</label><br/>
//       <input type="email" name="email" onChange={handleChange} required/><br/>
//       <label>Password</label><br/>
//       <input type="password" name="password" onChange={handleChange} required/><br/><br/>
//       <input type="submit" value="Login"/>
//     </form>
//   </div>
// )
// }
// export default Login;




import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
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
        const response = { data: { success: true, message: "Login Successful" } };
        if (response.data.success) {
          setUserData({ email: "", password: "" });
          toast.success(response.data.message);
          router('/');
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