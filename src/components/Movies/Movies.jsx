import { useEffect, useState } from 'react';

import { getCards } from '../../utils/Api/MoviesApi.js';
import useInput from '../../utils/Validation/Validation.jsx';
import Preloader from '../Preloader/Preloader.jsx';

import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

import style from './Movies.module.css';

function Movies() {
  const [cards, setCards] = useState([]);
  const [requestIsSent, setRequestIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const searchInput = useInput('', { isEmpty: null });
  const localStorageRequest = JSON.parse(localStorage.getItem('searchRequest'));

  useEffect(() => {
    if (localStorageRequest) {
      searchInput.onChange({
        target: {
          value: localStorageRequest.fieldText,
        },
      });
      setCards(localStorageRequest.cards);
      setIsChecked(localStorageRequest.isChecked);
    }
  }, []);

  const handleCheckbox = () => setIsChecked(!isChecked);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequestIsSent(true);
    if (!searchInput.isValidInput) return;
    setCards([]);
    setIsLoading(true);
    setIsError(false);
    getCards()
      .then(res => {
        setCards(res);
        setIsLoading(false);
        const searchRequest = {
          fieldText: searchInput.value,
          cards: res,
          isChecked: isChecked,
        };
        localStorage.setItem('searchRequest', JSON.stringify(searchRequest));
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
    <main className={style.movies}>
      <SearchForm onSubmit={handleSubmit} searchInput={searchInput} requestIsSent={requestIsSent}
        setRequestIsSent={setRequestIsSent} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      <div className={style.movies__line} />
      {showContent()}
    </main>
  );
}

export default Movies;
