import BlocksTitle from '../BlocksTitle/BlocksTitle.jsx';

import style from './Techs.module.css';

function Techs() {
  return (
    <section className={style.techs}>
      <BlocksTitle>Технологии</BlocksTitle>
      <h3 className={style.techs__title}>7 технологий</h3>
      <p className={style.techs__description}>На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className={style.techs__stacks}>
        <li className={style.techs__stack}>HTML</li>
        <li className={style.techs__stack}>CSS</li>
        <li className={style.techs__stack}>JS</li>
        <li className={style.techs__stack}>React</li>
        <li className={style.techs__stack}>Git</li>
        <li className={style.techs__stack}>Express.js</li>
        <li className={style.techs__stack}>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
