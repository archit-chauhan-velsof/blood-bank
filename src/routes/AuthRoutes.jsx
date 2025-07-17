import { Routes, Route } from "react-router-dom";
// import Login from "../pages/login/Index";
// import Register from "../pages/register/Index";
import { LOGIN_URL, SIGNUP_URL } from "./url_constant";
import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const Login = lazy(()=>import("../pages/login/Index"));
const Register = lazy(()=>import("../pages/register/Index"));

const AuthRoutes = ({ setToken }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={LOGIN_URL} element={<Login setToken={setToken} />} />
        <Route path={SIGNUP_URL} element={<Register />} />
        <Route path="*" element={<Login setToken={setToken} />} />
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
