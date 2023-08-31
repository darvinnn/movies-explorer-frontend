
import { Link } from 'react-router-dom';

import { BASE_URl } from '../../../constants/constants';
import calculateDuration from '../../../utils/calculateDuration/calculateDuration';

import style from './MoviesCard.module.css';

function MoviesCard({ isSavedMovie, card }) {
  const getRandomValue = () => Math.random() < 0.5;
  const boolean = getRandomValue();

  return (
    <div className={style.card}>
      <div className={style.card__info}>
        <h2 className={style.card__title}>{card.nameRU}</h2>
        <p className={style.card__duration}>{calculateDuration(card.duration)}</p>
      </div>
      <Link to={card.trailerLink} target="blank">
        <img className={style.card__image} src={`${BASE_URl}${card.image.url}`}
          alt={`Заставка фильма "${card.nameRU}"`} />
      </Link>
      <button className={`${style.card__button} ${isSavedMovie ? style.card__button_saved
        : (boolean || style.card__button_selected)}`} type="button">{isSavedMovie || boolean && 'Сохранить'}</button>
    </div>
  );
}

export default MoviesCard;
