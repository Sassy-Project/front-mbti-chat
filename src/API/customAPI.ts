/* eslint-disable no-console */ // MVP완료되면 console.log는 지우겠습니다.
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const APIbaseURL = 'http://15.165.150.50:8080/';

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
  instance.defaults.timeout = 2500; // 2.5초
  return instance;
};

export const defaultInstance = axiosApi(APIbaseURL);
