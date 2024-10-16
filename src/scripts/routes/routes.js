/* eslint-disable linebreak-style */
import Menu from '../views/pages/menu.js';
import Like from '../views/pages/like.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Menu,
  '/menu': Menu,
  '/like': Like,
  '/detail/:id': Detail
};
export default routes;