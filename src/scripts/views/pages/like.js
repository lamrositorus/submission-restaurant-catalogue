/* eslint-disable linebreak-style */
import SourceApiRestaurant from '../../data/source-api-restaurant.js';
const Like = {
  async render() {
    return `
            <div class="content">
                <h2 class="content__heading">Favorit Page</h2>
            </div>
        `;
  },

  async afterRender() {
    const likes = await SourceApiRestaurant.getLikeRestaurant();
    console.log(likes);
  }
};

export default Like;