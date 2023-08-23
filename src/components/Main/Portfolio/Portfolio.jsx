import style from './Portfolio.module.css';
import Project from './Project/Project.jsx';

function Portfolio() {
  return (
    <section className={style.portfolio}>
      <h2 className={style.portfolio__title}>Портфолио</h2>
      <ul className={style.portfolio__projects}>
        <Project link="https://github.com/darvinnn/how-to-learn" >Статичный сайт</Project>
        <Project link="https://github.com/darvinnn/russian-travel">Адаптивный сайт</Project>
        <Project link="https://github.com/darvinnn/react-mesto-api-full-gha" isLast={true}>Одностраничное приложение</Project>
      </ul>
    </section>
  );
}

export default Portfolio;
