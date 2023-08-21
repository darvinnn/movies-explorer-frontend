import { ReactComponent as LogoSVG } from '../../../images/text__COLOR_landing-logo.svg';
import NavTab from '../NavTab/NavTab.jsx';

import style from './Promo.module.css';

function Promo() {
  return (
    <section className={style.promo}>
      <h1 className={style.title}> Учебный проект студента факультета Веб-разработки.</h1>
      <p className={style.description}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <NavTab />
      <LogoSVG className={style.logo} />
    </section>
  );
}

export default Promo;
