import 'regenerator-runtime';
import '../style/style.css';
import '../style/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';
import FavoritRestaurantIdb from './data/favorit-restaurant-db.js';
window.FavoritRestaurantIdb = FavoritRestaurantIdb; // Agar bisa diakses di konsol

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});