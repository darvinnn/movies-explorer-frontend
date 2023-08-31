import { MOVIES_URL } from '../../constants/constants';

const getCards = () => {
  return fetch(MOVIES_URL)
    .then(_checkResponse);
};

const _checkResponse = (res) => {
  if (res.ok) return res.json();
  else throw new Error(`Ошибка: ${res.status}`);
};


export {
  getCards,
};
