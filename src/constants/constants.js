// eslint-disable-next-line max-len
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BASE_URl = 'https://api.nomoreparties.co';
const MOVIES_URL = `${BASE_URl}/beatfilm-movies`;

export {
  emailRegExp,
  BASE_URl,
  MOVIES_URL,
};
