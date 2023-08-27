import BlocksTitle from '../BlocksTitle/BlocksTitle.jsx';

import StudentPNG from '../../../images/Student2.jpg';

import style from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={style.aboutMe}>
      <BlocksTitle>Студент</BlocksTitle>
      <div className={style.aboutMe__infoBlock}>
        <div className={style.aboutMe__textBlock}>
          <h3 className={style.aboutMe__title}>Максим</h3>
          <p className={style.aboutMe__about}>Фронтенд-разработчик, 24 года</p>
          <p className={style.aboutMe__text}>Я закончил специалитет в МГСУ.
            Работаю инженером-геотехником, в университете увлекался дизайном. В октябре 2022 года начал кодить.
            Люблю Реакт, собираюсь освоить TypeScript.</p>
          <a className={style.aboutMe__link} href="https://github.com/darvinnn"
            target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <img className={style.aboutMe__studentPic} src={StudentPNG} alt="Фотография студента" />
      </div>
    </section>
  );
}

export default AboutMe;
