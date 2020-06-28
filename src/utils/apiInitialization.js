import {getApi} from './axios';
import mealsApi from '../apis/Meals.api';

export function initializaApis() {
  const api = getApi();

  mealsApi.setApi(api);
}
