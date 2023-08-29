import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as AccountIconSVG } from '../../../images/accountIcon.svg';


import style from './Navigation.module.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  const handleClosePopup = () => setIsOpen(false);
  const notAuthorized = (
    <nav className={style.navigation}>
      <NavLink to="/signup" className={style.navigation__link_notAuthorized}>Регистрация</NavLink>
      <NavLink to="/signin" className={`${style.navigation__link_notAuthorized} 
      ${style.navigation__link_login}`}>Войти</NavLink>
    </nav >
  );

  const authorized = (
    <>
      <button className={style.navigation__burgerButton} type="button" onClick={() => setIsOpen(true)} />

      <nav className={`${style.navigation} ${style.navigation_authorized} ${isOpen ? style.navigation_active : ''}`}>
        <button className={style.navigation__closePopupButton} type="button" onClick={handleClosePopup} />
        <NavLink to="/" onClick={handleClosePopup} className={({ isActive }) => isActive ? `${style.navigation__link}
         ${style.navigation__link_main} ${style.navigation__link_active}` : `${style.navigation__link} 
         ${style.navigation__link_main}`}>Главная</NavLink>
        <NavLink to="/movies" onClick={handleClosePopup} className={({ isActive }) => isActive
          ? `${style.navigation__link} ${style.navigation__link_active}` : style.navigation__link}>Фильмы</NavLink>
        <NavLink to="/saved-movies" onClick={handleClosePopup} className={({ isActive }) => isActive
          ? `${style.navigation__link} ${style.navigation__link_active}`
          : style.navigation__link}>Сохранённые фильмы</NavLink>
        <div className={style.navigation__account}>
          <NavLink to="/profile" onClick={handleClosePopup} className={({ isActive }) => isActive
            ? `${style.navigation__link} ${style.navigation__link_active}` : style.navigation__link}>Аккаунт</NavLink>
          <NavLink to="/profile" onClick={handleClosePopup}>
            <AccountIconSVG className={style.navigation__accountIcon} />
          </NavLink>
        </div>
      </nav >
    </>
  );
  return (
    <>
      {(location === '/' || location === '/signin' || location === '/signup')
        ? notAuthorized
        : authorized}
    </>
  );
}

export default Navigation;
