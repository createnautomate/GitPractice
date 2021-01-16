describe('Protractor Alert Steps', function () {

	it("Open non Angular website Alerts", function () {
	
	browser.waitForAngularEnabled(false);
	browser.get('https://rahulshettyacademy.com/AutomationPractice/');
	
	element(by.id("confirmbtn")).click();
	var alertDialog = browser.switchTo().alert();
	  expect(alertDialog.dismiss).toBeDefined();
	  alertDialog.dismiss();
		})
	})