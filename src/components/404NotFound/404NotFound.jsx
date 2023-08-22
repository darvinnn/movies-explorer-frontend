import { Link } from 'react-router-dom';
import style from './404NotFound.module.css';

function NotFound() {
  return (
    <div className={style.notFound}>
      <p className={style.notFound__err}>404</p>
      <p className={style.notFound__text}>Страница не найдена</p>
      <Link to=".." className={style.notFound__link}>Назад</Link>
    </div>
  );
}

export default NotFound;
