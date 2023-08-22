import { Link, useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';

import { ReactComponent as LogoSVG } from '../../images/logo.svg';

import style from './Header.module.css';

function Header() {
  if (useLocation().pathname === '/signup' || useLocation().pathname === '/signin') return;
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        <LogoSVG />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
