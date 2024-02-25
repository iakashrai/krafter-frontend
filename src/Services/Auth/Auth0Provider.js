import React, { useState, useEffect, useContext, createContext } from 'react';
import {createAuth0Client} from '@auth0/auth0-spa-js';

const Auth0Context = createContext();
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export const useAuth = () => {
  return useContext(Auth0Context);
};

export const Auth0Provider = ({ children }) => {
  const [auth0Client, setAuth0Client] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0 = await createAuth0Client({
        domain: domain,
        client_id: clientId,
      });
      setAuth0Client(auth0);

      if (window.location.search.includes('code=')) {
        await auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, '/');
      }

      const isAuthenticated = await auth0.isAuthenticated();

      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }
    };

    initAuth0();
  }, []);

  const login = () => auth0Client.loginWithRedirect();
  const logout = () => {
    auth0Client.logout();
    setUser(null);
  };

  return (
    <Auth0Context.Provider value={{ user, login, logout }}>
      {children}
    </Auth0Context.Provider>
  );
};

