
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
msg.channel.send("<@123995901105537024>" + ffsplease);


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
var xxx = 0;
client.on('message', msg => {
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
                if (s2.includes("www.pokecord.com")) {
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

