describe('Protractor Frames Handling Demo', function () {

	it("Frames Handling", function () {

		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('https://rahulshettyacademy.com/AutomationPractice/'); // will get the browser
//		browser.get('https://www.rahulshettyacademy.com/#/index');
		browser.sleep(10000);
		
//		browser.actions().mouseMove(element(by.buttonText("Mouse Hover"))).perform();
		browser.switchTo().frame("courses-iframe");
		
		element(by.css("a[href*='sign_in']")).getText().then(function(text) {
			console.log(text);
		})
	})
})

