import axios from 'axios';
import {BASE_URL, URL} from './url';

// axios instance for oauth http request
export const instanceWithoutAuth = axios.create({
  baseURL: BASE_URL,
});

export default class HttpBaseClient {
  /**
   * get method are used to access the get request API call
   * @param {*} url only end point
   * @param {*} params
   */
  static get(url, params = {}) {
    return new Promise((resolve, reject) => {
      const config = {
        params,
      };
      let instance = instanceWithoutAuth;
      instance
        .get(url, config)
        .then(response => {
          return resolve(response.data);
        })
        .catch(error => {
          return reject(error.message);
        });
    });
  }
}
