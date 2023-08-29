import { Link } from 'react-router-dom';

import style from './404NotFound.module.css';

function NotFound() {
  return (
    <main className={style.notFound}>
      <h1 className={style.notFound__err}>404</h1>
      <p className={style.notFound__text}>Страница не найдена</p>
      <Link to=".." className={style.notFound__link}>Назад</Link>
    </main>
  );
}

export default NotFound;
