import { ReactComponent as LogoSVG } from '../../../images/text__COLOR_landing-logo.svg';

import NavTab from './NavTab/NavTab.jsx';

import style from './Promo.module.css';

function Promo() {
  return (
    <section className={style.promo}>
      <LogoSVG className={style.promo__logo} />
      <h1 className={style.promo__title}> Учебный проект студента факультета Веб-разработки.</h1>
      <p className={style.promo__description}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <NavTab />
    </section>
  );
}

export default Promo;
