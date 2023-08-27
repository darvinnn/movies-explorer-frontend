import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as AccountIconSVG } from '../../../images/accountIcon.svg';


import style from './Navigation.module.css';

function Navigation() {
  const location = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const handleClosePopup = () => setIsOpen(false);
  const notAuthorized = (
    <ul className={style.navigation}>
      <Link to="/signup" className={style.navigation__link}>Регистрация</Link>
      <Link to="/signin" className={`${style.navigation__link} ${style.navigation__link_login}`}>Войти</Link>
    </ul >
  );

  const authorized = (
    <>
      <button className={style.navigation__burgerButton} type="button" onClick={() => setIsOpen(true)} />

      <ul className={`${style.navigation} ${style.navigation_authorized} ${isOpen ? style.navigation_active : ''}`}>
        <button className={style.navigation__closePopupButton} type="button" onClick={handleClosePopup} />
        <Link to="/" onClick={handleClosePopup} className={`${style.navigation__link} ${style.navigation__link_main} ${location === '/' ? style.navigation__link_active : ''}`}>Главная</Link>
        <Link to="/movies" onClick={handleClosePopup} className={`${style.navigation__link} ${location === '/movies' ? style.navigation__link_active : ''}`}>Фильмы</Link>
        <Link to="/saved-movies" onClick={handleClosePopup} className={`${style.navigation__link} ${location === '/saved-movies' ? style.navigation__link_active : ''}`}>Сохранённые фильмы</Link>
        <div className={style.navigation__account}>
          <Link to="/profile" onClick={handleClosePopup} className={`${style.navigation__link} ${location === '/profile' ? style.navigation__link_active : ''}`}>Аккаунт</Link>
          <Link to="/profile" onClick={handleClosePopup}>
            <AccountIconSVG className={style.navigation__accountIcon} />
          </Link>
        </div>
      </ul >
    </>
  );
  return (
    <nav>
      {(location === '/' || location === '/signin' || location === '/signup')
        ? notAuthorized
        : authorized}
    </nav>
  );
}

export default Navigation;
