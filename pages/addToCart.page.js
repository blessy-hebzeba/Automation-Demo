import Page from './page';
/**
 * @class functions/addToCart
 * @type {Page}
 */
class addToCartPage extends Page {
  /*
    define elements
  */
  get signInButton () { return browser.element('//a[@class="login"]');}
  get searchField () { return browser.element('//input[@name="search_query"]');}
  get searchButton () { return browser.element('//button[@name="submit_search"]');}
  get noResultAlert () { return browser.element('//p[@class="alert alert-warning"]');}
  get resultAlert () { return browser.element('//div[@class="product-count"]'); }
  get productGrid () { return browser.element('(//div[@class="product-container"])[1]');}
  get quantityDropDown () { return browser.element('(//a[@data-field-qty="qty"])[2]');}
  get colorChip () { return browser.element('//ul[@id="color_to_pick_list"]//li[2]');}
  get size () { return browser.element('//select[@name="group_1"]');}
  get addToCartButton () { return browser.element('(//div[@class="product-container"])[1]//a[contains(@class,"add_to_cart_button")]');}
  get confirmationModal() { return browser.element('//div[@id="layer_cart"]'); }
  get continueShoppingButton () { return browser.element('//div[@class="clearfix"]//span[contains(@class,"button exclusive")]'); }
  get checkoutButton () { return browser.element('//span[contains(text(), "checkout")]'); }

  /**
  Functions
  */

  /**
   * User goes to home page
   */
  goToHomePage () {
    browser.url('http://automationpractice.com');
  }

  /**
   * User goes to login page
   */
  goToLogin () {
    this.signInButton.waitForEnabled();
    this.signInButton.click();
  }

  /**
   * Searches for a product
   */
  searchProduct () {
    this.searchField.waitForEnabled();
    this.searchField.setValue("chiffon");
    this.searchButton.waitForEnabled();
    this.searchButton.click();
  }

  /**
   * Validates the search results
   */
  validateSearchResult () {
    this.resultAlert.waitForVisible();
    expect(this.resultAlert.isVisible()).to.equal(true);
    expect(this.productGrid.isVisible()).to.equal(true);
  }

  /**
   * Adds product to cart
   */
  addToCart () {
    const addToCartButtonPos = browser.elementIdLocation(this.addToCartButton.value.ELEMENT);
    browser.scroll(addToCartButtonPos.value.x, addToCartButtonPos.value.y);
    this.addToCartButton.click();
    this.confirmationModal.waitForVisible();
    expect(this.confirmationModal.isVisible()).to.equal(true);
  }

  /**
   * User triggers checkout
   */
  triggerCheckout () {
    this.checkoutButton.waitForEnabled();
    this.checkoutButton.click();
  }
}
export default new addToCartPage();
