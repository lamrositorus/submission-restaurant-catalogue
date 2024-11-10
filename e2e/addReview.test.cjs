/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
Feature('adding review');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('adding review', async ({ I }) => {
  I.seeElement('.restaurant-item__content h3 a');
  I.click('.restaurant-item__content h3 a');
  I.seeElement('.form-group input');
  const addNameReview = 'Lamro';
  I.fillField('.form-group #name', addNameReview);
  I.seeElement('.form-group #review');
  const addReview = 'Tidak enak';
  I.fillField('.form-group #review', addReview);
  I.seeElement('#add-review');
  I.click('#add-review');

});