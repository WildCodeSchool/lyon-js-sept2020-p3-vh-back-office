// in src/authProvider.js
export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request('http://localhost:5000/auth/bo-login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Identifiants non reconnus');
        }
        return response;
      })
      .then((auth) => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('auth');
    const request = new Request('http://localhost:5000/auth/logout', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(() => {
        return Promise.resolve();
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
