import { useLocation } from 'react-router-dom';

import style from './Footer.module.css';

function Footer() {
  if (useLocation().pathname === '/signup'
    || useLocation().pathname === '/signin'
    || useLocation().pathname === '/404'
    || useLocation().pathname === '/profile') return;
  return (
    <footer className={style.footer}>
      <p className={style.footer__caption}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={style.footer__line}></div>
      <div className={style.footer__links}>
        <p className={style.footer__date}>© 2023</p>
        <nav className={style.footer__navigation}>
          <a className={style.footer__link} href="https://practicum.yandex.ru/"
            target="_blanc" rel="noreferrer">Яндекс.Практикум</a>
          <a className={style.footer__link} href="https://github.com/darvinnn"
            target="_blanc" rel="noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
