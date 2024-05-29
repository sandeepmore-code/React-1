import React from "react";

const Navbar2= ({search,handleChange})=>{
  return(
    <div>
      NavBar 2
     <h2>Search Product </h2>
      <input placeholder="Mens..." value={search} onChange={handleChange}/>
    </div>
  )
}
export default Navbar2;