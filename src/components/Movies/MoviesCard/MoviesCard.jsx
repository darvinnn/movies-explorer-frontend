
import { Link } from 'react-router-dom';
import { memo, useContext, useState } from 'react';

import { BASE_URl } from '../../../constants/constants';
import calculateDuration from '../../../utils/calculateDuration/calculateDuration';
import { deleteMovie, saveMovie } from '../../../utils/Api/MainApi';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

import style from './MoviesCard.module.css';


const MoviesCard = memo(function MoviesCard({ isSavedMoviesPage, savedMovie, card,
  handleDeleteCard, setErrorMessage }) {
  const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(Boolean(savedMovie));

  const handleAddMovie = () => {
    setErrorMessage('');
    saveMovie({
      country: card.country,
      description: card.description,
      director: card.director,
      duration: card.duration,
      nameEN: card.nameEN,
      nameRU: card.nameRU,
      trailerLink: card.trailerLink,
      year: card.year,
      image: `${BASE_URl}${card.image.url}`,
      thumbnail: `${BASE_URl}${card.image.formats.thumbnail.url}`,
      owner: currentUser._id,
      movieId: card.id,
    })
      .then((res) => {
        setIsSaved(true);
        card.movieId = card.id;
        card._id = res._id;
      })
      .catch(() => setErrorMessage('Произошла ошибка, попробуйте еще раз'));
  };

  const handleDeleteMovie = () => {
    setErrorMessage('');
    deleteMovie(card._id ? card._id : savedMovie._id)
      .then((res) => {
        if (isSavedMoviesPage) handleDeleteCard(res.movieId);
        setIsSaved(false);
      })
      .catch(() => setErrorMessage('Произошла ошибка, попробуйте еще раз'));
  };

  return (
    <li className={style.card}>
      <div className={style.card__info}>
        <h2 className={style.card__title}>{card.nameRU}</h2>
        <p className={style.card__duration}>{calculateDuration(card.duration)}</p>
      </div>
      <Link to={card.trailerLink} target="blank">
        <img className={style.card__image} src={isSavedMoviesPage ? card.image
          : `${BASE_URl}${card.image.url}`} alt={`Заставка фильма "${card.nameRU}"`} />
      </Link>
      <button className={`${style.card__button} ${isSavedMoviesPage ? style.card__button_saved
        : (isSaved ? style.card__button_selected : '')}`} type="button"
        onClick={isSaved ? handleDeleteMovie : handleAddMovie}>{isSavedMoviesPage || !isSaved && 'Сохранить'}</button>
    </li>
  );
});

export default MoviesCard;
