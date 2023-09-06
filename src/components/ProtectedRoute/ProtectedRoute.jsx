import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import IsLoggedInContext from '../../contexts/IsLoggedInContext';

function ProtectedRoute({ element: Component }) {
  const [isLoggedIn] = useContext(IsLoggedInContext);

  return (
    isLoggedIn ? <Component /> : <Navigate to="/" />
  );
}

export default ProtectedRoute;
