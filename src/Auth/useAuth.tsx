import { AxiosResponse } from 'axios';
import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { UserData } from '../components/LoginForm';

type TokenContextType = {
  token: string;
  login: (response: AxiosResponse<UserData>) => void;
  logout: () => void;
};

export const TokenContext = createContext<TokenContextType>({
  token: '',
  login: () => {},
  logout: () => {},
});

export const TokenProvider = ({ children }: any) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken !== token) {
        setToken(storedToken);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [token]);

  const login = useCallback(
    (response: AxiosResponse<UserData>) => {
      const { accessToken, accessTokenExpiresIn, id, nickname, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('accessTokenExpiresIn', String(accessTokenExpiresIn));
      localStorage.setItem('id', String(id));
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('refreshToken', refreshToken);
      setToken(accessToken);
    },
    [setToken]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    setToken('');
  }, [setToken]);

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token, login, logout]
  );

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};
