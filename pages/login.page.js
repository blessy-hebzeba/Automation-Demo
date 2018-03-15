import Page from './page';
/**
 * @class functions/login
 * @type {Page}
 */
class loginPage extends Page {
  /*
    define elements
  */
  get emailField () { return browser.element('//div[contains(@class,"group form-error")]//input'); }
  get createAccountButton () { return browser.element('//button[@id="SubmitCreate"]'); }
  get registeredEmailField () { return browser.element('//label[@for="email"]//following-sibling::input'); }
  get registeredPasswordField () { return browser.element('//input[@type="password"]'); }
  get signInButton () {return browser.element('//button[@id="SubmitLogin"]'); }

  /**
   * Functions
   */

  /**
   * Decides to sign up
   */
  goToSignUp (user) {
    this.emailField.waitForEnabled();
    this.emailField.setValue(user.email);
    this.createAccountButton.waitForEnabled();
    this.createAccountButton.click();
  }
}
