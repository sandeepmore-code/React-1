import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const FakeStoreSingleProduct=()=>{

  const [productData,SetProductData] = useState({});

  const {id} = useParams()

  async function getSigleProductData(){
    try{
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      SetProductData(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(id){
      getSigleProductData();
    }},[id]);

  return(

   <div>
     <img src={productData?.image} alt={productData?.title}/>
     <h1>{productData?.title}</h1>
</div>
  )
}
export default FakeStoreSingleProduct;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const FakeStoreSingleProduct = () => {
//   const [productData, setProductData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { id } = useParams();

//   async function getSingleProductData() {
//     try {
//       const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
//       setProductData(response.data);
//     } catch (error) {
//       setError('Failed to fetch product. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (id) {
//       getSingleProductData();
//     }
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!productData) {
//     return <div>No product found</div>;
//   }

//   return (
//     <div>
//       <img src={productData.image} alt={productData.title} />
//       <h1>{productData.title}</h1>
//       <p>{productData.description}</p>
//       <p>Price: ${productData.price}</p>
//     </div>
//   );
// };

// export default FakeStoreSingleProduct;