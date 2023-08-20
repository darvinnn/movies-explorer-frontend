import style from './Project.module.css';

function Project({ children, isLast, link }) {
  return (
    <li className={style.project}>
      <a className={style.project__link} href={link} target='_blank' rel="noreferrer">
        <p className={style.title}>{children}</p>
        <p className={style.arrow}>↗</p>
      </a>
      {isLast || (<div className={style.line}></div>)}
    </li>
  );
}

export default Project;
