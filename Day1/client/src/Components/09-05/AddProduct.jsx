import React, { useContext, useState } from "react";
import { AuthContext } from "../10-03/context/AuthContext";
import AuthDirection from "../Redirections/AuthDirects";
import axios from "axios";
import toast from "react-hot-toast";

import SellerProtected from "../Redirections/SellerProtected";
import api from "../../AxiosConfig";

const AddProduct=()=>{
  const [productData, setProductData] = useState({name : "",category:"",price :"",quantity: "",tags: ""})
  console.log(productData,"productData")
  const handleChange=(event)=>{
setProductData({...productData,[event.target.name] : event.target.value})
  }
  const {state} = useContext(AuthContext); 
  console.log(state,"state");
  const handleSubmit = async ( event)=>{
    try{
      event.preventDefault();
    const response = await api.post("/api/v1/product/add-product", {productData , userid: state.user._id, });
    if(response.data.success){
      toast.success(response.data.message)
    }
    }catch(error){
      toast.error(error.response.data.error)
    }
  }
  
  return(
    <SellerProtected>
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
        <input  type="submit"/>
      </form>
    </SellerProtected>
  )
 
  
}
export default AddProduct;


// import React, { useContext, useState } from "react";
// import { AuthContext } from "../10-03/context/AuthContext";
// import AuthDirection from "../Redirections/AuthDirects";
// import axios from "axios";
// import toast from "react-hot-toast";
// import api from "../../AxiosConfig";
// import SellerProtected from "../Redirections/SellerProtected";

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//     tags: "",
//   });

//   console.log(productData, "productData");

//   const handleChange = (event) => {
//     setProductData({ ...productData, [event.target.name]: event.target.value });
//   };
//   const { state } = useContext(AuthContext);
//   console.log(state, "state");

//   const handleSubmit = async (event) => {
//     try {
//       event.preventDefault();
//       const response = await api.post("/api/v1/product/add-product", {
//         productData,
//         userId: state.user._id,
//       });
//       if (response.data.success) {
//         toast.success(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.error);
//     }
//   };
//   return (
//     <SellerProtected>
//       <h1>AddProduct</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Product Name</label>
//         <br />
//         <input required name="name" onChange={handleChange} />
//         <br />
//         <label>Product category</label>
//         <br />
//         <input required name="category" onChange={handleChange} />
//         <br />
//         <label>Product price</label>
//         <br />
//         <input required name="price" onChange={handleChange} />
//         <br />
//         <label>Product quantity</label>
//         <br />
//         <input required name="quantity" onChange={handleChange} />
//         <br />
//         <label>Product Tags</label>
//         <br />
//         <input required name="tags" onChange={handleChange} />
//         <br />
//         <input type="submit" />
//         <br />
//       </form>
//     </SellerProtected>
//   );
// };

// export default AddProduct;