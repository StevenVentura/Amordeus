var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var chromeCapabilities = webdriver.Capabilities.chrome();

var chromeOptions = new chrome.Options()
.addArguments('allow-file-access-from-files')
//disable the setting to ask for mic ffs
.addArguments('use-fake-device-for-media-stream')
//disable the setting to ask for mic ffs
.addArguments('use-fake-ui-for-media-stream')
.addArguments("mute-audio");
//chromeOptions.addArguments('start-maximized');
//chromeOptions.addArguments('incognito');
//chromeOptions.addArguments('headless');
//chromeOptions.setUserPreferences({'download.default_directory' : '/path/to/your/download/directory'});

chromeCapabilities.set('chromeOptions', chromeOptions);


async function chromestuffgo() {
    
	//open chrome
	var driver = new webdriver.Builder()
    .withCapabilities(chromeCapabilities)
    //.withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get('https://www.google.com/intl/en/chrome/demos/speech.html'); 
	//click mic button
	await driver.wait(webdriver.until.elementLocated(webdriver.By.id('start_img')),2666).then(function (query) {
		query.click();
		
		
		
	});
	
	//ready for voice!
	
	
	
	
	//wait for voice to be inputted
	
	//grab text
	
	
	await driver.quit();
}


chromestuffgo();