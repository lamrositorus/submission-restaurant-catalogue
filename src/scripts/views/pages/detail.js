/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser.js';
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
import {
  createRestaurantDetailTemplate
} from '../templates/template-creator.js';
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
    console.log(addReviewButton);
    addReviewButton.addEventListener('click', async () => {
      const name = document.querySelector('#review-form #name').value.trim();
      const review = document.querySelector('#review-form #review').value.trim();

      if (name && review) {
        Swal.fire({
          title: 'Do you want to submit the review?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: 'Dont save',
          icon: 'question',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success');
            (async () => {
              await SourceApiRestaurant.addReview(url.id, name, review);
              window.location.reload();
            })();
          } else {
            Swal.fire('Cancelled', '', 'error');
          }
        });
      }
    });
  },
};

export default Detail;