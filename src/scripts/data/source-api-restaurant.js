/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint.js';

class SourceApiRestaurant {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
  static async addReview(id, name, review) {
    console.log('Data dikirim:', { id, name, review });
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorMessage}`);
    }

    const responseJson = await response.json();
    console.log('Response diterima:', responseJson);
    return responseJson;
  }
  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }


}
export default SourceApiRestaurant;