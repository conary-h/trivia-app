import axios from 'axios';
import { handleResponse, handleError } from './response';

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = 'https://opentdb.com/api.php';

/** @param {string} difficulty */
/** @param {number} amount */
/** @param {boolean} type */

export const getAll = ({ type, difficulty, amount }) => {
  return axios
    .get(`${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`)
    .then(handleResponse)
    .catch(handleError);
};
