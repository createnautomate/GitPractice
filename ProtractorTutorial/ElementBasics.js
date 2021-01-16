/**
 * first parametr  - Test suite name
 *
 * second parametr - function (function will have all tests (it blocks)
 */

describe("Protractor Element Demo", function () {
  var obj = require("./jsobjectDemo.js");
  var using = require("jasmine-data-provider");
  var d = require("./data.js");

  beforeEach(function () {
    obj.getURL();
  });

  using(d.dataDriven, function (data, description) {
    it("Test calculator functionality" + description, function () {
      obj.firstinput.sendKeys(data.firstInput);
      obj.secondinput.sendKeys(data.secondInput);
      obj.goButton.click();
      expect(obj.result.getText()).toBe(data.result);
      obj.result.getText().then(function (text) {
        console.log(text);
      });
    });

    afterEach(function () {
      console.log("Test is completed");
    });
  });
});
