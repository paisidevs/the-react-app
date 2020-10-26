import axios, { AxiosResponse } from 'axios';
import { API_HOST } from '../constants';

const BASE = API_HOST || '';

export type StrapiLoginPayload = {
  jwt: string;
  user: any;
};

export const socialAuth = async (
  provider: string,
  accessToken: string,
): Promise<AxiosResponse<StrapiLoginPayload>> => {
  try {
    return await axios.get(
      BASE + '/auth/' + provider + '/callback' + accessToken,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
