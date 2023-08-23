import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as AccountIconSVG } from '../../../images/accountIcon.svg';


import style from './Navigation.module.css';

function Navigation() {
  const location = useLocation().pathname;
  const notAuthorized = (
    <ul className={style.navigation}>
      <Link to="/signup" className={style.navigation__link}>Регистрация</Link>
      <Link to="/signin" className={`${style.navigation__link} ${style.navigation__link_login}`}>Войти</Link>
    </ul >
  );

  const authorized = (
    <ul className={style.navigation}>
      <Link to="/movies" className={`${style.navigation__link} ${location === '/movies' && style.navigation__link_active}`}>Фильмы</Link>
      <Link to="/saved-movies" className={`${style.navigation__link} ${location === '/saved-movies' && style.navigation__link_active}`}>Сохранённые фильмы</Link>
      <div className={style.navigation__account}>
        <Link to="/profile" className={`${style.navigation__link} ${location === '/profile' && style.navigation__link_active}`}>Аккаунт</Link>
        <Link to="/profile">
          <AccountIconSVG />
        </Link>
      </div>
    </ul >
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
