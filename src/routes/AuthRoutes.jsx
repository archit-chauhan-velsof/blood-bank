import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Index";
import Register from "../pages/register/Index";
import { LOGIN_URL,SIGNUP_URL } from "./url_constant";

const AuthRoutes = ({ setToken }) => {
  return (
    <Routes>
      <Route path={LOGIN_URL} element={<Login setToken={setToken} />} />
      <Route path={SIGNUP_URL} element={<Register />} />
      <Route path="*" element={<Login setToken={setToken} />} />
    </Routes>
  );
};

export default AuthRoutes;
