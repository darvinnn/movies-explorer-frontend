import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import IsLoggedInContext from '../../contexts/IsLoggedInContext';

function ProtectedFromAuthorized({ element: Component, ...props }) {
  const [isLoggedIn] = useContext(IsLoggedInContext);

  return (
    isLoggedIn ? <Navigate to="/movies" /> : <Component {...props} />
  );
}

export default ProtectedFromAuthorized;
