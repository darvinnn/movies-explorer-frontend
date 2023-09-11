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

const getUser = () => {
  return _request('/users/me', {
    method: 'GET',
    credentials: 'include',
  });
};

const logout = () => {
  return fetch(`${MOVIES_EXPLORER_API_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
  })
    .then((res) => {
      if (res.ok) return res;
      else throw res;
    });
};

const updateUser = ({ name, email }) => {
  return _request('/users/me', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  });
};

const saveMovie = (movie) => {
  return _request('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(movie),
  });
};

const deleteMovie = (id) => {
  return _request(`/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};

const getMovies = () => {
  return _request('/movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};

const _request = (endpoint, fetchObject) => {
  return fetch(`${MOVIES_EXPLORER_API_URL}${endpoint}`, fetchObject)
    .then(_checkResponse);
};

const _checkResponse = (res) => {
  if (res.ok) return res.json();
  else throw res;
};

export {
  getMovies,
  login,
  register,
  getUser,
  logout,
  updateUser,
  saveMovie,
  deleteMovie,
};
