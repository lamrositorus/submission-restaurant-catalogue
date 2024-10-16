/* eslint-disable linebreak-style */
import FavoritRestaurantIdb from '../../data/favorit-restaurant-db.js';
import {
  createLikeTemplate
} from '../templates/template-creator.js';
const Like = {
  async render() {
    return `
            <div class="content">
                <h2 class="content__heading">Favorit Page</h2>
                <input id="search-restaurant" class="input" type="text" placeholder="Cari Restoran">
            </div>
            <div id="restaurant-likes" ></div>
        `;
  },

  async afterRender() {
    const likes = await FavoritRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-likes');
    likes.forEach((like) => {
      restaurantContainer.innerHTML += createLikeTemplate(like);
    });
    const searchElement = document.querySelector('#search-restaurant');
    searchElement.addEventListener('keyup', (e) => {
      const keyword = e.target.value;
      const filteredLikes = likes.filter((like) => {
        return like.name.toLowerCase().includes(keyword.toLowerCase());
      });
      restaurantContainer.innerHTML = '';
      filteredLikes.forEach((like) => {
        restaurantContainer.innerHTML += createLikeTemplate(like);
      });
    });
  }
};

export default Like;