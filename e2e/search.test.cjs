/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
Feature('Search Restaurant');

Scenario('Mencari restoran yang ada di katalog', async ({ I }) => {
  I.amOnPage('/#/home');

  I.seeElement('#search-restaurant');

  const keyword = 'Kafe';

  I.fillField('#search-restaurant', keyword);

  I.see(keyword, '#restaurant-list');
});

Scenario('Mencari restoran yang tidak ada di katalog', async ({ I }) => {
  I.amOnPage('/#/home');
  I.seeElement('#search-restaurant');

  const keyword = 'Restoran';
  I.fillField('#search-restaurant', keyword);
  I.waitForElement('.restaurant-item__not__found');
  I.see('Restoran tidak ditemukan.', '.restaurant-item__not__found');
});

