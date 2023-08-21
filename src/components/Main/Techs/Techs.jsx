import BlocksTitle from '../BlocksTitle/BlocksTitle.jsx';

import style from './Techs.module.css';

function Techs() {
  return (
    <section className={style.techs}>
      <BlocksTitle>Технологии</BlocksTitle>
      <h2 className={style.title}>7 технологий</h2>
      <p className={style.description}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className={style.stacks}>
        <li className={style.stack}>HTML</li>
        <li className={style.stack}>CSS</li>
        <li className={style.stack}>JS</li>
        <li className={style.stack}>React</li>
        <li className={style.stack}>Git</li>
        <li className={style.stack}>Express.js</li>
        <li className={style.stack}>MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
