


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

async function getbotbtw(uname, pword) {
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
//var usernames = {"gangsthurh@gmail.com",}
console.log("wiating...");
//https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html
await driver.wait(webdriver.until.elementLocated(webdriver.By.id("register-email")), 2666).then(function (query) {
console.log("query is nextlne:");
console.log(query);

    query.sendKeys(uname);
   
    var passwordfield = driver.findElement(webdriver.By.xpath("//*[@id=\"register-password\"]"));
   
        passwordfield.sendKeys(pword);
    
    var loginbutton = driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[1]/div/div[5]/div/form/button"));
    loginbutton.click();


},function(erra){console.log("alternate login screen detected."); 

driver.findElements(webdriver.By.className("inputDefault-_djjkz input-cIJ7To size16-14cGz5")).then(function (fields) {
    var email1 = fields[0];
email1.sendKeys(uname);
var password1 = fields[1];
password1.sendKeys(pword);
var button = driver.findElement(webdriver.By.className("marginBottom8-AtZOdT button-3k0cO7 button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeLarge-1vSeWK fullWidth-1orjjo grow-q77ONN"));
button.click();
});






});



console.log("FINISHED WAITING!");
    //var emailfield = await driver.findElement(webdriver.By.id("register-email"));//driver.findElement(webdriver.By.xpath("//*[@id=\"register-email\"]"));
    //await driver.wait(webdriver.until.elementIsVisible(emailfield),100);
    //await emailfield.sendKeys("gangsthurh@gmail.com");
    

console.log("Waiting for user to mouse over to the a-gold channel");
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

async function clickfailbutton() {

    driver.findElement(webdriver.By.className("primaryButton-2BsGPp button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeXlarge-2yFAlZ grow-q77ONN")).then(
        async function (_foundbutton) {
          _foundbutton.click().then(function (onsucc) {},function(onfail){});
          await sleep(1500);
        },function (_errnotfound) {}
       );
}

var counthaha = 0;
var thirdpass = -1;
while (true) {

    await sleep(100);
   await driver.findElements(webdriver.By.className("containerDefault-1ZnADq")).then(async function (elements) {
    thirdpass++;
        elements.forEach(async function (element) {
          element.click().then(async function (_clicked) {
            await driver.findElement(webdriver.By.className("textAreaEnabled-3vQ5WZ textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9")).
            then(async function (haha) {
                
                var stringstosend = [counthaha,counthaha+1,counthaha+2,".pick"];
              if (thirdpass%2==0)
              {
                haha.sendKeys(".pick\n").then(async function (_xd){},async function (keyfailed){});
                await sleep(333);
              }
                else for (var xx = 0; xx < 3; xx++)
                {    haha.sendKeys(stringstosend[xx] + "\n").then(async function (_xd) { },async function(keyfailed) {
                    //primaryButton-2BsGPp button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeXlarge-2yFAlZ grow-q77ONN is the "woah there xD button" 
                    clickfailbutton();
                });
                        await sleep(666);
                }
                counthaha += 3;
                await sleep(500);
               // await sleep(500);
            }, function (err3){});
            
          }, async function (_clickfailed) {
              clickfailbutton();
          });
          
          
      
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

var unames = ["gangsth4@gmail.com","gangsthurh2@gmail.com"];
var pwords = ["0134201342","0134201342"];
for (var i = 0; i <= 0; i++)
{
    getbotbtw(unames[i],pwords[i]);
}
    

