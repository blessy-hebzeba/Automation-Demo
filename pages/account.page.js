import Page from './page';
/**
 * @class functions/account
 */
class accountPage extends Page {
  /*
    define elements
  */
  get title () { return browser.element('//div[@class="clearfix"]//input[@value="1"]'); }
  get customerFirstName () { return browser.element('//label[@for="customer_firstname"]//following-sibling::input'); }
  get customerLastName () { return browser.element('//label[@for="customer_lastname"]//following-sibling::input'); }
  get emailField () { return browser.element('//label[@for="email"]//following-sibling::input'); }
  get passwordField () { return browser.element('//label[@for="passwd"]//following-sibling::input'); }
  get daysDropdown () { return browser.element('//select[@id="days"]'); }
  get monthDropdown () { return browser.element('//select[@id="months"]'); }
  get yearDropdown () { return browser.element('//select[@id="years"]'); }
  get firstName () { return browser.element('//label[@for="firstname"]//following-sibling::input'); }
  get lastName () { return browser.element('//label[@for="lastname"]//following-sibling::input'); }
  get companyName () { return browser.element('//label[@for="company"]//following-sibling::input'); }
  get address () { return browser.element('//label[@for="address1"]//following-sibling::input'); }
  get city () { return browser.element('//label[@for="city"]//following-sibling::input'); }
  get state () { return browser.element('//div[@class="selector"]//select[@id="id_state"]'); }
  get country () { return browser.element('//div[@class="selector"]//select[@id="id_country"]'); }
  get mobileNumber () { return browser.element('//label[@for="phone_mobile"]//following-sibling::input'); }
  get postalCode () { return browser.element('//input[@id="postcode"]'); }
  get aliasAddress () { return browser.element('//label[@for="alias"]//following-sibling::input'); }
  get registerButton () { return browser.element('//button[@id="submitAccount"]'); }
  get backToHomeButton () { return browser.element('//a[@title="Home"]'); }

  /**
   *Functions
   */

  /**
   * User fills personal informations
   */
  fillForm (user) {
    this.title.waitForVisible();
    this.title.click();
    this.customerFirstName.setValue(user.customerFirstName);
    this.customerLastName.setValue(user.customerLastName);
    this.passwordField.setValue(user.passwordField);
    this.daysDropdown.selectByValue(user.day);
    this.monthDropdown.selectByValue(user.month);
    this.yearDropdown.selectByValue(user.year);
    this.firstName.setValue(user.firstName);
    this.lastName.setValue(user.lastName);
    this.companyName.setValue(user.company);
    this.address.setValue(user.address);
    this.city.setValue(user.city);
    this.state.selectByValue(user.state);
    this.country.selectByValue(user.country);
    this.postalCode.setValue(user.postalCode);
    this.mobileNumber.setValue(user.mobileNumber);
    this.registerButton.click();
  }
}

export default new accountPage();
