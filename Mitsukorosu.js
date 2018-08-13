


//taken from https://stackoverflow.com/questions/10596417/is-there-a-way-to-get-element-by-xpath-using-javascript-in-selenium-webdriver
function getElementByXpath(path,doccy) {
    return doccy.evaluate(path, doccy, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  var os = require('os'); os.tmpDir = os.tmpdir;

//load up HTMLUnit JK u have to use selenium for javascript
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
//var o = new chrome.Options();
//o.addArguments("user-data-dir=C:\Users\Yoloswag\AppData\Local\Google\Chrome\User Data\Default");
var path = require('chromedriver').path;

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});
//https://developers.google.com/web/updates/2017/04/headless-chrome#drivers

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

console.log("??");


//https://stackoverflow.com/questions/25779027/load-default-chrome-profile-with-webdriverjs-selenium


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function spammitsuku() {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
   // .setChromeOptions(o)
    .build();

    driver.get("https://www.twitch.tv/mitsuku_irl");

await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("/html/body/div[1]/div/div/div[2]/nav/div/div[3]/div/div[1]/button/span")),15000).then
(
async function (loginbutton) {
    loginbutton.click();//just assume it works ree
    console.log("clicked on login button");
    //problem : the buttons dont show up until you click on them
    //var a = document.getElementsByClassName("ReactModal__Body--open")
    await driver.findElement(webdriver.By.className("ReactModal__Body--open")).then(function (clickpls) {
        clickpls[0].click();
        console.log("clicked :3c");
    },function (failedwtf) {console.log("failedwtf");console.log(failedwtf);});
    await driver.executeScript('var a = document.getElementsByClassName("text"); a["username"].setAttribute("value","' + "1stevenventura1@gmail.com" + '"); a["password"].setAttribute("value","' + "0134201342" + '"); ');
    driver.findElement(webdriver.By.className("js-login-text")).click();


}, function (failToFindLogin) {
    console.log("failed to find login button xd");
    console.log(failToFindLogin);
}
);







}


    spammitsuku();

    

