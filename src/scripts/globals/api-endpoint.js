/* eslint-disable linebreak-style */
import CONFIG from './config.js';

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  LIKE: (id) => `${CONFIG.BASE_URL}like/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  SEARCH: `${CONFIG.BASE_URL}search`,
};

export default API_ENDPOINT;