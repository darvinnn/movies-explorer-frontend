import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import IsLoggedInContext from '../../contexts/IsLoggedInContext';
import Preloader from '../Preloader/Preloader.jsx';

function ProtectedRoute({ element: Component }) {
  const [isLoggedIn] = useContext(IsLoggedInContext);
  console.log('Убрать хардкод');
  if (!isLoggedIn) return <Preloader />;
  return (
    isLoggedIn ? <Component /> : <Navigate to="/" />
  );
}

export default ProtectedRoute;
