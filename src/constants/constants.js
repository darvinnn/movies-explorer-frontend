// eslint-disable-next-line max-len
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BASE_URl = 'https://api.nomoreparties.co';
const MOVIES_URL = `${BASE_URl}/beatfilm-movies`;
// const MOVIES_EXPLORER_API_URL = 'http://localhost:3001';
const MOVIES_EXPLORER_API_URL = 'https://api.nikolaev-maxim-diplom.nomoreparties.co';

export {
  emailRegExp,
  BASE_URl,
  MOVIES_URL,
  MOVIES_EXPLORER_API_URL,
};
