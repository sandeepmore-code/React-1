import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";


 const FakeStoreAllProducts = ()=> {

  const [ allProducts, setProducts] = useState([]);
  console.log(allProducts,"allProducts")

  async function getProducts(){
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      // console.log(response,"Fake store API")
      if(response?.data.length){
        setProducts(response.data)
      }
    }catch (error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
     <h1>Fake store API </h1>
     {allProducts?.length ? <div style={{display : 'flex', flexWrap : 'wrap' ,justifyContent : 'space-around'}}>{allProducts.map((productobj)=>(
      <div style= { {width : '18%',height : '250px', border : '2px solid black'} } >
        <img style={{height : '70%', width : '100%'}} src={productobj.image}/>
        <h1>{productobj.title}</h1>
      </div>
     ))}</div>: <div>Loading....</div>}
    </div>
  )
}
export default FakeStoreAllProducts;