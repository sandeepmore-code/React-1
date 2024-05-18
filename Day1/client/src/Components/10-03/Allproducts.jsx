import React from "react";


const AllProducts = (props)=>{
const {Products} = props;
console.log(Products,"Products")
return(
  <div>
    <h1>All Products</h1>
   <div style={{display : 'flex', flexWrap : 'wrap' ,justifyContent : 'space-around'}}>
   {Products.map((product)=>(
      <div style= { {width : '16%',height : '230px', border : '2px solid black'} }>
        <img style={{height : '74%', width : '230px'}} src={product.image}/>
        <h1>{product.name}</h1>
      </div>


    ))}
   </div>
  </div>
)
}
export default AllProducts;