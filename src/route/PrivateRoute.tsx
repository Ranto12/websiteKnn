import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const access = localStorage.getItem('access');
  const navigate = useNavigate();
  if (access) {
    return <Outlet />;
  } else {
    navigate('/login', { replace: true });
    return null;
  }
};

export default PrivateRoute;
