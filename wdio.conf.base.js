const chai = require("chai");

exports.config = {

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    suites: {
      smoke: [
        './features/add-to-cart.feature'
      ]
    },

    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 5,

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,

    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://automationpractice.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 60000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    framework: 'cucumber',

    reporters: ["spec"],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
      require: [
        './step_definitions/account.stepDefinition.js',
        './step_definitions/add-to-cart.stepDefinition.js',
        './step_definitions/login.stepDefinition.js'
      ],
      compiler: ["js:babel-core/register"], // <string[]> filetype:compiler used for processing required features
      failFast: true,
      dryRun: false,
      colors: true,
      timeout: 60000
    },

    onPrepare: function () {
      const fs = require("fs");
      if (!fs.existsSync(`${__dirname  }/reports/screenshots`)) {
        if (!fs.existsSync(`${__dirname  }/reports`)) {
          fs.mkdirSync(`${__dirname  }/reports`);
        }
        fs.mkdirSync(`${__dirname  }/reports/screenshots`);
      }
    },

    afterStep: function (step) {
      if (step.isFailed()) {
        const stepName = step.step.name;
        const featureName = step.step.scenario.feature.name;
        const screenShot = `./reports/screenshots/${Date.now()}-${featureName}-${stepName}.png`;
        console.log(`Adding screenshot: ${  screenShot}`);
        browser.saveScreenshot(screenShot);
      }
    }
    };
