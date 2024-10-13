/* eslint-disable linebreak-style */
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';
const Menu = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <div id="restaurant-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await SourceApiRestaurant.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default Menu;