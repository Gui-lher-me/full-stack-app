import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const token = Cookies.get('access_token');

  if (!token) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
