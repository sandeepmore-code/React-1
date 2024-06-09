import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../AxiosConfig/index.js";
import { AuthContext } from "./10-03/context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "buyer",
  });
  console.log(userData, "userData");
  const { state } = useContext(AuthContext);

  function HandleSelect(event) {
    setUserData({ ...userData, ["role"]: event.target.value });
    // console.log(event.target.value)
  }

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmpassword
    ) {
      try {
        const response = await api.post("/api/v1/user/register", { userData });
        // const response = {data:{success: true , message : "registration complited"}};

        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            role: "buyer",
          });
          toast.success(response.data.message);
          navigate("/login");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert("All fields are required");
    }
  }

  useEffect(() => {
    console.log(state);
    if (state && state?.user?.role !== undefined) {
      if (state?.user?.role === "buyer") {
        navigate("/Home");
      } else {
        navigate("/seller");
      }
    }
  }, [state]);

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={userData.name}
          name="name"
          required
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          value={userData.email}
          name="email"
          required
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          value={userData.password}
          name="password"
          required
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          value={userData.confirmpassword}
          name="confirmpassword"
          required
        />
        <br />
        <select onChange={HandleSelect}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <br />
        <input type="submit" value="Register" />
      </form>
      <button onClick={() => navigate("/login")}>Login?</button>
    </div>
  );
}

export default Register;
