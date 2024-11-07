/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser.js';
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import Swal from 'sweetalert2';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await SourceApiRestaurant.getDetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const addReviewButton = document.querySelector('#add-review');
    addReviewButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Mencegah form dari pengiriman default

      const name = document.querySelector('#review-form #name').value.trim();
      const review = document.querySelector('#review-form #review').value.trim();

      if (name && review) {
        const result = await Swal.fire({
          title: 'Do you want to submit the review?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: 'Don\'t save',
          icon: 'question',
        });

        if (result.isConfirmed) {
          try {
            await SourceApiRestaurant.addReview(url.id, name, review);
            // Tambahkan review baru ke daftar review
            const reviewList = document.getElementById('review-list');
            reviewList.innerHTML += `
              <div class="restaurant-detail__content__review__item">
                  <h4>${name}</h4>
                  <p>${review}</p>
              </div>
            `;
            Swal.fire('Saved!', '', 'success');
            document.querySelector('#review-form').reset(); // Reset form setelah berhasil
          } catch (error) {
            Swal.fire('Error!', 'There was a problem saving your review.', 'error');
          }
        } else {
          Swal.fire('Cancelled', '', 'error');
        }
      } else {
        Swal.fire('Please fill out both fields.', '', 'warning');
      }
    });
  },
};

export default Detail;
