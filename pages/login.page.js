import Page from './page';
/**
 * @class functions/login
 * @type {Page}
 */
class loginPage extends Page {
  /*
    define elements
  */
  get signUpArea () { return browser.element('(//div[@class="form_content clearfix"])[1]'); }
  get emailField () { return browser.element('//input[@id="email_create"]'); }
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
  goToSignUp (email) {
    const signUpAreaPos = browser.elementIdLocation(this.signUpArea.value.ELEMENT);
    browser.scroll(signUpAreaPos.value.x, signUpAreaPos.value.y);
    this.emailField.waitForEnabled();
    this.emailField.setValue(email);
    this.createAccountButton.waitForEnabled();
    this.createAccountButton.click();
  }
}
export default new loginPage();
