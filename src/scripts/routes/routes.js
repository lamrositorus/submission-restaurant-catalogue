/* eslint-disable linebreak-style */
import Dashboard from '../views/pages/dashboard.js';
import Lavorite from '../views/pages/favorite.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/like': Lavorite,
  '/detail/:id': Detail
};
export default routes;