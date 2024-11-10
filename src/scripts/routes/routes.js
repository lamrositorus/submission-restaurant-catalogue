/* eslint-disable linebreak-style */
import Dashboard from '../views/pages/dashboard.js';
import Favorite from '../views/pages/favorite.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/favorite': Favorite,
  '/detail/:id': Detail
};
export default routes;