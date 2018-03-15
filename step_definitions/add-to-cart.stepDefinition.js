import { Given, When, Then } from 'cucumber';
import addToCartPage from '../functions/addToCart.page';
import loginPage from '../functions/login.page';

Given(/^User goes to the Home Page$/, () => {
  addToCartPage.goToHomePage();
});

When(/^User goes to Login Page$/, () => {
  addToCartPage.goToLogin();
});

When(/^User searches for a product$/, () => {
  addToCartPage.searchProduct();
});

Then(/^User validates the search results$/, () => {
  addToCartPage.validateSearchResult();
});

Then(/^User adds product to the cart$/, () => {
  addToCartPage.addToCart();
});

Then(/^User triggers checkout$/, () =>{
  addToCartPage.triggerCheckout();
});
