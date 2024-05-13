import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
 
  return token ? <Outlet /> : <Navigate to="/login" />;
};
const PrivateRoutelastLogin = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const access = localStorage.getItem('token');

  useEffect(() => {
    if (!access) {
      navigate('/login', { replace: true });
    }
  }, [access, navigate]);

 
  return token ?  <Navigate to="/" /> : <Outlet />;
};

export {PrivateRoute, PrivateRoutelastLogin};
