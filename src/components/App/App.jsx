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

import style from './App.module.css';

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<RedirectTo404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
