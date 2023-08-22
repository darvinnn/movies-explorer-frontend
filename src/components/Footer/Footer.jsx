import { useLocation } from 'react-router-dom';

import style from './Footer.module.css';

function Footer() {
  if (useLocation().pathname === '/signup' || useLocation().pathname === '/signin') return;
  return (
    <footer className={style.footer}>
      <p className={style.caption}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={style.line}></div>
      <div className={style.links}>
        <p className={style.date}>© 2023</p>
        <nav className={style.navigation}>
          <a className={style.link} href="https://practicum.yandex.ru/" target="_blanc" rel="noreferrer">Яндекс.Практикум</a>
          <a className={style.link} href="https://github.com/darvinnn" target="_blanc" rel="noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
