describe('Actions Demo', function () {

	it("Open Rahul's website", function () {

		browser.waitForAngularEnabled(false);
//		browser.get('https://rahulshettyacademy.com/AutomationPractice/'); // will get the browser
		browser.get('https://www.rahulshettyacademy.com/#/index');

		var countryName = "India";

		//code to select from auto-suggested values

		/* browser.actions().mouseMove(element(by.css("#autocomplete.inputs.ui-autocomplete-input")).sendKeys(countryName)).perform();

		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(10000);
			const iFrame = element(by.xpath("//iframe[@id='courses-iframe']")).getWebElement();
			browser.switchTo().frame(iFrame);
			expect(element.all(by.css("Div[class='image']")).count()).toEqual(12);
		})
		
		*/
		/* element(by.css("#autocomplete.inputs.ui-autocomplete-input")).sendKeys(countryName);
		element(by.css("#autocomplete.inputs.ui-autocomplete-input")).sendKeys(protractor.Key.ARROW_DOWN);
		element(by.css("#autocomplete.inputs.ui-autocomplete-input")).sendKeys(protractor.Key.ENTER)
			browser.sleep(10000);
			 const iFrame = element(by.xpath("//iframe[@id='courses-iframe']")).getWebElement();
			 browser.switchTo().frame(iFrame);
			 expect(element.all(by.css("Div[class='image']")).count()).toEqual(12);*/
		
			browser.sleep(5000);
			expect(element.all(by.css("Div[class='image']")).count()).toEqual(12);
			element.all(by.css("Div[class='image']")).get(0).click().then(function(){
				
				browser.sleep(5000);
			})
		
		//element(by.css("div.page-wrapper section.courses-section div.container-fluid div.row.clearfix div.courses-block.col-lg-3.col-md-4.col-sm-6.col-xs-12:nth-child(1) div.inner-box div.lower-content div.upper-box h2:nth-child(2) > a:nth-child(1)")).click();
	})
})

