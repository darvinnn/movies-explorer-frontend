import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';

import { ReactComponent as LogoSVG } from '../../images/logo.svg';
import { ReactComponent as AccountIconSVG } from '../../images/accountIcon.svg';

function Header() {
  const location = useLocation();
  const notAuthorized = (
    <ul className={style.navigation}>
      <Link to='/signup' className={style.link}>Регистрация</Link>
      <Link to='/signin' className={`${style.link} ${style.link_login}`}>Войти</Link>
    </ul >
  );

  const authorized = (
    <ul className={style.navigation}>
      <Link to='/movies' className={style.link}>Фильмы</Link>
      <Link to='/saved-movies' className={style.link}>Сохранённые фильмы</Link>
      <div className={style.account}>
        <Link to='/profile' className={style.link}>Аккаунт</Link>
        <Link to='/profile'>
          <AccountIconSVG />
        </Link>
      </div>
    </ul >
  );

  return (
    <header className={style.header}>
      <Link to='/' className={style.logo}>
        <LogoSVG />
      </Link>
      <nav>
        {(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup')
          ? notAuthorized
          : authorized}
      </nav>
    </header>
  );
}

export default Header;
