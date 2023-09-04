import { MOVIES_EXPLORER_API_URL } from '../../constants/constants.js';

const login = ({ email, password }) => {
  return _request('/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

const register = ({ name, email, password }) => {
  return _request('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });
};

const _request = (endpoint, fetchObject) => {
  return fetch(`${MOVIES_EXPLORER_API_URL}${endpoint}`, fetchObject)
    .then(_checkResponse);
};

const _checkResponse = (res) => {
  if (res.ok) return res.json();
  else throw new Error(`Ошибка: ${res.status}`);
};

export {
  login,
  register,
};
