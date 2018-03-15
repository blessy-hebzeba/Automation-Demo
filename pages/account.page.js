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
  get daysDropdown () { return browser.element('//div[@class="selector"]//select[@id="days"]'); }
  get monthDropdown () { return browser.element('//div[@class="selector"]//select[@id="months"]'); }
  get yearDropdown () { return browser.element('//div[@class="selector"]//select[@id="years"]'); }
  get firstName () { return browser.element('//label[@for="firstname"]//following-sibling::input'); }
  get companyName () { return browser.element('//label[@for="company"]//following-sibling::input'); }
  get address () { return browser.element('//label[@for="address1"]//following-sibling::input'); }
  get city () { return browser.element('//label[@for="city"]//following-sibling::input'); }
  get state () { return browser.element('//div[@class="selector"]//select[@id="id_state"]'); }
  get country () { return browser.element('//div[@class="selector"]//select[@id="id_country"]'); }
  get mobileNumber () { return browser.element('//label[@for="phone_mobile"]//following-sibling::input'); }
  get aliasAddress () { return browser.element('//label[@for="alias"]//following-sibling::input'); }
  get registerButton () { return browser.element('//button[@ida="submitAccount"]'); }
  get backToHomeButton () { return browser.element('//a[@title="Home"]'); }
}
