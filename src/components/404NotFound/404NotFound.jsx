import { useNavigate } from 'react-router-dom';

import style from './404NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className={style.notFound}>
      <h1 className={style.notFound__err}>404</h1>
      <p className={style.notFound__text}>Страница не найдена</p>
      <p onClick={() => navigate(-2)} className={style.notFound__link}>Назад</p>
    </main>
  );
}

export default NotFound;
