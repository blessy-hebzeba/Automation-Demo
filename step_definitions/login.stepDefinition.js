import { Given, When, Then } from 'cucumber';
import loginPage from '../pages/login.page';

When(/^User decides to sign up$/, () => {
  const email = 'test' + new Date().getTime() + '@test.com';
  loginPage.goToSignUp(email);
});
