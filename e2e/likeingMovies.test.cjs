/* eslint-disable no-undef */ /* eslint-disable linebreak-style */
const assert  = require('assert');
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#search-restaurant');
  I.see('Tidak ada restaurant untuk ditampilkankan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkankan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await  I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#restaurant-likes');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-likes h3');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantName);
});

Scenario('searching restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkankan', '.restaurant-item__not__found');
  I.amOnPage('/');

  const title = [];
  for (let i = 1; i <= 3; i += 1) {
    I.seeElement('.restaurant-item__content h3 a');
    const restaurantLink = locate('.restaurant-item__content h3 a').at(i);
    const restaurantTitle = await I.grabTextFrom(restaurantLink);
    I.click(restaurantLink);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    title.push(restaurantTitle); // Simpan judul restoran yang disukai
    I.amOnPage('/'); // Kembali ke halaman utama
  }

  I.amOnPage('/#/like');
  I.seeElement('#search-restaurant');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-likes');
  assert.strictEqual(title.length, visibleLikedRestaurants, 'Jumlah restoran yang disukai tidak sesuai.');

  const searchRestaurant = title[1].substring(1, 3); // Ambil substring dari judul restoran
  I.fillField('#search-restaurant', searchRestaurant);
  I.pressKey('Enter');

  // Ambil restoran yang cocok dengan pencarian
  const matchingRestaurant = title.filter((t) => t.includes(searchRestaurant));
  const visibleMatchingRestaurants = await I.grabNumberOfVisibleElements('.restaurant-likes');

  assert.strictEqual(matchingRestaurant.length, visibleMatchingRestaurants, 'Jumlah restoran yang terlihat tidak sesuai setelah pencarian.');

  // Mengambil dan memeriksa judul restoran yang terlihat
  for (let i = 0; i < matchingRestaurant.length; i += 1) {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant-likes__content h3').at(i + 1)); // Perbaikan di sini
    assert.strictEqual(visibleTitle, matchingRestaurant[i], `Judul restoran yang terlihat tidak sesuai: ${visibleTitle}`);
  }
});
