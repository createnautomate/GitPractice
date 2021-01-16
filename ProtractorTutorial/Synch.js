describe('Protractor Sync steps', function () {

	it("Open Non Angular js website Sync", function () {

		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html'); // will get the browser
		
		element(by.css("a[href*='loadAjax']")).click();
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		element(by.id("results")).getText().then(function(text){
			
			console.log(text);
		})
	})
})

