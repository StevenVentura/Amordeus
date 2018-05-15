

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

var goldchannelurl = "https://discordapp.com/channels/333767561122676736/442953339945091072";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function getbotbtw(i) {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get(goldchannelurl);


/*
sometimes it does a different page on login.
xpath is : 
email field:
/html/body/div[1]/div[1]/div/div[2]/div/form/div/div[3]/div[1]/div/input
password field:
/html/body/div[1]/div[1]/div/div[2]/div/form/div/div[3]/div[2]/div/input
login button:
/html/body/div[1]/div[1]/div/div[2]/div/form/div/div[3]/button[2]
*/

//await sleep(10666);
console.log("wiating...");
//https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html
var query = await driver.wait(webdriver.until.elementLocated(webdriver.By.id("register-email")), 300000);


query.sendKeys("gangsthurh@gmail.com");
console.log("FINISHED WAITING!");
    //var emailfield = await driver.findElement(webdriver.By.id("register-email"));//driver.findElement(webdriver.By.xpath("//*[@id=\"register-email\"]"));
    //await driver.wait(webdriver.until.elementIsVisible(emailfield),100);
    //await emailfield.sendKeys("gangsthurh@gmail.com");
    var passwordfield = driver.findElement(webdriver.By.xpath("//*[@id=\"register-password\"]"));
    passwordfield.sendKeys("s0134201342");
    var loginbutton = driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[5]/div/form/button"));
    loginbutton.click();

console.log("Waiting for user to mouse over to the kike-gold channel");
//"https://discordapp.com/channels/333767561122676736/442953339945091072"
await driver.wait(function() {
 return driver.getCurrentUrl().then(function(url) {
    return url === "https://discordapp.com/channels/333767561122676736/442953339945091072";
 });   
}, 1000000);
console.log("The URL is set. now waiting 3 seconds");
await sleep(3000);
console.log("Done waiting 3 seconds");
var spambox = driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/form/div/div/textarea"));

/*
get the thing
scroller-2FKFPG scroller-2v3d_F
var x = document.getElementsByClassName("scroller-2FKFPG scroller-2v3d_F")[0]

*/

/*var scroller = driver.findElement(webdriver.By.className("scroller-2FKFPG scroller-2v3d_F"));
scroller.children*/


var textboxmaybe = driver.findElement(webdriver.By.className("textAreaEnabled-3vQ5WZ textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9"));

textboxmaybe.sendKeys("Brasil");






/*
this works:
var d = document.getElementsByClassName("nameDefaultVoice-3WUH7s name-3M0b8v overflowEllipsis-jeThUf");
d.click();
nameDefaultVoice-3WUH7s name-3M0b8v overflowEllipsis-jeThUf
*/
var chatsToClickOn = [
    driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[4]/div/div[2]/div[8]/div[1]/div/div[2]")),
    driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[4]/div/div[2]/div[9]/div/div/div[2]")),
    driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[4]/div/div[2]/div[11]/div/div/div[2]")),
    driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[4]/div/div[2]/div[12]/div/div/div[2]"))
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function randomWord(length) {
    
var outvar = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
for (var c = 0; c < length; c++) {
    var indiee = getRandomInt(26);
outvar = outvar + alphabet.substring(indiee,indiee+1);

}
return outvar;

}

var clickindex = 0;
while (true)
 {

await sleep(100);
clickindex++;
//if (typeof(chatsToClickOn)=="undefined")
chatsToClickOn[clickindex%4].click();


//spambox.sendKeys(randomWord(4 + getRandomInt(12)) + "\n");



}






  
/*selenium = require ('selenium-webdriver');
driver = new selenium.Builder()
  .withCapabilities(selenium.Capabilities.chrome())
  .build();*/
//driver.get(goldchannelurl);

/*driver.get('http://www.google.com').then(function() {

return driver.findElement(webdriver.By.id("lst-ib"))})
.then(function(boxbtw) {boxbtw.click(); boxbtw.clear(); boxbtw.sendKeys("Shaun" + webdriver.Key.ENTER)
});*/

//var textfieldmaybe = driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/form/div/div/textarea"));
/*console.log("1234 xd");
console.log("sleeping btw");
await sleep(10666);
console.log("done sleeping :3c");

driver.findElement({id: 'lst-ib'}).sendKeys('200');
*/
/*
try{
driver.executeScript("document.getElementById('lst-ib').setAttribute('value', 'henlo world?')").then(function (fillboy) {
    
});
}catch(ex){}//https://github.com/SeleniumHQ/selenium/issues/2457
*/
//http://testerstories.com/2016/03/webdriver-in-javascript-with-promises/
//http://www.techinsight.io/review/devops-and-automation/browser-automation-using-selenium-webdriver-and-nodejs/

/*driver.wait(function () {
    return driver.isElementPresent(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[2]/div/form/div/div[3]/div[1]/div/input"));
}, 1666);*/


//var emailfield = driver.findElement(webdriver.By.xpath("//*[@id=\"register-email\"]"));
/*var emailfield = driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[2]/div/form/div/div[3]/div[1]/div/input").sendKeys("gangsthurh@gmail.com"));

driver.executeScript("");
console.log("i think it foudn the meail xd");
emailfield.getText().then(function (reee) {
console.log(reee);
});*/

/*driver.executeScript("document.getElementById('register-email').setAttribute('value','gangsthurh@gmail.com')").then(function (filler) {
    
});*/



/*var emailffs = driver.findElement(webdriver.By.id("register-email"));
console.log("emailffs is next line");
console.log(emailffs);
emailffs.then(function(result) {
    console.log("workedhaha");
    console.log("result is nextline");
    console.log(result);
    result.sendKeys("gangsthurh@gmail.com");
}, function(err) {
    console.log("didntwork haha");
});
*/



/*emailfield.sendKeys("gangsthurh@gmail.com");
var passwordfield = driver.findElement(webdriver.By.xpath("//*[@id=\"register-password\"]"));
passwordfield.sendKeys("s0134201342");
*/






//search for it (this is done automatically because its part of the URL)

    //return: scRape the text off the search box that google came up with
 


}

for (var i = 0+1; i < 1+1; i++)
    getbotbtw(i);
    

