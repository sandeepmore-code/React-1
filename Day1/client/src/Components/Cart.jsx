import { useContext, useEffect, useState } from "react";
import api from "../AxiosConfig";
import toast from "react-hot-toast";
import { AuthContext } from "./10-03/context/AuthContext";
import  "../styles/Cart.css"



function AddCart() {
  const { state } = useContext(AuthContext);
  const [CurrentProducts, setProducts] = useState([]);

  useEffect(() => {
    console.log(CurrentProducts,"current products")
    async function fetchCartProducts() {
      if (state?.user?._id) {
        try {
          const response = await api.get(`/api/v1/user/cart/${state.user._id}`);
          if (response.data.success) {
            setProducts(response.data.cart);
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Failed to fetch cart products.");
        }
      } else {
        toast.error("Please log in to view your cart.");
      }
    }

    fetchCartProducts();
  }, [state]);

  const handleCheckout = async () => {
    try {
      const response = await api.post("/api/v1/user/checkout", { userid: state.user._id });
      if (response.data.success) {
        toast.success(response.data.message);
        setProducts([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Checkout failed.");
    }
  };

  if (!state?.user?._id) {
    return <div>Please log in to view your cart.</div>;
  }

  return (
    <div id="cart">
      <h1>Your Cart</h1>
      {CurrentProducts.length ? (
        <div>
          <div className="cart-products">
            {CurrentProducts.map((productObj) => (
              <div key={productObj._id} className="cart-product">
                <h2>{productObj.name}</h2>
                <p>Category: {productObj.category}</p>
                <p>Price: {productObj.price}/-</p>
                <p>Quantity: {productObj.quantity}</p>
                <p>Tags: {productObj.tags.join(", ")}</p>
              </div>
            ))}
          </div>
          <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
}

export default AddCart;