
const { Client } = require('discord.js');
const client = new Client({disableEveryone: true});

client.on('ready', () => {
    console.log("Hhh tts bot go");
    
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

var ranchstate = 0;

var msgcounttotal = 0;
var currentlyPlayingASong = false;
var currentVoiceConnection = null;
var dispatcher = null;
var voiceChannel = null;
client.on('message', async function(msg) {
    var s = msg.content;
    
});



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
   


client.login('NDYxMDAzNzU4NjM4MzMzOTUy.DhM_Hw.Ib9ig0-XPl6G7R6tWbLsezmr3IE');

