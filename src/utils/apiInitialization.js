import {getApi} from './axios';
import mealsApi from '../apis/Meals.api';
import foodApi from '../apis/Food.api';

export function initializaApis() {
  const api = getApi();

  mealsApi.setApi(api);
  foodApi.setApi(api);
}
