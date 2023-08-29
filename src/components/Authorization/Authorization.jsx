import { Link } from 'react-router-dom';

import { ReactComponent as LogoSVG } from '../../images/logo.svg';

import style from './Authorization.module.css';

function Authorization({ title, children, buttonValue, buttonIsActive, captionText, captionLink }) {
  return (
    <main className={style.auth}>
      <Link to="/">
        <LogoSVG className={style.auth__logo} />
      </Link>
      <h1 className={style.auth__title}>{title}</h1>
      <form className={style.auth__form}>
        {children}
      </form>
      <button className={buttonIsActive ? style.auth__submit : `${style.auth__submit} 
      ${style.auth__submit_disabled}`} disabled={!buttonIsActive} type="button">{buttonValue}</button>
      <p className={style.auth__caption}>
        {captionText}
        <Link className={style.auth__captionLink} to={captionLink === 'Войти' ? '/signin' : '/signup'}>
          {captionLink}
        </Link>
      </p>
    </main>
  );
}

export default Authorization;
