import { useState } from 'react';

import useInput from '../../utils/Validation/Validation.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';
import { getCards } from '../../utils/Api/MoviesApi.js';
import Preloader from '../Preloader/Preloader.jsx';

import style from './SavedMovies.module.css';

function SavedMovies() {
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [requestIsSent, setRequestIsSent] = useState(false);
  const searchInput = useInput('', { isEmpty: null });

  const handleCheckbox = () => setIsChecked(!isChecked);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequestIsSent(true);
    if (!searchInput.isValidInput) return;
    setCards([]);
    setIsLoading(true);
    setIsError(false);
    console.log('поменять апи к сохраненным фильмам');
    getCards()
      .then(res => {
        setCards(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const showContent = () => {
    if (isError) return (
      <p className={`${style.movies__text} ${style.movies__text_error}`}>Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
    );
    if (isLoading) return <Preloader />;
    else if (searchInput.isValidInput && requestIsSent && cards.length === 0) {
      return (<p className={style.movies__text}>Ничего не найдено</p>);
    }
    else return (<MoviesCardList cards={cards} />);
  };

  return (
    <main className={style.savedMovies}>
      <SearchForm onSubmit={handleSubmit} searchInput={searchInput} requestIsSent={requestIsSent}
        setRequestIsSent={setRequestIsSent} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      <div className={style.savedMovies__line} />
      {showContent()}
    </main>
  );
}

export default SavedMovies;
