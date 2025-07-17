import Login from "./pages/login/Index";
import { Routes } from "react-router-dom";
import Register from "./pages/register/Index";
import AppRoutes from "./routes/AppRoutes";
import useToken from "./custom-hooks/useToken";
import AuthRoutes from "./routes/AuthRoutes";
import { useEffect } from "react";

function App() {
  const { token, setToken, resetToken } = useToken();

  if (!token) {
    return <AuthRoutes setToken={setToken} />;
  }

  return <AppRoutes resetToken={resetToken} />;
}

export default App;
