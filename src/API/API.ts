import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

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

interface UpdateProfileData {
  email: string;
  userId: string;
  mbti: string;
  nickname: string;
  gender: string;
}

interface GetProfileData {
  userId: string;
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

  updateProfile: async (data: UpdateProfileData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/${data.userId}`, data);
    return response;
  },

  getProfile: async (data: GetProfileData): Promise<AxiosResponse> => {
    const response = await AuthTokenInstance.get(`users/${data.userId}`);
    return response;
  },

  test: async (): Promise<AxiosResponse> => {
    const response = await defaultInstance.get(`hello`);
    return response;
  },
};

export default API;
