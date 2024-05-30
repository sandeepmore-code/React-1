import React, { useContext, useState } from "react";
import { AuthContext } from "../10-03/context/AuthContext";
import AuthDirection from "../Redirections/AuthDirects";

const AddProduct=()=>{
  const [productData, setProductData] = useState({name : "",category:"",price :"",quantity: "",tags: ""})
  const handleChange=(event)=>{
setProductData({[event.target.name] : event})
  }
  const {state} = useContext(AuthContext); 
  console.log(state,"state");
  return(
    <div>
      <form>
        <label>Product Name</label>
        <br/>
        <input name="name"/>
        <label>Product category</label>
        <br/>
        <input name="category"/>
        <label>Product Name</label>
        <br/>
        <input name="price"/>
        <label>Product Price</label>
        <br/>
        <input name="quantity"/>
        <label>Product quantity</label>
        <br/>
        <input name="quantity"/>
        <label>Product Tags</label>
        <br/>
        <input name="tags"/>
        <br/>
        <input type="submit"/>
      </form>
    </div>
  )
 
  
}
export default AddProduct;