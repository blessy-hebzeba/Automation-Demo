import { Given, When, Then } from 'cucumber';
import loginPage from '../functions/login.page';

When(/^User decides to sign up$/, () => {
  loginPage.goToSignUp();
});
