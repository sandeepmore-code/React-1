import React, { useContext, useEffect } from "react";
import { AuthContext } from "../10-03/context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AuthDirection =()=>{
  const router =useNavigate()
  const { state}= useContext(AuthContext);
  console.log(state,state.user === null);

  useEffect(()=>{
    if(state && state?.user === null){
      toast.error("login to acces this page.")
      return router("/login");
     }
  },[state])

  return(
    <div></div>
  )
}
export default AuthDirection;