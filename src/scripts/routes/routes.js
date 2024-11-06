/* eslint-disable linebreak-style */
import Dashboard from '../views/pages/dashboard.js';
import Like from '../views/pages/like.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/like': Like,
  '/detail/:id': Detail
};
export default routes;