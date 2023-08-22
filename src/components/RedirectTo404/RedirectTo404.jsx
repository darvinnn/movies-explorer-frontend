import { Navigate } from 'react-router-dom';

function RedirectTo404() {
  return <Navigate to='/404' />;
}

export default RedirectTo404;
