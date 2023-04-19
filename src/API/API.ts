import { AxiosResponse } from 'axios';
import { defaultInstance } from './customAPI';

interface SignUpData {
  loginId: string;
  nickname: string;
  password: string;
  email: string;
  mbti: string;
  gender: string;
}

interface LoginData {
  loginId: string;
  password: string;
}

interface CheckIdData {
  loginId: string;
}

interface CheckEmailData {
  email: string;
}

const API = {
  signUp: async (data: SignUpData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/signup`, data);
    return response;
  },

  checkId: async (loginId: CheckIdData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/signup/id`, loginId);
    return response;
  },

  checkEmail: async (email: CheckEmailData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/signup/email`, email);
    return response;
  },

  logIn: async (data: LoginData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/login`, data);
    return response;
  },

  test: async (): Promise<AxiosResponse> => {
    const response = await defaultInstance.get(`hello`);
    return response;
  },
};

export default API;
