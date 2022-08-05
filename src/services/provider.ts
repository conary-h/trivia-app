import axios from 'axios';
import { handleResponse, handleError } from './response';

const BASE_URL = 'https://opentdb.com/api.php';

/** @param {string} difficulty */
/** @param {number} amount */
/** @param {boolean} type */

type getQuestionsTypes = {
  type: string;
  difficulty: string;
  amount: number;
};

export const getQuestionsByType = ({
  type = 'boolean',
  difficulty = 'easy',
  amount = 20
}: getQuestionsTypes) => {
  return axios
    .get(`${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`)
    .then(handleResponse)
    .catch(handleError);
};
