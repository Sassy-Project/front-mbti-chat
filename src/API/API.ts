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

interface ProfileData {
  email: string;
  loginId: string;
  mbti: string;
  nickname: string;
}

const API = {
  signUp: async (data: SignUpData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/signup`, data);
    return response;
  },

  checkId: async (loginId: string): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/signup/id`, loginId);
    return response;
  },

  checkEmail: async (email: string): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/signup/email`, email);
    return response;
  },

  logIn: async (data: LoginData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/login`, data);
    return response;
  },

  // getProfileData: async (data: ProfileData): Promise<AxiosResponse> => {
  //   const reponse = await defaultInstance.get(`users/${userId}`, data);
  //   return reponse;
  // },

  test: async (): Promise<AxiosResponse> => {
    const response = await defaultInstance.get(`hello`);
    return response;
  },
};

export default API;
