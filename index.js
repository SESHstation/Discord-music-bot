const Discord = require('discord.js');
const icy = require('icy');
const fs = require('fs');
const client = new Discord.Client();
const {
	prefix,
	token,
	voicechannel,
	logchannel,
	activity,
	list
} = require('./config.json');


var serverQueue = [...list];
const tire = "--------------------------------------------------"
var currentData;
client.once('ready', () => {
	//clientLogMessage("Status: Connected to discord");
	playStream();
});

client.once('reconnecting', () => {
	//clientLogMessage("Status: Reconnected to discord");
	playStream();
});

client.once('disconnect', () => {
	//clientLogMessage("Status: Disconnected from discord");
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();

embedColor = [1752220,3066993,3447003,10181046,15844367,15105570,15158332,9807270,
		8359053,3426654,1146986,2067276,2123412,7419530,12745742,11027200,10038562,
		9936031,12370112,2899536,16580705,12320855];
		let blancobillions = require('./teamseshjson/blancobillions.json');
		let bones = require('./teamseshjson/bones.json');
		let catsoup = require('./teamseshjson/catsoup.json');
		let dalgatov = require('./teamseshjson/dalgatov.json');
		let deergod = require('./teamseshjson/deergod.json');
		let drewthearchitect = require('./teamseshjson/drewthearchitect.json');
		let drip133 = require('./teamseshjson/drip133.json');
		let fleece = require('./teamseshjson/fleece.json');
		let ghostnghoul = require('./teamseshjson/ghostnghoul.json');
		let grayera = require('./teamseshjson/grayera.json');
		let greaf = require('./teamseshjson/greaf.json');
		let hnrk = require('./teamseshjson/hnrk.json');
		let kodyak = require('./teamseshjson/kodyak.json');
		let lyson = require('./teamseshjson/lyson.json');
		let messiah = require('./teamseshjson/messiah.json');
		let smittythebg = require('./teamseshjson/smittythebg.json');
		let vegard = require('./teamseshjson/vegard.json');
		let imageURL = require('./textjson/imageURL.json');
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             PING
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
if(message.content==(prefix+'testping')){
	currentData = new Date();
	message.channel.send({embed: { 
		color: embedColor[Math.floor(Math.random() * 23)], 
		author: { 
		name: client.user.username, 
		icon_url: client.user.avatarURL 
		}, 
		fields: [{ 
		name: "Ping:", 
		value: Math.round(client.ws.ping) + ' ms'
		}
		],
		image: {
			url: imageURL.pingImageURL,
		},
		timestamp: new Date(), 
		footer: { 
		icon_url: client.user.avatarURL, 
		text: "SESHSTATION" 
		} 
		} 
		});
		console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <testcomping>')
}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             HELP
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
	if(message.content==(prefix+'help')){
		currentData = new Date();
		message.channel.send({embed: { 
			color: embedColor[Math.floor(Math.random() * 23)], 
			author: { 
			name: client.user.username, 
			icon_url: client.user.avatarURL 
			}, 
			title: "BOT COMMANDS:", 
			url: "https://www.instagram.com/seshstation/", 
			fields: [{ 
			name: "TeamSesh members:", 
			value: "***<!teamsesh>***" 
			}, 
			{ 
			name: "Tour information:", 
			value: "***<!tour>***" 
			}, 
			{ 
			name: "Links:", 
			value: "***<!links>***" //[]()
			} 
			],
			image: {
				url: imageURL.helpImageURL,
			},
			timestamp: new Date(), 
			footer: { 
			icon_url: client.user.avatarURL, 
			text: "SESHSTATION" 
			} 
			} 
			});
			console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <help>')
	}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             SESHSTATIONAPP
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
	if(message.content==(prefix+'seshapp')){
		currentData = new Date();
		message.channel.send({embed: { 
			color: embedColor[Math.floor(Math.random() * 23)], 
			author: { 
			name: client.user.username, 
			icon_url: client.user.avatarURL 
			}, 
			title: "SESHAPP:", 
			url: "https://www.instagram.com/seshstation/", 
			fields: [{ 
			name: "\u200b", 
			value: "[Android](https://play.google.com/store/apps/details?id=team.sesh.teamsesh&hl)" 
			}, 
			{ 
			name: "\u200b", 
			value: "[iOS coming soon]()" //[]()
			},
			{
			name:"\u200b",
			value:"[PC (***Windows,Linux,Mac OS***)](https://docs.seshstation.com/apps/desktop)"	
			},
			],
			image: {
				url: imageURL.seshappImageURL,
			},
			timestamp: new Date(), 
			footer: { 
			icon_url: client.user.avatarURL, 
			text: "SESHSTATION" 
			} 
			} 
			});
			console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <seshapp>')
	}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             TEAMSESH
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
	if(message.content==(prefix+'teamsesh')){
		currentData = new Date();
		message.channel.send({embed: { 
			color: embedColor[Math.floor(Math.random() * 23)], 
			author: { 
			name: client.user.username, 
			icon_url: client.user.avatarURL 
			}, 
			title: "TEAMSESH MEMBERS:", 
			fields: [{ 
			name: '\u200b',
			value: "["+bones.artistname+"]("+bones.instagram+")"+" ***<!"+bones.command+">***"
			}, 
			{ 
			name: '\u200b',
			value: "["+blancobillions.artistname+"]("+blancobillions.instagram+")"+" ***<!"+blancobillions.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+catsoup.artistname+"]("+catsoup.instagram+")"+" ***<!"+catsoup.command+">***"
			}, 
			{ 
			name: '\u200b',
			value: "["+drewthearchitect.artistname+"]("+drewthearchitect.instagram+")"+" ***<!"+drewthearchitect.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+drip133.artistname+"]("+drip133.instagram+")"+" ***<!"+drip133.command+">***"
			}, 
			{ 
			name: '\u200b',
			value: "["+deergod.artistname+"]("+deergod.instagram+")"+" ***<!"+deergod.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+fleece.artistname+"]("+fleece.instagram+")"+" ***<!"+fleece.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+ghostnghoul.artistname+"]("+ghostnghoul.instagram+")"+" ***<!"+ghostnghoul.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+grayera.artistname+"]("+grayera.instagram+")"+" ***<!"+grayera.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+greaf.artistname+"]("+greaf.instagram+")"+" ***<!"+greaf.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+hnrk.artistname+"]("+hnrk.instagram+")"+" ***<!"+hnrk.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+dalgatov.artistname+"]("+dalgatov.instagram+")"+" ***<!"+dalgatov.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+kodyak.artistname+"]("+kodyak.instagram+")"+" ***<!"+kodyak.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+lyson.artistname+"]("+lyson.instagram+")"+" ***<!"+lyson.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+messiah.artistname+"]("+messiah.instagram+")"+" ***<!"+messiah.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+smittythebg.artistname+"]("+smittythebg.instagram+")"+" ***<!"+smittythebg.command+">***"
			},
			{ 
			name: '\u200b',
			value: "["+vegard.artistname+"]("+vegard.instagram+")"+" ***<!"+vegard.command+">***"
			},
			{ 
			name: '\u200b',
			value:"***If u want to know more about the artist. Write the <!> and its nickname***"
			},
			],
			image: {
				url: imageURL.teamseshImageURL,
			},
			timestamp: new Date(), 
			footer: { 
			icon_url: client.user.avatarURL, 
			text: "SESHSTATION" 
			} 
			} 
			});
			console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <teamsesh>')
	}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             TOUR INFO
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * tour.json
 */
	if(message.content==(prefix+'tour')){
		const {
			tourCheck,
			titleText,
			titleURL,
			valueText,
			imageURL
		} = require(`./textjson/tour.json`);
		if (tourCheck !="-"){
		currentData = new Date();
		message.channel.send({embed: { 
			color: embedColor[Math.floor(Math.random() * 23)], 
			author: { 
			name: client.user.username, 
			icon_url: client.user.avatarURL 
			}, 
			title: titleText, 
			url: titleURL, 
			fields: [
			{
			name:"\u200b",
			value: valueText
			}
			],
			image: {
				url: imageURL,
			},
			timestamp: new Date(), 
			footer: { 
			icon_url: client.user.avatarURL, 
			text: "SESHSTATION" 
			} 
			} 
			});
			console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <tour>')
	}
}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             LINKS
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * links.json
 * 
 */
	if(message.content==(prefix+'links')){
		currentData = new Date();
		message.channel.send({embed: { 
			color: embedColor[Math.floor(Math.random() * 23)], 
			author: { 
			name: client.user.username, 
			icon_url: client.user.avatarURL 
			}, 
			title: "LINKS:", 
			url: "https://www.instagram.com/seshstation/", 
			fields: [
			{
			name:"\u200b",
			value:"[TeamSesh Website](https://teamsesh.bigcartel.com/)"
			},
			{
			name:"\u200b",
			value:"[VK page](https://vk.com/teamsesh)",
			},
			{
			name:"\u200b",
			value:"[TeamSesh Merch](https://teamsesh.bigcartel.com/products)"
			},
			{ 
			name: "\u200b", 
			value: "[docs.seshstation](https://docs.seshstation.com/)" 
			}, 
			{ 
			name: "\u200b", 
			value: "[radio.seshstation](https://seshstation.com/public/main)" 
			}, 
			{ 
			name: "\u200b", 
			value: "[discography.seshstation](https://docs.seshstation.com/sources/discography)" //[]()
			} 
			],
			image: {
				url: imageURL.linksImageURL,
			},
			timestamp: new Date(), 
			footer: { 
			icon_url: client.user.avatarURL, 
			text: "SESHSTATION" 
			} 
			} 
			});
			console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <links>')
	}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             ARTIST INFO 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
function sendArtistMsg(artist) {
	embedColor = [1752220,3066993,3447003,10181046,15844367,15105570,15158332,9807270,
		8359053,3426654,1146986,2067276,2123412,7419530,12745742,11027200,10038562,
		9936031,12370112,2899536,16580705,12320855];
	currentData = new Date();
	const {
		instagram,
		soundcloud,
		twitter,
		bandcamp,
		youtube,
		spotify,
		apple,
		image_artist
	} = require(`./teamseshjson/${artist}.json`);

	m_msg = {
		embed: { 
			color: embedColor[Math.floor(Math.random() * 23)], 
			author: { 
			name: client.user.username, 
			icon_url: client.user.avatarURL 
			}, 
			title: "INFORMATION ABOUT THIS ARTIST:", 
			image: {
				url: image_artist,
			},
			timestamp: new Date(), 
			footer: { 
				icon_url: client.user.avatarURL, 
				text: "SESHSTATION" 
			},
			fields: new Array(),
		}
	};

	if (instagram != "-") {
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[Instagram]"+"("+instagram+")"
		});
	}
	if (soundcloud != "-") {
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[SoundCloud]"+"("+soundcloud+")"
		});
	}
	if (twitter != "-") {
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[Twitter]"+"("+twitter+")"
		});
	}
	if (bandcamp != "-") {
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[Bandcamp]"+"("+ bandcamp+")"
		});
	}
	if (youtube != "-") {
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[YouTube]"+"("+youtube+")"
		});
	}
	if (spotify != "-") {- 
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[Spotify]"+"("+spotify+")"
		});
	}
	if (apple != "-") {
		m_msg.embed['fields'].push({ 
			name: "\u200b", 
			value: "[Apple Music]"+"("+apple+")"
		});
	}
	message.channel.send(m_msg);
	console.log('\x1b[36m%s\x1b[0m','<'+currentData+'> '+'<'+message.author.username+'> used this command <'+artist+'>')
}
if(message.content==(prefix+blancobillions.command)){
	sendArtistMsg(blancobillions.command);
}
if(message.content==(prefix+bones.command)){
	sendArtistMsg(bones.command);
}
if(message.content==(prefix+catsoup.command)){
	sendArtistMsg(catsoup.command);
}
if(message.content==(prefix+deergod.command)){
	sendArtistMsg(deergod.command);
}
if(message.content==(prefix+drewthearchitect.command)){
	sendArtistMsg(drewthearchitect.command);
}
if(message.content==(prefix+drip133.command)){
	sendArtistMsg(drip133.command);
}
if(message.content==(prefix+fleece.command)){
	sendArtistMsg(fleece.command);
}
if(message.content==(prefix+ghostnghoul.command)){
	sendArtistMsg(ghostnghoul.command);
}
if(message.content==(prefix+grayera.command)){
	sendArtistMsg(grayera.command);
}
if(message.content==(prefix+greaf.command)){
	sendArtistMsg(greaf.command);
}
if(message.content==(prefix+hnrk.command)){
	sendArtistMsg(hnrk.command);
}
if(message.content==(prefix+dalgatov.command)){
	sendArtistMsg(dalgatov.command);
}
if(message.content==(prefix+kodyak.command)){
	sendArtistMsg(kodyak.command);
}
if(message.content==(prefix+messiah.command)){
	sendArtistMsg(messiah.command);
}
if(message.content==(prefix+smittythebg.command)){
	sendArtistMsg(smittythebg.command);
}
if(message.content==(prefix+vegard.command)){
	sendArtistMsg(vegard.command);
}
if(message.content==(prefix+lyson.command)){
	sendArtistMsg(lyson.command);
}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *                             functions
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
});
client.login(token);
function playStream() {
	client.channels.fetch(voicechannel).then(chanel => {
		chanel.join().then(connection => {
			//clientLogMessage("Status: Successfully connected to voice channel");
			if (activity) changeActivity(activity);
			
			connection.on("debug", e => {
				if (e.includes('[WS] >>') || e.includes('[WS] <<')) return;
				//clientLogMessage("Status: Connection warning - " + e);
				//if(e.includes('[WS] closed')) abortWithError();
			});
			connection.on("disconnect", () => {
				//clientLogMessage("Status: Connection disconnect");
			});
			connection.on("error", e => {
				//clientLogMessage("Status: Connection error");
				console.log(e);
			});
			connection.on("failed", e => {
				//clientLogMessage("Status: Connection failed");
				console.log(e);
			});
			
			initDispatcher(connection);
		}).catch(e => {
			//clientLogMessage("Status: Chanel connection error");
			console.log(e);
		});
	}).catch(e => {
		//clientLogMessage("Status: Chanel not found");
		console.log(e);
	});
}

