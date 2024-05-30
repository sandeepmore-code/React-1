import React, { useContext, useState } from "react";
import { AuthContext } from "../10-03/context/AuthContext";
import AuthDirection from "../Redirections/AuthDirects";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct=()=>{
  const [productData, setProductData] = useState({name : "",category:"",price :"",quantity: "",tags: ""})
  console.log(productData,"productData")
  const handleChange=(event)=>{
setProductData({...productData,[event.target.name] : event.target.value})
  }
  const {state} = useContext(AuthContext); 
  console.log(state,"state");
  const handleSubmit = async(event)=>{
    try{
      event.preventDefault();
    const response = await axios.post('http://localhost:3001/add-product', {productData, userid : "6658591fbe31cba681ef9413"});
    if(response.data.success){
      toast.success(response.data.message)
    }
    }catch(error){
      toast.error(error.response.data.error)
    }
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <br/>
        <input required name="name" onChange={handleChange}/>
        <br/>
        <label>Product category</label>
        <br/>
        <input required name="category" onChange={handleChange}/>
        <br/>
        <label>Product Price</label>
        <br/>
        <input required name="price" onChange={handleChange}/>
        <br/>
        <label>Product Quantity</label>
        <br/>
        <input required name="quantity" onChange={handleChange}/>
        <br/>
        <label>Product Tags</label>
        <br/>
        <input required name="tags"onChange={handleChange}/>
        <br/>
        <input required  type="submit"/>
      </form>
    </div>
  )
 
  
}
export default AddProduct;