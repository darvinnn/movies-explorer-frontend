import '../../vendor/normalize.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

import style from './App.module.css';

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
