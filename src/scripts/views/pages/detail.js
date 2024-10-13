/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser.js';
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import Swal from 'sweetalert2';
const Detail = {
  async render() {
    return `
      <div id="restaurant-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await SourceApiRestaurant.getDetailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const addReviewButton = document.querySelector('#add-review');
    console.log(addReviewButton);
    addReviewButton.addEventListener('click', async () => {
      const name = document.querySelector('#review-form #name').value.trim();
      const review = document.querySelector('#review-form #review').value.trim();

      if (name && review) {
        Swal.fire({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success',
          confirmButtonText: 'Cool',
          preConfirm: async () => {
            await SourceApiRestaurant.addReview(url.id, name, review);
            window.location.reload();
          }
        }).then((result)=>{
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  },
};

export default Detail;