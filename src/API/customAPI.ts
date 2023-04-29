/* eslint-disable no-console */ // MVP완료되면 console.log는 지우겠습니다.
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const APIbaseURL = 'http://api.projectsassy.net:8080/';

const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: APIbaseURL,
    ...options,
  });

  instance.interceptors.response.use(
    (response) => {
      console.log('interceptor > response', response);
      return response;
    },
    (error) => {
      console.log('interceptor > error', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (request) => {
      console.log('interceptor > request', request);
      return request;
    },
    (error) => {
      console.log('interceptor > error', error);
      return Promise.reject(error);
    }
  );

  instance.defaults.timeout = 5000; // 5초
  return instance;
};

const axiosAuthTokenApi = ({ options }: any) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const instance = axios.create({
    baseURL: APIbaseURL,
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });
  instance.interceptors.response.use(
    (response) => {
      console.log('interceptor > response', response);
      return response;
    },
    (error) => {
      console.log('interceptor > error', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (request) => {
      console.log('interceptor > request', request);
      return request;
    },
    (error) => {
      console.log('interceptor > error', error);
      return Promise.reject(error);
    }
  );

  instance.defaults.timeout = 2500; // 2.5초
  return instance;
};

export const defaultInstance = axiosApi(APIbaseURL);
export const AuthTokenInstance = axiosAuthTokenApi(APIbaseURL);
