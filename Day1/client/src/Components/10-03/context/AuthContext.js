
import { createContext, useEffect, useReducer } from "react";
import api from "../../../AxiosConfig.js";

export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const initialState = { user: null };


const AuthContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (data) => {
    dispatch({ type: "LOGIN", payload: data });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const getUserData = async () => {
    try {
      const response = await api.get("/api/v1/user/validate-token");
      if (response.data.success) {
        login(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
