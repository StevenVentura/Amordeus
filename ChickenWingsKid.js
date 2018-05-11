


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
var channel_A_URL = "https://discordapp.com/channels/444262264112152606/444271532773212160";


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function getbotbtw(i) {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get(channel_A_URL);


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

if (i == 0) {
query.sendKeys("gangsthurh@gmail.com");
}
else if (i == 1) {
    query.sendKeys("gangsth4@gmail.com");
}
console.log("FINISHED WAITING!");
    //var emailfield = await driver.findElement(webdriver.By.id("register-email"));//driver.findElement(webdriver.By.xpath("//*[@id=\"register-email\"]"));
    //await driver.wait(webdriver.until.elementIsVisible(emailfield),100);
    //await emailfield.sendKeys("gangsthurh@gmail.com");
    var passwordfield = driver.findElement(webdriver.By.xpath("//*[@id=\"register-password\"]"));
    if (i == 0) {
    passwordfield.sendKeys("s0134201342");
    }
    else if (i == 1)
    {
        passwordfield.sendKeys("0134201342");
    }
    var loginbutton = driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[5]/div/form/button"));
    loginbutton.click();

console.log("Waiting for user to mouse over to the kike-gold channel");
//"https://discordapp.com/channels/333767561122676736/442953339945091072"
await driver.wait(function() {
 return driver.getCurrentUrl().then(function(url) {
    return url === channel_A_URL;
 });   
}, 1000000);
console.log("The URL is set. now waiting 3 seconds");
await sleep(3000);
console.log("Done waiting 3 seconds");


/*
var textboxmaybe = driver.findElement(webdriver.By.className("textAreaEnabled-3vQ5WZ textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9"));

textboxmaybe.sendKeys("Brasil");
*/

/*var htmlpls =  driver.findElement(webdriver.By.tagName("html"));
htmlpls.sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, webdriver.Key.ADD));
htmlpls.sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, webdriver.Key.ADD));
htmlpls.sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, webdriver.Key.ADD));
*/



/*var containerOfTextChannels = driver.findElement(webdriver.By.className("container-0"));
var child1 = containerOfTextChannels.findElement(webdriver.By.xpath(".//div/div"))
child1.click();
*/

/*

//*[@id="app-mount"]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/div[2]/div[2]
//*[@id="app-mount"]/div[1]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/div[2]/div[2]/div/div
*/


//containerOfTextChannels has the 26 "containerDefault-1ZnADq" objects in it 

//var temp = driver.findElements(webdriver.By.className("contentDefaultText-3vZplL content-20Aix8"));
console.log("Wow it made it this far");

/*
THIS WORKS BTW 
var please = driver.findElement(webdriver.By.className("wrapperUnreadText-2zuiuD wrapper-KpKNwI"));
please.click();
*/

//driver.executeScript("document.body.style.zoom = '0.5'");

/*
var xx = document.elementFromPoint(50,50)
document.onmousemove = function(e)
{
    var x = e.pageX;
    var y = e.pageY;
    console.log("x = " + x + ", y = " + y);
};
*/

await sleep(8888);//added this cos it wasnt loading rite xd
driver.findElement(webdriver.By.className("close-relY5R")).click().then(function () {
}, function (err){});;

var counthaha = 0;
while (true) {

    await sleep(100);
   await driver.findElements(webdriver.By.className("containerDefault-1ZnADq")).then(async function (elements) {
        elements.forEach(async function (element) {
          element.click();
          await driver.findElement(webdriver.By.className("textAreaEnabled-3vQ5WZ textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9")).
          then(async function (haha) {
              haha.sendKeys(counthaha++ + "\n");
              await sleep(666);
              haha.sendKeys(counthaha++ + "\n");
              await sleep(666);
              haha.sendKeys(counthaha++ + "\n");
              await sleep(666);
              haha.sendKeys(".pick" + "\n");
              await sleep(500);
              await sleep(2000);
          }, function (err3){});
          
      
        }, function (err2) {})  
      }, function(err) {});
      
    
    /*

get all containers with this class name, and click on them or their 1st child:
    containerDefault-1ZnADq
    */


/*driver.findElements(webdriver.By.className("wrapperUnreadText-2zuiuD wrapper-KpKNwI")).then(async function(elements){
    elements.forEach(async function (element) {
        if (element.isDisplayed()) {
        element.click();
       /* var textboxmaybe = driver.findElement(webdriver.By.className("textAreaEnabled-3vQ5WZ textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9"));
        textboxmaybe.sendKeys(counthaha++ + "\n").then(function() {
        }, function(err) {
      
        });**
        await sleep(100);
    }
    });
});*/
/*driver.findElements(webdriver.By.className("contentDefaultText-3vZplL content-20Aix8")).then(async function(elements){
    elements.forEach(async function (element) {
        if (element.isDisplayed()) {
        element.click();
     /*   var textboxmaybe = driver.findElement(webdriver.By.className("textAreaEnabled-3vQ5WZ textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9"));
        textboxmaybe.sendKeys(counthaha++);
        textboxmaybe.sendKeys("\n");
        await sleep(100);
        }
    });
});
*/
}
//driver.executeScript("var s = document.getElementsByClassName(\"contentDefaultText-3vZplL content-20Aix8\");for (var i = 0; i < s.length; i++) { s[i].click(); }");

/*
this works for channels with NO new notifications:
var s = document.getElementsByClassName("contentDefaultText-3vZplL content-20Aix8");
contentDefaultText-3vZplL content-20Aix8
s[0].click(); s[1].click(); s[2].click();
this works for channels WITH new notifications:
var s2 = document.getElementsByClassName("wrapperUnreadText-2zuiuD wrapper-KpKNwI");
s[0].click(); s[1].click();

*/








}

for (var i = 0; i < 2; i++)
    getbotbtw(i);
    

