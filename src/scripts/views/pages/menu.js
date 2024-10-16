/* eslint-disable linebreak-style */
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Menu = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <input id="search-restaurant" class="input" type="text" placeholder="Cari Restoran">
        </div>
        <div id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await SourceApiRestaurant.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const searchElement = document.querySelector('#search-restaurant');
    searchElement.addEventListener('keyup', (e) => {
      const keyword = e.target.value;
      const filteredRestaurants = restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(keyword.toLowerCase());
      });
      restaurantContainer.innerHTML = '';
      filteredRestaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    });
  }
};

export default Menu;