/* eslint-disable linebreak-style */
// /* eslint-disable linebreak-style */
// const API_ENDPOINT = 'https://restaurant-api.dicoding.dev/';
// const getRestaurants = async ()=>{
//   try {
//     const response = await fetch(`${API_ENDPOINT  }list`);
//     const responseJson = await response.json();
//     if (!responseJson.error) {
//       return responseJson.restaurants;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { getRestaurants };
const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'RestaurantCatalog-V1',
  DATABASE_NAME:'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;