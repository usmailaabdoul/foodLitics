import {getApi} from '../utils/axios';

const subURL = 'recipes/';
const apiKey = 'e90aa13b40b94b43bfa454f6f589e26e';

class MealsApi {
  constructor() {
    this.api = getApi();
  }

  setApi(api) {
    this.api = api;
  }

  async suggestedMeals() {
    try {
      var res = await this.api.get(`${subURL}random?apiKey=${apiKey}&number=5`);
      return res.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

var mealsApi = new MealsApi();
export default mealsApi;
