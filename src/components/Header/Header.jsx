import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as LogoSVG } from '../../images/logo.svg';

import Navigation from './Navigation/Navigation.jsx';


import style from './Header.module.css';

function Header() {
  if (useLocation().pathname === '/signup' || useLocation().pathname === '/signin'
    || useLocation().pathname === '/404') return;

  return (
    <header className={style.header}>
      <Link to="/" className={style.header__logo}>
        <LogoSVG />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
