import React, { useContext, useEffect, useState } from "react";
import api from "../../AxiosConfig";
import { AuthContext } from "../10-03/context/AuthContext";

const YourProduct = ()=>{
  const [allProducts, setAllProducts] = useState([]);
  const {state} = useContext(AuthContext)
  console.log(allProducts, "allProducts");
  useEffect(() => {
    console.log(state,"state in frontend")
    async function getProducts() {
      try {
        const response = await api.post("/api/v1/product/get-products-by-seller", {userId : state?.user?._id });
        if (response?.data?.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  },[state]);
  return(
    <div>
      <h1>Your added Products</h1>
      {allProducts.length? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {allProducts.map((productObj) => (
            <div
              style={{
                width: "18%",
                border: "2px solid black",
                height: "250px",
              }}
            >
              <h1>Name : {productObj.name}</h1>
              <p>Category : {productObj.category}</p>
              <p>Price : {productObj.price}/-</p>
              <p>Total Quantities : {productObj.quantity}</p>
              <p>{productObj.tags}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading..</h1>
        </div>
      )}
    </div>
  );
  
}
export default YourProduct;