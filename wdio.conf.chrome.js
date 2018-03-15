/**
 *
 * wdio.conf.chrome.js
 * Test configuration file used for iOS test environment
 * It uses Chrome with iPhone 5 mobileEmulation
 *
 */
const merge = require("deepmerge");
const chai = require("chai");
const wdioConfBase = require("./wdio.conf.base.js");

exports.config = merge(wdioConfBase.config, {

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  capabilities: [{
    browserName:   "chrome",
    chromeOptions: {
      args: ["--reduce-security-for-testing", "--disable-notofications","--window-size=390,780"],
    },
      mobileEmulation: {
        deviceName: "Apple iPhone 6"
      }
  }],

  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */

    global.expect = chai.expect;

    browser.timeouts("page load", 60000);
  },

});
