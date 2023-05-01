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

export interface UpdateProfileData {
  userId?: string;
  email: string;
  loginId: string;
  mbti: string;
  nickname: string;
  gender: string;
}

interface GetProfileData {
  userId: string;
}

interface CheckIdData {
  loginId: string;
}

interface CheckEmailData {
  email: string;
}

interface CheckEmailCodeData {
  email: string;
}

interface GetLoginIdData {
  email: string;
  code: string;
}

interface findPasswordData {
  code: string;
  email: string;
  loginId: string;
}

interface updateFindNewPasswordData {
  newPassword: string;
  newPasswordCheck: string;
  userId: number;
}

interface signOutData {
  userId: string;
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

  updateProfile: async (data: UpdateProfileData): Promise<AxiosResponse> => {
    const { userId, ...restData } = data;
    const response = await AuthTokenInstance.patch(`users/${userId}`, restData);
    return response;
  },

  getProfile: async (data: GetProfileData): Promise<AxiosResponse> => {
    const response = await AuthTokenInstance.get(`users/${data.userId}`);
    return response;
  },

  checkEmailCode: async (email: CheckEmailCodeData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/email`, email);
    return response;
  },

  getLoginId: async (data: GetLoginIdData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/find/id`, data);
    return response;
  },

  findPassword: async (data: findPasswordData): Promise<AxiosResponse> => {
    const response = await defaultInstance.post(`users/find/password`, data);
    return response;
  },

  updateFindNewPassword: async (data: updateFindNewPasswordData): Promise<AxiosResponse> => {
    const response = await AuthTokenInstance.patch(`/users/find/new/password`, data);
    return response;
  },

  deleteUserId: async (data: signOutData): Promise<AxiosResponse> => {
    const response = await AuthTokenInstance.delete(`users/${data.userId}`);
    return response;
  },

  test: async (): Promise<AxiosResponse> => {
    const response = await defaultInstance.get(`hello`);
    return response;
  },
};

export default API;
