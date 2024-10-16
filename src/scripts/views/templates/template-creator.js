/* eslint-disable linebreak-style */

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
      <img class="restaurant-item__thumbnail" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-item__content">
          <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3> <!-- Pastikan id restoran diteruskan di sini -->
          <p>${restaurant.description}</p>
          <p class="restaurant-item_P">Kota: ${restaurant.city}</p>
          <p class="restaurant-item_P">Rating: <strong>${restaurant.rating}</strong></p>
      </div>
  </div>
`;


const createRestaurantDetailTemplate = (restaurant) => `
      <div class="restaurant-detail">
          <div class="restaurant-detail__header">
              <img class="restaurant-detail__header__image" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
              <div class="restaurant-detail__header__rating">
                  <p>Rating: <strong>${restaurant.rating}</strong></p>
              </div>
          </div>
          <div class="restaurant-detail__content">
              <h2 class="restaurant-detail__content__title">${restaurant.name}</h2>
              <p>${restaurant.description}</p>
              <h3>Menu</h3>
              <div class="restaurant-detail__content__menu">
              <h3> Foods</h3>
                  <ul>
                      ${(restaurant.menus?.foods || []).map((food) => `
                          <li>${food.name}</li>
                      `).join('')}
                  </ul>
              <h3>Drinks</h3>
                  <ul>
                      ${(restaurant.menus?.drinks || []).map((drink) => `
                          <li>${drink.name}</li>
                      `).join('')}
                  </ul>
              </div>
              </div>
              </div>
              <h3>Customer Review</h3>
              <div class="restaurant-detail__content__review">
                  ${(restaurant.customerReviews || []).map((review) => `
                      <div class="restaurant-detail__content__review__item">
                          <h4 id="name">${review.name}</h4>
                          <p id="review">${review.review}</p>
                      </div>
                  `).join('')}
              </div>
              <div class="add-review"> 
                  <h3 id="add-review-title">Add Review</h3>
                  <form id="review-form">
                      <div class="form-group">
                          <label for="name">Name</label>
                          <input id="name" type="text" placeholder="Your name" required>
                      </div>
                      <div class="form-group">
                          <label for="review">Review</label>
                          <textarea id="review" rows="5" placeholder="Your review" required></textarea>                    
                      </div>
                      <button id="add-review" type="submit">Submit Review</button>
              </div>
              
    `;
const createLikeTemplate = (restaurant)=>`
<div class="restaurant-likes">
      <img class="restaurant-likes__thumbnail" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-likes__content">
          <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3> <!-- Pastikan id restoran diteruskan di sini -->
          <p>${restaurant.description}</p>
          <p class="restaurant-likes_P">Kota: ${restaurant.city}</p>
          <p class="restaurant-likes_P">Rating: <strong>${restaurant.rating}</strong></p>
      </div>
  </div>
`;
const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;
const createLoaderTemplate = () => `
<div class="loader"></div>`;


export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoaderTemplate,
  createLikeTemplate
};