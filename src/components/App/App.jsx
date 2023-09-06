import { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../404NotFound/404NotFound.jsx';
import RedirectTo404 from '../RedirectTo404/RedirectTo404.jsx';
import { getUser } from '../../utils/Api/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx';
import ProtectedFromAuthorized from '../ProtectedFromAuthorized/ProtectedFromAuthorized.jsx';

import style from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = () => {
    getUser()
      .then(res => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <div className={style.page}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<ProtectedRoute element={Movies} />} />
            <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
            <Route path="/signin" element={<ProtectedFromAuthorized onLogin={handleGetUser} element={Login} />} />
            <Route path="/signup" element={<ProtectedFromAuthorized element={Register} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<RedirectTo404 />} />
          </Routes>
          <Footer />
        </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
