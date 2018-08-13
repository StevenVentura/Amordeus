
const { Client } = require('discord.js');
const client = new Client({disableEveryone: true});

client.on('ready', () => {
    console.log("Heyo guys, amordeus here");
    
});

const botcommandChannel = '333767561122676736';
var plsnotmorethanonce = false;


console.log(__dirname);

//taken from https://stackoverflow.com/questions/10596417/is-there-a-way-to-get-element-by-xpath-using-javascript-in-selenium-webdriver
function getElementByXpath(path,doccy) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }


//load up HTMLUnit JK u have to use selenium for javascript
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});
//https://developers.google.com/web/updates/2017/04/headless-chrome#drivers

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);



function getPokemon(searchboy,msg) {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    

/*selenium = require ('selenium-webdriver');
driver = new selenium.Builder()
  .withCapabilities(selenium.Capabilities.chrome())
  .build();*/
driver.get(searchboy);

//const button = driver.findElement(By.id('my-button'));
//https://stackoverflow.com/questions/47301557/referenceerror-by-is-not-defined-webdriverio
//webdriver.executeScript("sboxplease = document.getElementById('lst-ib')");//driver.findElement(By.name('q'));
//webdriver.executeScript("sboxvalue = document.getElementById('q').getAttribute('value')");
//http://webdriver.io/api/property/getValue.html


//var PLEASE = $('#lst-ib');
//var PLEASE = driver.findElement(js: 'return document.getElementById("q")');
/*
http://www.techinsight.io/review/devops-and-automation/browser-automation-using-selenium-webdriver-and-nodejs/
var selenium = require('selenium-webdriver');

describe('Selenium Tutorial', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        this.driver.get('http://www.techinsight.io/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });

    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Should be on the home page', function(done) {
        var element = this.driver.findElement(selenium.By.tagName('body'));

        element.getAttribute('id').then(function(id) {
            expect(id).toBe('home');
            done();
        });
    });

    // Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
    it('Has a working nav', function(done) {
        var element = this.driver.findElement(selenium.By.linkText('REVIEW'));

        element.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('/review');
            done();
        });
    });
});
http://www.techinsight.io/review/devops-and-automation/browser-automation-using-selenium-webdriver-and-nodejs/
*/
var PLEASE = driver.findElement(webdriver.By.id("lst-ib"));

PLEASE.getAttribute('id').then(function(id) {
    console.log("nextline is text object");
//console.log(PLEASE.getAttribute("value"));
PLEASE.getAttribute("value").then(function(ffsplease) {
console.log("ffsplease is nextline" );
    console.log(ffsplease);
    //IT WORKS! but it wont launc the fucking chromedriver now (probably duplicate process but like i cant even detect)
var spaceindex  = ffsplease.indexOf(" ");
var pokemonsname = ffsplease.substring(0,spaceindex);
var urlomfg = null;
driver.getCurrentUrl().then(function(isthisactuallynecessary) {
urlomfg = isthisactuallynecessary;
msg.channel.send("<@123995901105537024>" + ffsplease + " ||| " + urlomfg);
});
//msg.channel.send("<@123995901105537024>" + ffsplease + " ||| " + urlomfg);


});
PLEASE.getText().then(function(text) {
    console.log(text);
//console.log("the pokemon is " + text);
return text;
});
    /*
    http://www.techinsight.io/review/devops-and-automation/browser-automation-using-selenium-webdriver-and-nodejs/
    */
});
//console.log("idthing==" + PLEASE.getAttribute('id'));

//driver.findElement(By.id("lst-ib"));





//search for it (this is done automatically because its part of the URL)

    //return: scRape the text off the search box that google came up with
 


}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function scanYLYLThread(ylylID,userboy) {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    
driver.get("http://boards.4chan.org/b/thread/" + ylylID);

/*
print out all of the URLs of the images in the thread.

*/

await driver.findElement(webdriver.By.className("fileThumb"));
await sleep(888);

/*
scan through all of the reply posts.
all replies with images are important.

*/

/*
var x = document.getElementsByClassName("post reply")

*/

/*
executeScript: return all URLs of images from posts.

executeScript: return all posts that match the criteria:
1) 4+ replies
2) comment that says "lost" or "sides"

backLink


*/

driver.executeScript("var x = document.getElementsByClassName('post reply'); var imageLinkArray = []; for (var i = 0; i < x.length; i++) {var y = x[i].getElementsByClassName('fileThumb'); if (x[i].getElementsByClassName('quotelink').length >= 4) for (var c = 0; c < y.length; c++) {imageLinkArray.push(y[c].href)} } return imageLinkArray;").then(
function(YLYLimagesLinksArray){
YLYLimagesLinksArray.forEach(function (imageLink) {
console.log("le funny image can be found at " + imageLink);
userboy.send(imageLink);

},function(err2) {})


},function(err1) {console.log("err1 in ylylimageslinkarray btw")}
);



  }
