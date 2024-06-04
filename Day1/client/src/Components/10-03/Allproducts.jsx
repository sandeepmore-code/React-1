import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../AxiosConfig";


const AllProducts = (props)=>{
const {awdiz} = props;
console.log(awdiz,"awdiz")
const [allProducts , setAllproducts] = useState([])
useEffect(()=>{
 async function getProducts(){
    try{
      const response = await api.get("/api/v1/product/get-products");
      if(response?.data?.success){
        setAllproducts(response.data.products);
      }
    }catch(error){
console.log(error);
    }
  }
  getProducts();
},[])
return(
  <div>
    <h1>All Products</h1>
    {allProducts.length?   <div style={{display : 'flex', flexWrap : 'wrap' ,justifyContent : 'space-around', marginBottom : '30px'}}>
   {allProducts.map((product)=>(
      <div style= { {width : '30%',height : '270px', border : '2px solid black'} }>
        {/* <img style={{height : '74%', width : '230px'}} src={product.image} alt=""/> */}
        <h2>Product: {product.name}</h2>
        <p>Category : {product.category}</p>
        <p>Price : {product.price}</p>
        <p>Quantity : {product.quantity}</p>
        <p>Tags : {product.tags}</p>
      </div> ))}


   </div> : <div>
    <h1>Loading...</h1>
   </div> }
  
   <div style={{display : 'flex', flexWrap : 'wrap' ,justifyContent : 'space-around'}}>
   {awdiz.map((product)=>(
      <div style= { {width : '25%',height : '270px', border : '2px solid black'} }>
        <img style={{height : '74%', width : '230px'}} src={product.image} alt=""/>
        <h1>{product.name}</h1>
      </div>


    ))}
   </div>
  </div>
)
}
export default AllProducts;

