/**
 * first parametr  - Test suite name
 * 
 * second parametr - function (function will have all tests (it blocks)
 */

describe ('Protractor baby steps', function() {
	
	it('Open Angular JS website', function() {
		
		browser.get('https://angularjs.org'); // will get the browser
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
			
			
			console.log("I am the last step to execute");
		})
		
		
		
		// write your protractor code 
		// each block called spec
	})
	
	it('Close browser', function(){

		
		
		// code to close browser
	})
	
	
	
})