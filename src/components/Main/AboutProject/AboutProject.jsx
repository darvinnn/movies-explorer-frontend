import BlocksTitle from '../BlocksTitle/BlocksTitle.jsx';

import style from './AboutProject.module.css';

function AboutProject() {
  return (
    <section id="aboutProject" className={style.aboutProject}>
      <BlocksTitle>О проекте</BlocksTitle>
      <div className={style.textBlock}>
        <div className={style.textBlock__section}>
          <p className={`${style.textBlock__text} ${style.textBlock__title}`}>Дипломный проект включал 5 этапов</p>
          <p className={style.textBlock__text}>Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
        </div>
        <div className={style.textBlock__section}>
          <p className={`${style.textBlock__text} ${style.textBlock__title}`}>На выполнение диплома ушло 5 недель</p>
          <p className={style.textBlock__text}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className={style.infoGrid}>
        <p className={`${style.infoGrid__element} ${style.infoGrid__element_green}`}>1 неделя</p>
        <p className={`${style.infoGrid__element} ${style.infoGrid__element_grey}`}>4 недели</p>
        <p className={style.infoGrid__element}>Back-end</p>
        <p className={style.infoGrid__element}>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
