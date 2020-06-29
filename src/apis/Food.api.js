import {getApi} from '../utils/axios';

const subURL = 'food/';
const apiKey = 'e90aa13b40b94b43bfa454f6f589e26e';

class FoodApi {
  constructor() {
    this.api = getApi();
  }

  setApi(api) {
    this.api = api;
  }

  async detectIngredients(text) {
    let fetchParams = {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    };
    let url = `https://api.spoonacular.com/${subURL}detect?apiKey=${apiKey}&text=${text}`;

    return new Promise((resolve, reject) => {
      fetch(url, fetchParams)
        .then((res) => res.json())
        .then((responseJson) => {
          console.log(responseJson);
          return resolve(responseJson);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }

  async chat(text) {
    try {
      var res = await this.api.get(
        `${subURL}converse?apiKey=${apiKey}&text=${text}`,
      );
      return res.data;
    } catch (e) {
      throw e.response.data;
    }
  }

  async jokes() {
    try {
      var res = await this.api.get(`${subURL}jokes/random?apiKey=${apiKey}`);
      return res.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

var foodApi = new FoodApi();
export default foodApi;
