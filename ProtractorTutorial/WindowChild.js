describe('Actions Demo', function () {

	it("Open child window", function () {
	
	browser.waitForAngularEnabled(false);
	browser.get('https://rahulshettyacademy.com/AutomationPractice/');
	browser.sleep(3000);
	
	element(by.id("opentab")).click().then(function(){
		
		browser.getTitle().then(function(title) {
			
			console.log(title + " title of the page before switching");
		})
		
		browser.getAllWindowHandles().then(function(handles){
			
			browser.switchTo().window(handles[1]);
			browser.getTitle().then(function(title) {
				
				console.log(title + " title of the page after switching");
			})
			
			browser.switchTo().window(handles[0]);
			browser.getTitle().then(function(title) {
				
				console.log(title + " title of the page back to parent Window");
			})
			
		})
	})
	
	
	
	})
	
	})