import React, { useContext, useEffect } from "react";
import { AuthContext } from "../10-03/context/AuthContext.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SellerProtected =({children})=>{

  const router= useNavigate();

  const {state} = useContext(AuthContext);
 useEffect(()=>{
  if(state?.user && state?.user?.role !== "seller"){
    toast.error("You are not allowed to access this page");
    router("/login") 
  }
 },[state])
 return children;
}
export default SellerProtected;