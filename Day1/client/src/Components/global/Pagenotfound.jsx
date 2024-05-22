import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound=()=>{
const Router = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{Router("/Home")},5000)

  }, [])
return(
  <div>
    <h2>Page Not Found</h2>
    <p>Redirecting u to home page in 3 Secs...</p>
  </div>
)
}
export default PageNotFound;