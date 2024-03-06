import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }: any) => {
  const access = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate('/login', { replace: true });
    }
  }, [access, navigate]);

  return (
    <Routes>
      <Route {...rest} element={access ? element : null} />;
    </Routes>
  )
};

export default PrivateRoute;
