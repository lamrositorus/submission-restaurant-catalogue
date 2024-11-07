/* eslint-disable linebreak-style */
import FavoritRestaurantIdb from '../data/favorit-restaurant-db.js';
import { createLikeRestaurantButtonTemplate, createLikedRestaurantButtonTemplate } from '../views/templates/template-creator.js';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    // console.log('Initializing with restaurant:', restaurant);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    const isRestaurantExist = await FavoritRestaurantIdb.getRestaurant(id);

    if (isRestaurantExist) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (!this._restaurant.id) {
        console.log('restaurant has no id');
        return;
      }
      await FavoritRestaurantIdb.putRestaurant(this._restaurant);
      const allRestaurant = await FavoritRestaurantIdb.getAllRestaurants();
      console.log('current restaurant in database', allRestaurant);
      this._renderLiked();
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (!this._restaurant.id) {
        console.log('restaurant has no id');
        return;
      }
      await FavoritRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderLike();
    });
  },
};

export default LikeButtonInitiator;

