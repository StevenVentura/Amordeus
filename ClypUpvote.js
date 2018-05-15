


//taken from https://stackoverflow.com/questions/10596417/is-there-a-way-to-get-element-by-xpath-using-javascript-in-selenium-webdriver
function getElementByXpath(path,doccy) {
    return doccy.evaluate(path, doccy, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  var os = require('os'); os.tmpDir = os.tmpdir;

//load up HTMLUnit JK u have to use selenium for javascript
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});
//https://developers.google.com/web/updates/2017/04/headless-chrome#drivers

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

console.log("??");

//var goldchannelurl = "https://discordapp.com/channels/333767561122676736/442953339945091072";
var channel_A_URL = "https://clyp.it/#signup";



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function createClypAccount(i) {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get(channel_A_URL);
console.log("waiting for page load xd");
await driver.wait(webdriver.until.elementLocated(webdriver.By.className("remodal user-account remodal-is-initialized remodal-is-opened")),300000);
console.log("page loaded.");

var usernamefield = driver.findElement(webdriver.By.xpath("/html/body/div[6]/div/input[1]"));
usernamefield.sendKeys("Steven Ventura");
var emailfield = driver.findElement(webdriver.By.xpath("/html/body/div[6]/div/input[2]"));
emailfield.sendKeys(emailcount + "stevenventura@gmail.com");
var passwordfield = driver.findElement(webdriver.By.xpath("/html/body/div[6]/div/input[3]"));
passwordfield.sendKeys("0134201342");
var submitbutton = driver.findElement(webdriver.By.xpath("/html/body/div[6]/div/a"));
submitbutton.click();


//if it has the error box, then change the email address.
var breakvar = true;
while(breakvar){
await sleep(2666);
var errorbox = await driver.wait(webdriver.until.elementLocated(webdriver.By.className("modal-error"),13666)).then(async function (ebox) {
    await emailfield.click().then(function (succ2) {}, function (err3) {console.log(err3);breakvar = false;});
    await emailfield.clear().then(function (succ3) {}, function (err4) {console.log(err4);breakvar = false;});
    emailcount++;
    await emailfield.sendKeys(emailcount + "stevenventura@gmail.com").then(function(succ4) {}, function (err5) {console.log(err5);breakvar = false;});
    await submitbutton.click().then(function (succ) {}, function (err2) {console.log(err2);breakvar = false;});
    
},async function (err1) {console.log(err1);
    
         breakvar = false;           }
);

if (breakvar == false) {
    
    console.log("we good. creating account " + emailcount);
}
}






   

//"https://discordapp.com/channels/333767561122676736/442953339945091072"

}


var emailcount = 42;

for (var i = 0; i < 1; i++)
   createClypAccount(i);
    

