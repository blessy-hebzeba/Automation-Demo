import { Given, When, Then } from 'cucumber';
import accountPage from '../pages/account.page';
import { newUser } from '../data/user';

When(/^User registers as a new user$/, () => {
  let userDetails = newUser.new[0];
  accountPage.fillForm(userDetails);
});