async function getDegeneracyYLYL(userboy) {
    var driver = new webdriver.Builder()
    //.withCapabilities(chromeCapabilities)
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    
driver.get("http://boards.4chan.org/b/catalog");

/*
var x = document.getElementsByClassName("teaser");
x[1].textContent
*/

/*driver.findElements(webdriver.By.className("thread")).then(function (threads) {

},function(err2){});
*/
console.log("???");
await driver.findElements(webdriver.By.className("thread"));
await sleep(888);



driver.executeScript("var threads = document.getElementsByClassName('thread'); var outarray = []; for (var i = 0; i < threads.length; i++) { if (threads[i].getElementsByClassName('teaser')[0].textContent.match(/ylyl/i)) outarray.push(threads[i].id) } return outarray").then(
 function (arraynames) {
    arraynames.forEach(function (untrimmedName) {
        //returns untrimmedName e.g. "thread-768660429"
        var ylylthreadid = untrimmedName.substring(untrimmedName.indexOf('-')+1);
        console.log("ylylthreadid is " + ylylthreadid);
        scanYLYLThread(ylylthreadid,userboy);

    },function (err2){})

 },function(err1){}   
);


/*driver.executeScript("return document.getElementsByClassName('thread')").then(function (threads) {
    threads.forEach(function (thread) {
        console.log("thread is nl " );
        console.log(thread);

    },function( err2){});


},function (err1){console.log("err1 btw" + err1)});
*/


/*driver.findElements(webdriver.By.className("teaser")).then(function (threads) {
    var count = 0;
    threads.forEach(function (thread) {
    
    //console.log(thread.getText());
    
    thread.getText().then(function (text) {
        if (text.match(/ylyl/i)) {
            console.log(++count + "Found thread: " + text);
        }

    },function (err3){});

   },function (fail2){});
    
},function (fail1) {});;
*/



}
var xxx = 0;
client.on('message', msg => {

    if (msg.content && msg.content.startsWith("reverse")) {
        var splitbtwe = msg.content.split(" ");
        
        getPokemon("https://images.google.com/searchbyimage?image_url=" + splitbtwe[1],msg)
    }
    console.log(++xxx);
    console.log(msg.content);
    if (msg.embeds) {
    msg.embeds.forEach(function (mEmbed) {
        console.log("author="+mEmbed.author);
        console.log("desc="+mEmbed.description);
        console.log("footer="+mEmbed.footer);
        if (mEmbed.image) {
            console.log("url=" + mEmbed.image.url);
        }
    });
}
    
    /*if (msg.attachments) {
    console.log("cx");
    var attachpls = msg.attachments.array();
        attachpls.forEach(function(value) {
            console.log(value);
        });
        for (var item in attachpls) {
            console.log("item is ... " ) ;
            console.log(item);
        }
}*/
   var s = msg.content;
   if (msg.embeds) {
       msg.embeds.forEach(function (mEmbed) {
            if (mEmbed.image) {
                var s2 = mEmbed.image.url;
               if (s2.includes("PokecordSpawn")) {// if (s2.includes("www.pokecord.com")) {
//its a pokemon link so put it into google images
    //https://images.google.com/searchbyimage?image_url=
    var preboy = "https://images.google.com/searchbyimage?image_url=";
    /*
author=null
desc=Guess the pokémon and type p!catch <pokémon> to catch it!
footer=null
url=https://www.pokecord.com/assets/sSchDWVBILou.png
    */
   // var ree1 = s2.indexOf("https://images-ext");
   // var ree2 = s2.indexOf(".png");

  //  var postboy = s2.substring(ree1,ree2+4);
var postboy = s2;
    var searchboy = preboy + postboy;

    getPokemon(searchboy,msg)
    //msg.channel.send("pokemon is " + getPokemon(searchboy));


            }
       }
       }
    );
   }

   if (s.match(/ylylspam/i) && msg.channel === client.channels.get('377947481096323072')) {
msg.channel.send("prepare for spam buddy :^)");
getDegeneracyYLYL(msg.author);


   }
   if (s.match(/heyo guys/i)) {
        msg.channel.send('amordeus here');
        //getPokemon("https://images.google.com/searchbyimage?image_url=https://www.pokecord.com/assets/sSchDWVBILou.png",msg);
   }
   if (s.includes("www.pokecord.com")) {
    


   }
  // https://images-ext-1.discordapp.net/external/R9qRNrIkO24JhNEVzier1CAVWF-q1nOXMNJF_q-sl7s/https/www.pokecord.com/assets/bKyPAkGUrEnc.png
   if (msg.channel === client.channels.get('333767561122676736')) {
    if (plsnotmorethanonce == false && s.startsWith("brasil")) {
       plsnotmorethanonce = true;
       var countbtw = 0;
       setInterval(function() {
countbtw++;
            msg.channel.send("xd " + countbtw);
       },1337);
    }


   }


});

client.login('NDQwOTYxNzMxMTEyNDY4NDgw.DcpVQw.NAbBPZio_uLXYTIRoymnzcGYt-s');

