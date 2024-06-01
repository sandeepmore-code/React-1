import React, { useContext } from "react";
import { AuthContext } from "./10-03/context/AuthContext";
import api from "../AxiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar2= ({search,handleChange})=>{
  const {state,LOGOUT} = useContext(AuthContext)
  const router = useNavigate();
 async function Logout(){
    try{
      const response = await api.get('/api/v1/user/logout');
      if(response.data.success){
        LOGOUT()
        toast.success(response.data.message)
      }
    }catch(error){
      console.log(error)
    }
  }
  return(
    <div style={{display : "flex",justifyContent : "space-around"}}>

     <h2>Search Product </h2>
      <input placeholder="Mens..." value={search} onChange={handleChange}/>
      {state?.user?.name && <h3>Hi!.. {state?.user?.name}</h3>}
      {state?.user?.role? <h3 onClick={Logout}>Logout</h3> : <h3 onClick={()=>router('login')}>Login</h3>}
    </div>
  )
}
export default Navbar2;