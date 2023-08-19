import style from './Header.module.css';

import { ReactComponent as LogoSVG } from '../../images/logo.svg';
import { ReactComponent as AccountIconSVG } from '../../images/accountIcon.svg';

function Header() {
  const notAuthorized = (
    <ul className={style.navigation}>
      <li className={style.link}>Регистрация</li>
      <li className={`${style.link} ${style.link_login}`}>Войти</li>
    </ul >
  );

  const authorized = (
    <ul className={style.navigation}>
      <li className={style.link}>Фильмы</li>
      <li className={style.link}>Сохранённые фильмы</li>
      <div className={style.account}>
        <li className={style.link}>Аккаунт</li>
        <AccountIconSVG className={style.profileIcon} />
      </div>
    </ul >
  );

  return (
    <header className={style.header}>
      <LogoSVG className={style.logo} />
      <nav>
        {authorized}
      </nav>
    </header>
  );
}

export default Header;
