/* eslint-disable linebreak-style */
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <input id="search-restaurant" class="input" type="text" placeholder="Cari Restoran">
      </div>
      <div id="hero-img">
        <picture>
          <source type="image/webp" srcset="./images/processed/hero-image_2-webp-small.webp" media="(max-width: 600px)">
          <source type="image/jpeg" srcset="./images/processed/hero-image_2-small.jpg" media="(max-width: 600px)">
          <source type="image/webp" srcset="./images/processed/hero-image_2-webp-large.webp" media="(min-width: 601px)">
          <source type="image/jpeg" srcset="./images/processed/hero-image_2-small.jpg" media="(min-width: 601px)">
          <img src="./images/processed/hero-image_2-jpg-small.jpg" alt="Hero Image">
        </picture>        
      </div>
      <section id="restaurant-list" tabindex="-1" aria-label="Restaurant List"></section>
    `;
  },

  async afterRender() {
    const restaurants = await SourceApiRestaurant.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    const heroElement = document.querySelector('#hero-img');

    // Tampilkan semua restoran pada awalnya
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // Search functionality
    const searchElement = document.querySelector('#search-restaurant');
    searchElement.addEventListener('keyup', (e) => {
      const keyword = e.target.value.toLowerCase();
      const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(keyword)
      );

      // Kosongkan kontainer sebelum menampilkan hasil pencarian
      restaurantContainer.innerHTML = '';

      // Sembunyikan hero element saat pencarian aktif
      if (keyword) {
        heroElement.classList.add('hidden');
      } else {
        heroElement.classList.remove('hidden');
      }

      // Jika ada hasil pencarian, tampilkan restoran yang sesuai
      if (filteredRestaurants.length > 0) {
        filteredRestaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        // Jika tidak ada hasil pencarian, tampilkan pesan "Restoran tidak ditemukan"
        console.log('Restoran tidak ditemukan');
        restaurantContainer.innerHTML = `
          <div class="restaurant-item__not__found">
            <p>Restoran tidak ditemukan.</p>
          </div>
        `;
      }
    });
  }
};

export default Home;

