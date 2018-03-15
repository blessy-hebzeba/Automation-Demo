import { Given, When, Then } from 'cucumber';
import accountPage from '../functions/account.page';

When(/^User registers as a new user$/, () => {
  accountPage.fillForm();
});