function initDispatcher(connection) {
	console.log('\x1b[45m%s\x1b[0m','<'+currentData+'> '+'Broadcast Started');
	console.log('\x1b[45m%s\x1b[0m','<'+currentData+'> '+'You are now tuned in to SeshRadio')
	
	if (serverQueue === undefined || serverQueue.length == 0) {
		//clientLogMessage("Status: Repeating entire playlist");
		serverQueue = [...list];
	}
	const currentTrack = serverQueue.shift();
	if (currentTrack.name) changeActivity(currentTrack.name);
	
	const streamDispatcher = connection.play(currentTrack.url, {
			volume: false,
			highWaterMark: 512,
			bitrate: 128,
			fec: true
		})
		.on("finish", () => {
		//	clientLogMessage("Status: Broadcast was finished");
			streamDispatcher.destroy();
			initDispatcher(connection);
		});
		
	streamDispatcher.setBitrate(128);
	streamDispatcher.setFEC(true);
	
	//streamDispatcher.on("debug", e => {
	//	//clientLogMessage("Status: Dispatcher warning - " + e);
	//});
	streamDispatcher.on("error", e => {
		//clientLogMessage("Status: Broadcast connection error");
		console.log(e);
		abortWithError();
	});
	
	getICY(currentTrack.url);
}

function getICY(url) {
	const icyReader = icy.get(url, function (i) {
		i.on('metadata', function (metadata) {
			let icyData = icy.parse(metadata);
			if (icyData.StreamTitle) changeActivity(icyData.StreamTitle);
		});
		i.resume();
	});
}

function abortWithError() {
	console.log("Status: The connection to the radio station is interrupted or it does not respond, interrupting the process");
	streamDispatcher.destroy();
	process.exit(1);
}

function clientLogMessage(message) {
	client.channels.fetch(logchannel).then(chanel => {
		chanel.send(message)
	}).catch(e => console.log(e));
	
	console.log(message);
}

function changeActivity(message) {
	var currentData = new Date();
	//clientLogMessage("Now playing: " + message);
	console.log('<'+currentData+'>'+' Now playing: ' + message);
	client.user.setActivity(message, {
		type: 'LISTENING'
	});;
}
