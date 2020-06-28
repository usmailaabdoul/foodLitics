import axios from 'axios';
import urls from './urls';

const baseURL = urls.baseURL;

var axiosInstant = null;
export function getApi() {
  axiosInstant = axios.create({
    baseURL: baseURL,
    timeout: 0,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  axiosInstant.cancelToken = axios.CancelToken;
  axiosInstant.isCancel = axios.isCancel;
  axiosInstant.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });
  return axiosInstant;
}
