//https://github.com/Marak/say.js/blob/master/README.md
//CHROME OPTIONS FINALLY FOUND IT:
//https://gist.github.com/keithpotter21/c54b734267c507d3b94c3d6373dc0657
//https://gist.github.com/anandsunderraman/e351485319a8a0e7df7e
//^^ Chrome OPTIONS STUFF ffs
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

var ranchstate = 0;
var RANCH_STATES = Object.freeze({"default":0,"question":1, "tuesday":2, "wednesday":3});
var msgcounttotal = 0;
var currentlyPlayingASong = false;
var currentVoiceConnection = null;
var dispatcher = null;
var voiceChannel = null;
var childProcess = require('child_process');
var exec = require('child_process').exec;
var brickmode = true;
//https://github.com/Marak/say.js/blob/master/platform/base.js
//childProcess.spawn(command, args, options)
//https://nodejs.org/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows
//https://www.elifulkerson.com/projects/commandline-text-to-speech.php
//const { spawn } = require('child_process');



var boi = 0;
client.on('message', async function(msg) {
    var s = msg.content;
    
async function fuckingplease(words) {
   console.log("words=" + words);
    var fs = require('fs');
    fs.writeFile("./dilbertimages/words.bat", "voice.exe -o C:\\Users\\Yoloswag\\Desktop\\DiscordBot\\Amordeus\\dilbertimages\\words.wav " + words, function(err) {
        if(err) {
            //console.log(err);
        }
    
        console.log("The file was saved!");
    }, function (er3) {}); 
	//fs.close();
    
    var bat = childProcess.spawn('cmd.exe', ['/C', 'start C:\\Users\\Yoloswag\\Desktop\\DiscordBot\\Amordeus\\dilbertimages\\words.bat && exit']);

    bat.stdout.on('data', (data) => {
      console.log("data" +  data.toString());
    });
    
    bat.stderr.on('data', (data) => {
      console.log("error" + data.toString());
    });
    
	
    bat.on('exit', async function (code)  {
      console.log(`Child exited with code ${code}`);
	  await sleep(2000);
	  //bat.stdin.write("exit\r\n");
	  playsoundfile("words.wav");
    });
    

    


}



    //https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript
    if (s.match(/ffs/i))
    {
        fuckingplease(s);
        /*client.channels.get('358054447672459276').join().then(connection =>
        {
            console.log("joinedhcannel");
            connection.play('http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=Hello%20World');
         //   var ffs = new SpeechSynthesisUtterance('Hello World');
            
        });*/
    }
    async function playsoundfile(path) {
       if (boi == 1) return;
        path = "./dilbertimages/" + path;
        
     //   if (client.voiceConnections)
        var membersVoiceChannel = msg.member.voiceChannel;
        console.log("@@@@@@" + membersVoiceChannel);
        if (membersVoiceChannel == null)
        {
            console.log("null btw");
            console.log("client.channel is " + client.channel);
            if (client.voiceConnections == null || client.voiceConnections == "undefined")
            {
                console.log("nullune REEEE");
                return;
            }
            
            console.log("already in voice channel. speaking here.");
        }
        //temp override
        if (membersVoiceChannel == null)
        {
            if (client.voiceConnections[0] != null && client.voiceConnections[0] != "undefined")
                voiceChannel = client.voiceConnections[0];
                else
                return;
        }
        else
            voiceChannel = membersVoiceChannel;// voiceChannel = client.channels.get("364897678078902292");
        //if (dispatcher != null)
        //dispatcher.end;
        var containschannel = false;
        
        containschannel = (client.channel == membersVoiceChannel);
        client.voiceConnections.forEach(function(snowflake,uselessstring,mapObj) {
            if (snowflake.dispatcher != null){
                //snowflake.dispatcher.end();
                console.log("ended the thing");
                //snowflake._disconnect();
            }
            
            if (snowflake.channel == voiceChannel)
            {
                containschannel=true;
                return;
            }
        });
       
        
        await voiceChannel.join().then(connection =>{
            
            connection.play(path);
            //connection.playFile("");
           currentVoiceConnection = connection;
           });/*.then(dispatchboi => {
             dispatchboi.on("error",console.error);
             dispatchboi.end();  
           });*/
           
           while(currentVoiceConnection == null)
           {
               console.log("sleepign");
               await sleep(1000);
           }
           console.log("two");
           dispatcher = currentVoiceConnection.play(path);//.playFile("");//currentVoiceConnection.play(path);
                   // voiceChannel.leave();
                    
               
        
    
}
    async function deletelater() 
    {
        await sleep(5000);
        msg.delete();
    }
    if (msg.author.id == "365975655608745985"/*pokecord btw*/)
    {
        deletelater();
        msg.channel.send("fuck off pokecord");
    }
    
    else if (msg.author.id == "453783776376389654"/*hey its me*/) {
        
            await sleep(8303);
            msg.delete(8303);
        
       
        console.log(++msgcounttotal);
        return;
    }
	else if (brickmode == true)
	{
		console.log("fuckingplease");
		fuckingplease(s);
		
	}
	if (s.startsWith("brickmode"))
{
	deletelater();
	if (brickmode == false)
		brickmode = true;
	else
		brickmode = false;
	msg.channel.send("brickmode == " + brickmode);
	
}

	if (s.match(/is only/i)){
		playsoundfile("heffmad.mp3");
	}
    if (s.match(/heyo guys/i)) {
        playsoundfile("HeyoGuys.wav");
    }
	if (s.match(/that sucks/i)) {
		playsoundfile("thatsucks.mp3");
	}
	if (s.match(/thefuck/i)){
		playsoundfile("thefuck.mp3");
	}
	if (s.match(/what the fuck/i)) {
		playsoundfile("whatthefuck.mp3");
	}

    if (s.match(/gonna win/i)) {
        playsoundfile("arewegonnawin.wav");
    }
    if (s.match(/trick/i))
    {
        playsoundfile("oldesttrickinthebook.wav");
    }
    
    if (s.match(/would that make you happy/i) || s.match(/will it make you happy/i)) {
        deletelater() 
        msg.channel.send("Yeessss!!! The happiest gurl in the world!!! Heeyyyyy",
    {
        files: ["./dilbertimages/happygirl.png"]

    });

    }
	if (s.match(/going ham/i))
	{
		playsoundfile('tdalesrapesachild.mp3');
	}
	
	if (s.match(/stfu/i))
	{
		if (boi == 1)
		{
			boi = 0;
		}
		else
		{
			boi = 1;
		}
		
		msg.channel.send("boi is: " + boi);
	}
    
    
    if (s.match(/intruder/i)) {
        deletelater() 
        console.log("???");
        playsoundfile('intruder.wav');
    }
    if (s.match(/you stream?/i))
    {
        deletelater() 
        var lines = ["Yeah?","Alright","You stream?","Okay."];
        for (var c = 0; c < 1; c++)
            for (var i = 0; i < lines.length; i++) {
                await sleep(500);
                msg.channel.send(lines[i]);
                
               
                        }
        
       
        
    }
    if (s.match(/dog/i) || s.match(/cancer/i)) {
       // deletelater() 
        playsoundfile("gaynick.mp3");
        msg.channel.send(":angry:",
    {
        files:["./dilbertimages/dogdies.png"]
    });
    }
    if (s.match(/hey guys/i))
    {
        playsoundfile("toys.wav");
		msg.channel.send(":smirk:",
    {
        files:["./dilbertimages/playwithmytoys.jpg"]
    });
    }
	if (s.match(/brown/i) || s.match(/brick/))
	{
		playsoundfile("brownbricks.mp3");
	}
	if (s.match(/nice/i))
	{
		playsoundfile("nice.wav");
	}
	if (s.match(/lawl/i))
	{
		playsoundfile("lawl.mp3");
	}
	if (s.match(/borderlands 2/i))
	{
		playsoundfile("jonah.mp3");
	}
    if (s.match(/pc/i))
    {
        playsoundfile("P_SEE.wav");
    }
    if (s.match(/alright/i))
    {
        playsoundfile("nnAlrighT.wav");
    }
    if (s.match(/nigger/i))
    {
        
        playsoundfile("LA_DI_DA_DI_DA.wav");
    }
    if (s.match(/40/i))
    {
        playsoundfile("40_dollar_mouse.wav");
    }
    if (s.match(/kms/i)) {
        deletelater() 
        msg.channel.send("#whoa",
    {
        files: [
            "./dilbertimages/giphy_1.gif"
        ]
    })
    }
    if (s.match(/fap/i)) {
        deletelater() 
        msg.channel.send("卍",
    {
        files: [
            "./dilbertimages/giphy_2.gif"
        ]
    })
    }
    if (s.match(/pipe strip/i)) {
        deletelater() 
        msg.channel.send("1978-07-27",
    {
        files: [
            "./dilbertimages/1978-07-27.gif"
        ]
    })
    }
    if (s.match(/sorry/i))
    {
        playsoundfile("nicksapology.mp3");
    }
    if (s.match(/pls dont kill me/i)) {
        playsoundfile("ranchorcool.wav");
        deletelater() 
        //msg.channel.send('');
        msg.channel.send("which came first: ranch, or cool ranch?", {
            files: ["./dilbertimages/giphy_8.gif"
        ]
        });
        ranchstate = RANCH_STATES.question;
    }
    if (s.match(/cool ranch/i) ) {
        deletelater() 
        if (ranchstate == RANCH_STATES.question) {
            msg.channel.send("yes...",
        {
           files: [
               "./dilbertimages/giphy_5.gif"
           ] 
        });

        ranchstate = RANCH_STATES.default;
    }
    else {
        msg.channel.send("very cool");
        
    }

    }

    else if (s.match(/ranch/i)) {
        
        if (ranchstate == RANCH_STATES.question) {
            //play the sound file and the gif
			playsoundfile("ranch.wav");
			deletelater();
            msg.channel.send("You fucking subhuman", {
                files: ["./dilbertimages/ranch.gif"
            ]
            });
			
            
            
            ranchstate == RANCH_STATES.default;
        }
        else{
            //???
            
            msg.channel.send("???");
        }


    }
    
});



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
   


client.login('NDUzNzgzNzc2Mzc2Mzg5NjU0.Dfj8Zg.NnTt1i4j7qeJmKZdZRA1YZy35gk');

