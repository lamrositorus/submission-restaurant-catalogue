/* eslint-disable linebreak-style */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
    <div class="restaurant-item">
        <picture>
            <source type="image/webp" data-srcset="./images/processed/${restaurant.pictureId}-webp-small.webp" media="(min-width: 601px)">
            <source type="image/jpeg" data-srcset="./images/${restaurant.pictureId}-small.jpg" media="(min-width: 601px)">
            <source type="image/webp" data-srcset="./images/processed/${restaurant.pictureId}-webp-small.webp" media="(max-width: 600px)">
            <source type="image/jpeg" data-srcset="./images/${restaurant.pictureId}-small.jpg" media="(max-width: 600px)">
            <img class="restaurant-item__thumbnail lazyload" data-src="./images/${restaurant.pictureId}-jpg-small.jpg" alt="${restaurant.name}" data-parent-fit="cover">
        </picture>
        <div class="restaurant-item__content">
            <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3> <!-- Pastikan id restoran diteruskan di sini -->
            <p class="restaurant-item_P">Kota: ${restaurant.city}</p>
            <p class="restaurant-item_P">Rating: <strong>${restaurant.rating}</strong></p>
        </div>
    </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-detail">
    <div class="restaurant-detail__header">
        <picture>
            <source type="image/webp" data-srcset="./images/processed/${restaurant.pictureId}-webp-small.webp" media="(min-width: 601px)">
            <source type="image/jpeg" data-srcset="./images/${restaurant.pictureId}-small.jpg" media="(min-width: 601px)">
            <source type="image/webp" data-srcset="./images/processed/${restaurant.pictureId}-webp-small.webp" media="(max-width: 600px)">
            <source type="image/jpeg" data-srcset="./images/${restaurant.pictureId}-small.jpg" media="(max-width: 600px)">
            <img class="restaurant-item__thumbnail lazyload" data-src="./images/${restaurant.pictureId}-jpg-small.jpg" alt="${restaurant.name}" data-parent-fit="cover">
        </picture>
        <div class="restaurant-detail__header__rating">
            <p>Rating: <strong>${restaurant.rating}</strong></p>
        </div>
    </div>
    <div class="card">
        <div class="restaurant-detail__content">
            <h2 class="restaurant-detail__content__title">${restaurant.name}</h2>
            <p>${restaurant.description}</p>
        </div>
    </div>

    <div class="restaurant-detail__content__menu">
        <h3>Menu</h3>
        <h3>Foods</h3>
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
<h3>Customer Review</h3>
<div class="restaurant-detail__content__review" id="review-list">
    ${(restaurant.customerReviews || []).map((review) => `
        <div class="restaurant-detail__content__review__item">
            <h4>${review.name}</h4>
            <p>${review.review}</p>
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
        <button id="add-review" type="submit">
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
            </svg>
            </div>
        </div>
        <span>Send</span>
        </button>

    </form>
</div>
`;

const createLikeTemplate = (restaurant) => `

    <div class="card">
        <div class="restaurant-likes">
            <picture>
                <source type="image/webp" data-srcset="./images/processed/${restaurant.pictureId}-webp-small.webp"
                    media="(min-width: 601px)">
                <source type="image/jpeg" data-srcset="./images/${restaurant.pictureId}-small.jpg"
                    media="(min-width: 601px)">
                <source type="image/webp" data-srcset="./images/processed/${restaurant.pictureId}-webp-small.webp"
                    media="(max-width: 600px)">
                <source type="image/jpeg" data-srcset="./images/${restaurant.pictureId}-small.jpg"
                    media="(max-width: 600px)">
                <img class="restaurant-item__thumbnail lazyload"
                    data-src="./images/${restaurant.pictureId}-jpg-small.jpg" alt="${restaurant.name}"
                    data-parent-fit="cover">
            </picture>
            <div class="restaurant-likes__content">
                <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
                <p class="restaurant-likes_P">Kota: ${restaurant.city}</p>
                <p class="restaurant-likes_P">Rating: <strong>${restaurant.rating}</strong></p>
            </div>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLoaderTemplate = () => `
<div class="loader"></div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
  createLoaderTemplate,
  createLikeTemplate
};
