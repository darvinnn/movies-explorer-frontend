import cardImage from '../../../images/cardImage.png';

import style from './MoviesCard.module.css';


function MoviesCard({ isSavedMovie }) {
  const getRandomValue = () => Math.random() < 0.5;
  const boolean = getRandomValue();

  return (
    <div className={style.card}>
      <div className={style.card__info}>
        <h2 className={style.card__title}>В погоне за Бэнкси</h2>
        <p className={style.card__duration}>27 минут</p>
      </div>
      <img className={style.card__image} src={cardImage} alt="Картинка фильма" />
      <button className={`${style.card__button} ${isSavedMovie ? style.card__button_saved
        : (boolean || style.card__button_selected)}`} type="button">{isSavedMovie || boolean && 'Сохранить'}</button>
    </div>
  );
}

export default MoviesCard;
