var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

exports.config = {
  //  directConnect: true,

  // seleniumAddress: "http://localhost:4444/wd/hub",
  // specs: ["PracticeExercise.js"],
  specs: ["ElementBasics.js"],
  //  specs: ['PracticeExercise.js'],

  onPrepare: function () {
    browser.driver.manage().window().maximize();

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: "target/screenshots",
      })
    );
  },

  suites: {
    Smoke: ["Actions.js", "Dropdown.js"],
    Regression: "ElementBasics.js",
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  capabilities: {
    browserName: "chrome",
    //		  'goog:chromeOptions': {
    //		        w3c: false
    //		       },
  },
};
