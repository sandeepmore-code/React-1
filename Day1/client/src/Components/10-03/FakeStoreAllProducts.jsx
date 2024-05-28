import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";



 const FakeStoreAllProducts = ()=> {

  const [ allProducts, setProducts] = useState([]);
  // console.log(allProducts,"allProducts")

  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([])
  const router = useNavigate()

  async function getProducts(){
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      // console.log(response,"Fake store API")
      if(response?.data.length){
        setProducts(response.data)
        setFilterProducts(response.data)
      }
    }catch (error){
      console.log(error)
    }
  }
  function Redirect (id){
 router(`/Fake-singleProduct/${id}`)
  }
  function handleChange(event){
    console.log(event.target.value);
    setSearch(event.target.value)

    let userWord= event.target.value.toLowerCase();

    const filteredProducts = allProducts.filter((product)=>{
     return product.title.toLowerCase().includes(userWord);
    })
    setFilterProducts(filteredProducts)
    console.log(filteredProducts,"filteredProducts")
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div >
     <h1>Fake store API </h1>
     <div>
      <h2>Search Product :</h2>
      <input placeholder="Mens..."value={search} onChange={handleChange}/>
     </div>
     {filterProducts?.length? 
     <div style={{marginTop:"100px",display : 'flex', flexWrap : 'wrap' ,justifyContent : 'space-around'}}>{filterProducts.map((productobj)=>(
      <div onClick={()=>Redirect(productobj.id)} style= { {width : '18%',height : '250px', border : '2px solid black'} } >
      <img style={{height : '70%', width : '100%'}} src={productobj.image} alt="Loading..."/>
        <p>{productobj.title}</p>
      </div>
     ))}</div>: <div>Loading....</div>}
    </div>

  )
}
export default FakeStoreAllProducts;