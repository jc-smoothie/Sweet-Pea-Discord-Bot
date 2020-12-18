const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const Levels = require('discord-xp');
const mongoose = require('mongoose');
const memberCount = require('./member-count');

/*const {
    Client,
    Attachment
} = require('discord.js');*/

const ytdl = require("ytdl-core");

const client = new Discord.Client();

const queue = new Map();

/*let createdTime = message.guild.createdAt
let memberCount = message.guild.memberCount
let onlineCount = message.guild*/

/*
const EconomyClient = require('./structures/Client');
new EconomyClient().start(require('./config').token, './commands');
*/

//mongoose.connect('mongodb+srv://jcsmoothie:TheW1224RD@sweetpea.wwdao.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true});

//Levels.setURL("mongodb+srv://jcsmoothie:TheW1224RD@sweetpea.wwdao.mongodb.net/Data")

//This is the other client assignor
//const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//const client = new Client();

//This is another client assignor
const {Client, MessageEmbed} = require('discord.js');

const prefix = '+';

//mongodb+srv://jcsmoothie:Z3TWW946XLWLVVG5F@sweetpea.wwdao.mongodb.net/Data?retryWrites=true&w=majority

const fs = require('fs');

require('events').EventEmitter.defaultMaxListeners = 100;
//emitter.setMaxListeners(20)

const EventEmitter = require("events");
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { error } = require('console');
const { execute } = require('./commands/rank');
class MyEmitter extends EventEmitter{}

var emitter = new MyEmitter()
//var emitter2 = new MyEmitter();

//console.log(`emitter: ${emitter.getMaxListeners()}`);

client.commands = new Discord.Collection();

client.login('');
//client.login(process.env.token);

//Sort the Court Stuff
var attempts = 1;

function increateAttempts(){
    attempts = attempts + 1
}

function resetAttempts(){
    attempts = 1
}

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
   const command = require(`./commands/${file}`);

   client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Sweet Pea is online!');
    client.user.setActivity('anime! | +help', {type: "WATCHING"}).catch(console.error);

    memberCount(client)
    //welcome(client)
});

//Message sent to the owner of the guild who added Sweet Pea to their server
client.on("guildCreate", (guild) => {
    guild.owner.send(`Thanks for inviting me to **${guild.name}**! ` +  "Type `+help` to display a list of categorized commands, and I hope I am able to suit your needs!")
});

/*client.on("guildCreate", (guild) => {
    var found = false;
    guild.channels.forEach(function(channel, id) {
        // If a channel is already found, nothing more needs to be done
        if(found == true || !channel.type == "text") {
          return;
        }
        // If the channel isn't found and the bot has permission to 
        // send and read messages in the channel, send a welcome message there
        if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
          found = true;
          return channel.send("Thanks for inviting me! Do `+help` so display a list of command categories.")
        }
    })
});*/

//Welcome message
const jc_smoothie_server = '782599860238942209';
const Eclipsys_Contact = '700620542419664968';


client.on("guildMemberAdd", (member) => {
    if(member.guild.id == Asian_Invasion || member.guild.id == Eclipsys_Contact || member.guild.id == jc_smoothie_support_server || member.guild.id == jc_smoothie_server || member.guild.id == The_Toilet){
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome");

        let embed = new MessageEmbed()
        .setTitle(`Welcome to ${member.guild.name}!`)
        .setImage("https://data.whicdn.com/images/307098937/original.gif")
        //.setDescription(`**Thank you for joining our server!** \n Hey ${member.user.tag}! Make sure to read the rules, check out the reaction roles, and we hope you enjoy your stay! Please contect any of the staff if you have any questions.`)
        .setDescription(`**Thank you for joining our server!** \n Hey **${member.displayName}**! Make sure to read the rules, check out the reaction roles, and we hope you enjoy your stay! Please contect any of the staff if you have any questions.`)
        .setColor('#66ccff')
        .setThumbnail(member.user.avatarURL())
        .setFooter(`Member #${member.guild.memberCount}`)
        .setTimestamp()
        welcomeChannel.send(embed);
    }
});

/*client.on("guildMemberRemove", (member) => {
    if(member.guild.id == Asian_Invasion || member.guild.id == Eclipsys_Contact || member.guild.id == jc_smoothie_support_server || member.guild.id == jc_smoothie_server || member.guild.id == The_Toilet){
        const goodbyeChannel = member.guild.channels.cache.find(channel => channel.name === "goodbye");

        let embed = new MessageEmbed()
        .setTitle(`Goodbye, ${member}`)
        .setDescription("Come back soon, or not.")
        .setColor('#66ccff')
        .setTimestamp()
    
        goodbyeChannel.send(embed);
    }
});*/

//Xp System
/*client.on("message", async message => {
    if(!message.guild) return;
    if(message.author.bot) return;

    const randomXp = Math.floor(math.random() * 9) + 1;
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if(hasLeveledUp){
        const user = await Levels.fetch(message.author.id, message.quild.id);
        message.channel.send(`You leveled up to ${user.level}! Keep it up!`);
    }

    if(command == "level"){
        const user = await Levels.fetch(message.author.id, message.quild.id);
        message.channel.send(`You are currently level **${user.level}**!`);
    }

    if(command == "leaderboard" || command == "lb"){
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if(rawLeaderboard.length < 1) return reply("Nobody's in the leaderboard yet.");

        const leaderboard = Levels.computerLeaderboard(bot, rawLeaderboard);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocalString()}`);

        message.channel.send(`${lb.join("\n\n")}`);
    }
});*/

var servers = {};
//const yts = require("yt-search");

/*client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'play':
            if(!message.guild) return message.channel.send('You must be in a guild.');
            if (!message.content.includes('https://www.youtube.com/watch?v=')){
                message.channel.send('Please provide a valid youtube link!');
                return;
            }

            //let song;
            //if (ytdl.validateURL(args[1])){
                //const songInfo = await ytdl.getInfo(args[1]);
                //song = {
                    //title: songInfo.title,
                    //url: songInfo.video_url
                //}
            //} else{
                //const {videos} = await yts(args.slice(1).join(" "));
                //if (!videos.length) return message.channel.send("No songs were found!");
                //song = {
                    //title: videos[0].title,
                    //url: videos[0].url
                //}
            //}
            
            function play(connection, message){
                var server = servers[message.guild.id];
                    //var server = process.env.server;

                
                //if(!server.queue[1]){
                    //server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}))}
                    
                    //server.dispatcher.on("finish",function(){
                        //server.queue.shift()
                        //if(server.queue[0]){
                            //play(connection,message)
                        //} else{
                            //server.queue.push(args[1]);
                        //}
                    //});
                
                
                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on("finish", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    } else{
                        connection.disconnect();
                        message.channel.send("Song done, bye!")
                    }
                });
                
            }

            if(!args[1]){
                message.channel.send("You need to provide a link!");
                return;
            }

            if(!message.member.voice.channel){
                message.channel.send("You must be in a voice channel to play music!");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }
            
            var server = servers[message.guild.id];
                //var server = process.env.server;

            server.queue.push(args[1]);

            var voiceChannelName = message.member.voice.channel.name;
            var textChannelName = message.channel.name;
            var embed = 0;

            while(embed == 0){
                if(message.embeds[0]){
                    var videoTitle = message.embeds[0].title;
                    message.channel.send("Joined **" + voiceChannelName + "** from **" + textChannelName + `** by __*${message.member.displayName}*__! Now playing __` + videoTitle + "__!");
                    embed = 1;
                }
            }

            message.react('✅');

            if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(connection){
                play(connection, message);
            });

        break;

        case 'skip':
            //var server = servers[message.guild.id];
                //var server = process.env.server;
            //if(server.dispatcher) server.dispatcher.end();
            //message.react('✅');
            //message.channel.send("Skipping the current song.");
        //break;

        case 'stop':
            if(!message.guild) return message.channel.send('You must be in a guild.');
            var server = servers[message.guild.id];
                //var server = process.env.server;
            if(message.guild.voice.connection){
                for(var i = server.queue.length -1; i >= 0; i--){
                    server.queue.splice(i, 1);
                }

                server.dispatcher.end();
                message.react('✅');
                message.channel.send("Ending the queue, leaving the voice channel.");
                console.log('Stopped the queue');
            }

            if(message.guild.connection) message.guild.voice.connection.disconnect();
        break;
    }
});*/

/*
//Pause
server.dispatcher.pause()
//Resume
server.dispatcher.play()
server.dispatcher.resume()

View queue (show YouTube links, basic):
var server = servers[message.guild.id];
var queueOutput;
var count = 1;

server.queue.forEach(function(entry) { // For each queue item
     queueOutput = queueOutput + count + ". " + entry + "\n";
     count++;
});
message.channel.send(queueOutput)
*/

client.on('message', message => {
    if(message.author.id === client.user.id) return;
    const reply = message.content;
    const replyFormatted = reply.toLowerCase();
    if(replyFormatted == 'cool'){
        /*setTimeout(function(){
            message.channel.send("nice");
        }, 500);*/
        message.channel.startTyping();
        setTimeout(() => {  message.channel.send("nice"); }, 1000);
        message.channel.stopTyping();
    } else if(replyFormatted == 'oof'){
        message.channel.startTyping();
        setTimeout(() => {  message.channel.send("rip"); }, 1000);
        message.channel.stopTyping();
    } else if(replyFormatted == ';-;'){
        message.react('😢');
    } else if(replyFormatted == 'wat'){
        message.react('❓');
    } else if(replyFormatted == 'morning'){
        /*message.channel.startTyping();
        setTimeout(() => {  message.channel.send("gm!"); }, 1000);
        message.channel.stopTyping();*/
        message.react('🌄');
    } else if(replyFormatted == 'yawn' || replyFormatted == '*yawn*'){
        message.react('🥱');
    } /*else if(replyFormatted == 'introduce yourself'){
        setTimeout(function(){
            message.channel.send("My name is Sweet Pea, and I am a discord bot coded in JavaScript by jc smoothie!");
        }, 500);
        setTimeout(function(){
            message.channel.send("I can help members in the server self-assign roles, and role a dice.");
        }, 500);
    } else if(replyFormatted == "okay, that's all"){
        setTimeout(function(){
            message.channel.send("Sweet, bye!~");
        }, 500);
    } else if(replyFormatted == "i'm sorry"){
        if(attempts == 7){
            message.channel.send("*sniff* Really?");
        }
    } else if(replyFormatted == "yes"){
        if(attempts == 7){
            message.channel.send("Hmm, give me a hug, then I'll forgive you.");
        }
    }*/
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'kick':
            if(!message.guild) return message.channel.send('You must be in a guild.');
            if(!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("BAN_MEMBERS")) return message.reply("Lack of permissions!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);

                if(member){
                    member.kick("You were kicked for trolling!").then(() => {
                        message.reply(`Successfully kicked ${user.tag}.`);
                    }).catch(err => {
                        message.reply(`I was unable to kick the member.`);
                        console.log(err);
                    })
                } else{
                    message.reply("That user isn\'t in this guild.")
                }
            } else{
                message.reply('You need to specify a user!');
            }
        break;
    }
})

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'ban':
            if(!message.guild) return message.channel.send('You must be in a guild.');
            if(!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("BAN_MEMBERS")) return message.reply("Lack of permissions!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);

                if(member){
                    member.ban("You were banned for being bad!").then(() => {
                        message.reply(`Successfully banned ${user.tag}.`);
                    }).catch(err => {
                        message.reply(`I was unable to ban the member.`);
                        console.log(err);
                    })
                } else{
                    message.reply("That user isn\'t in this guild.")
                }
            } else{
                message.reply('You need to specify a user!');
            }
        break;
    }
})

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'unban':
            if(!message.guild) return message.channel.send('You must be in a guild.');
            if(!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("BAN_MEMBERS")) return message.reply("Lack of permissions!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);

                if(member){
                    guild.members.unban(member, 'Ban appealed.').then(() => {
                        message.reply(`Successfully unbanned ${user.tag}.`);
                    }).catch(err => {
                        message.reply(`I was unable to unban the member.`);
                        console.log(err);
                    })
                } else{
                    message.reply("That user isn\'t banned in this guild.")
                }
            } else{
                message.reply('You need to specify a user!');
            }
        break;
    }
})

// Stores the current count.
let count = 0
// Stores the timeout used to make the bot count if nobody else counts for a set period of
// time.
let timeout

client.on('message', ({channel, content, member}) => {
    // Only do this for the counting channel of course
    // If you want to simply make this work for all channels called 'counting', you
    // could use this line:
    if(client.channels.cache.filter(c => c.name === 'counting').keyArray().includes(channel.id)){
    //if (channel.id === 'counting channel id') {
      // You can ignore all bot messages like this
      if(member.user.bot) return
      // If the message is the current count + 1...
      if(Number(content) === count + 1){
        // ...increase the count
        count++
        // Remove any existing timeout to count
        if(timeout) client.clearTimeout(timeout)
        // Add a new timeout
        timeout = client.setTimeout(
          // This will make the bot count and log all errors
          () => channel.send(++count).catch(console.error),
          // after 30 seconds
          30000
        )
      // If the message wasn't sent by the bot...
      } else if(member.id !== client.user.id){
        // ...send a message because the person stuffed up the counting (and log all errors)
        channel.send(`${member} messed up!`).catch(console.error)
        // Reset the count
        count = 0
        // Reset any existing timeout because the bot has counted so it doesn't need to
        // count again
        if(timeout) client.clearTimeout(timeout)
      }
    }
  })

client.on('message', message => {
   if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if(command == 'help'){
       const helpEmbed = new MessageEmbed()
       .setTitle('Help!')
       .setDescription('**Note** \n These are the current commands at the moment. \n There will be more commands and features to come, as my developer learns how and implements them. \n \n +support - Receive a link to the support server via dm. \n +invite - Receive an invite link with instructions via dm. \n +updates - Display a message of recent updates and additions. \n \n +fun - Display a list of fun commands! \n +games - Display a list of game commands! \n +tools - Display a list of tool commands! \n +music - [Note: Currently unavailable due to bot hosting.] Display a list of music commands! \n +moderation - Display a list of moderation commands! \n +animals - Display a list of animal commands! \n +misc - Display a list of miscellaneous commands!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(helpEmbed);
   } else if(command == 'fun'){
       const funEmbed = new MessageEmbed()
       .setTitle('Fun!')
       .setDescription('**Actions!** \n +hug [person] - Hug someone in the server! \n +slap [person] - Slap someone in the server! \n +kiss [person] - Kiss someone in the server! \n +kill [person] - Kill someone in the server! \n \n **Rates!** \n You may leave the [person] space empty to check the rate of yourself. \n +cuterate [person] \n +weebrate [person] \n +epicrate [person] \n +smartrate [person] \n \n **Other** \n +color [color] - (Only works for servers with color roles created by jc smoothie themself) Give yourself a colored username! \n +colors - Display the color roles you can choose from for the +color command!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(funEmbed);
   } else if(command == 'games'){
       const gamesEmbed = new MessageEmbed()
       .setTitle('Games!')
       .setDescription('+stc - Play Sort The Court, a game where you rule a kingdom! \n +cah - (Work in progress) Play Cards Against Humanity, a card game that can get you to laugh at offensive and inappropriate jokes! \n +among - Send a message to start an Among Us game session for players to sign up with an emote. \n +camong -  Send a message to inform players the Among Us Game session is canceled. \n +scratch - Send a link to the Scratch profile of my developer with all their projects. \n +ping - Play ping pong with me!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(gamesEmbed);
   } else if(command == 'tools'){
       const toolsEmbed = new MessageEmbed()
       .setTitle('Tools!')
       .setDescription('+roll [number] - Roll a number up to the number you inputted. \n +timer [seconds] - Set a timer for a number of seconds. \n +av - Display your avatar. \n +8ball - Shake a magic 8 ball! \n +coin - Flip a coin. \n +poll [text] - Start a poll for responses. \n +ynpoll [text] - +poll [text] - Start a poll with the answer being either yes or no.')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(toolsEmbed);
   } else if(command == 'music'){
       const toolsEmbed = new MessageEmbed()
       .setTitle('Music!')
       .setDescription('[Note: These music commands are currently unavailable due the the way Sweet Pea is currently hosted.] \n \n There is no queueing ability at the moment, so you will have to retype the play command with another link to continue playing music. \n \n +play [link] - Play music with a YouTube link in a voice channel. \n +stop - Stops playing songs and leaves the voice channel.') //There is a skip command, however it works just like the stop command, since there would only be one song in the "queue."
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(toolsEmbed);
   } else if(command == 'moderation'){
       const toolsEmbed = new MessageEmbed()
       .setTitle('Moderation!')
       .setDescription('**Note** \n The muting and unmuting commands are currently unavailable. These commands are being looked at, and hopefully fixed in the future. \n \n +clear [number] - Clear a number of messages in a text channel. Max number of messages to be cleared at a time is 100. \n +kick [person] - Kicks a user in the server. \n +ban [person] [time] - Bans a user, with an option for a timed ban. \n +unban [person] - Unbans a banned user. \n +mute [person] [time] - Mute a user, with an option for a timed mute. \n +unmute [person] - Unmutes a user.')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(toolsEmbed);
   } else if(command == 'animals'){
       const animalsEmbed = new MessageEmbed()
       .setTitle('Animals!')
       .setDescription('+dog \n +cat \n +duck \n +cow \n +sheep \n +pig \n +turtle \n +horse \n +lion \n +tiger \n +wolf \n +penguin \n +bear \n +fish')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(animalsEmbed);
   } else if(command == 'misc'){
       const miscEmbed = new MessageEmbed()
       .setTitle('Miscellaneous!')
       .setDescription('+token')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(miscEmbed);
   } else if(command == 'updates'){
       const miscEmbed = new MessageEmbed()
       .setTitle('Updates!')
       .setDescription('The next batch of commands have arrived!: \n Sweet Pea now has a counting game! Create a new text channel in your server exactly named "counting" and start by typing 1. The game is to keep counting, and you lose by either typing the incorrect number next in the sequence or typing text. \n \n **Music!** \n There is no queueing ability at the moment, so you will have to retype the play command with another link to continue playing music. There is a skip command, however it works just like the stop command, since there would only be one song in the "queue." \n \n +play [link] - Play music with a YouTube link in a voice channel. \n +stop - Stops playing songs and leaves the voice channel. \n \n **Rates!** \n You may leave the [person] space empty to check the rate of yourself. \n \n +cuterate [person] \n +weebrate [person] \n +epicrate [person] \n +smartrate [person] \n \n **Moderation!** \n Ban and mute commands have the option to specify an amount of time, otherwise you may leave it blank. \n You must have a member role and muted role called exactly "Member" and "Muted" for the mute and unmute commands to be functioning. At the moment, these two commands are being looked at, and hopefully fixed in the future. \n \n +clear [number] - Purge command. \n +kick [person] - Kicks a user. \n +ban [person] [time] - Bans a user. \n +mute [person] [time] - Mutes a user. \n +unmute [person] - Unmutes a user who has been muted. \n \n Currently working on: \n - Welcome command')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(miscEmbed);
   } else if(command == 'colors'){
       const colorsEmbed = new MessageEmbed()
       .setTitle('Colors!')
       .setDescription("**Note** \n Color roles are only available to a certain amount of servers that have had them configured onto by jc smoothie, my creator. \n If you know this server does have color roles configured by jc smoothie, then your entire message must be in lowercase, otherwise your message won't be read properly. \n \n Type `+color` along with a color from the list below to get that color role! \n To remove a color you have, retype the same message as you did to receive the color. \n Your previous color will be swapped out when you get a different color, so no need to remove it yourself! \n This makes it so you may only have one color at a time, ensuring that the color you recently received to will actually change the color of your displayed name. \n \n **Colors** \n Black \n Gray \n White \n Pink \n Red \n Pastel Red \n Pastel Orange \n Orange \n Yellow \n Pastel Yellow \n Yellow Green \n Green \n Pastel Green \n Light Blue Green \n Blue Green \n Pastel Blue \n Blue \n Indigo \n Violet \n Pastel Purple")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(colorsEmbed);
   } else if(command == 'ping'){
       client.commands.get('ping').execute(message, args);
   } /*else if(command == 'rules'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       const commandsEmbed = new MessageEmbed()
       .setTitle('Rules!')
       .setDescription('> 1) Aside from Eclipsys Contact’s Community Guidelines, please adhere to Discord’s: \n Guidelines: https://discordapp.com/guidelines \n Terms of Service: https://discordapp.com/tos \n \n > 2) Discord names and avatars must be appropriate. \n No NSFW or suggestive content. \n \n > 3) Be respectful to anyone and everyone on the server. \n No one deserves such treatment, this includes staff as well. \n \n > 4) Any content that is NSFW is not allowed under any circumstances. \n If you must question on whether posting such content is allowed, don’t post it. \n (Take flirting and NSFW talks to DMS) \n \n > 5) Spamming in any form is not allowed. \n This includes text channels, voice channels and direct messages alike. \n \n > 6) Personal attacks are not tolerated \n This includes targeting someone just to provoke them. \n \n > 7) Do not attempt to bypass any blocked words \n You can’t use racist words, any type of slur and anything that is clearly not appropriate for the server. \n \n > 8) Don’t ping without legitimate reasoning behind them \n This includes pinging staff or helpers, if they are troll pings etc, its mutable. \n \n > 9) Alternate accounts are not allowed under any circumstances \n This is due to how they can be abused to avoid bans and mutes. \n \n > 10) No Discord server invite links or codes \n These links are not allowed and is an instant ban whether it is Dm or Server. \n \n > 11) Do not advertise without permission \n Do not advertise social media/content platforms. \n \n > 12) Do not role-play within the server \n Roleplaying is forbidden in the server. \n \n > 13) Raiding is not allowed \n Instant ban for raiding whether voice chat or text chat. \n \n > 14) Content relating to suicide or death \n Emoji combination, slang, speech and all texts. \n \n > 15) Anything to target specific groups/individuals is prohibited \n This includes antisemitism, Islamophobia, homophobia, racism etc. \n \n ⚠️ These rules are subject to change at any time.')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Thank you for reading! Now go and have fun!')
       message.channel.send(commandsEmbed);
       
       //message.channel.send('> 1) Aside from Eclipsys Contact’s Community Guidelines, please adhere to Discord’s: \n Guidelines: https://discordapp.com/guidelines \n Terms of Service: https://discordapp.com/tos \n > 2) Discord names and avatars must be appropriate. \n No NSFW or suggestive content. \n > 3) Be respectful to anyone and everyone on the server. \n No one deserves such treatment, this includes staff as well. \n > 4) Any content that is NSFW is not allowed under any circumstances. \n If you must question on whether posting such content is allowed, don’t post it. \n (Take flirting and NSFW talks to DMS) \n > 5) Spamming in any form is not allowed. \n This includes text channels, voice channels and direct messages alike. \n > 6) Personal attacks are not tolerated \n This includes targeting someone just to provoke them. \n > 7) Do not attempt to bypass any blocked words \n You can’t use racist words, any type of slur and anything that is clearly not appropriate for the server. \n > 8) Don’t ping without legitimate reasoning behind them \n This includes pinging staff or helpers, if they are troll pings etc, its mutable. \n > 9) Alternate accounts are not allowed under any circumstances \n This is due to how they can be abused to avoid bans and mutes. \n > 10) No Discord server invite links or codes \n These links are not allowed and is an instant ban whether it is Dm or Server. \n > 11) Do not advertise without permission \n Do not advertise social media/content platforms. \n > 12) Do not role-play within the server \n Roleplaying is forbidden in the server. \n > 13) Raiding is not allowed \n Instant ban for raiding whether voice chat or text chat. \n > 14) Content relating to suicide or death \n Emoji combination, slang, speech and all texts. \n > 15) Anything to target specific groups/individuals is prohibited \n This includes antisemitism, Islamophobia, homophobia, racism etc. \n ⚠️ These rules are subject to change at any time.');
   } else if(command == 'amongrules'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       const commandsEmbed = new MessageEmbed()
       .setTitle('Among Us Rules!')
       .setDescription("> 1) Mute yourself when in game \n You may ONLY unmute in the in-game meetings. \n \n > 2) When you have been killed in game and are dead, STAY in the Alive voice channel \n You may move into the Dead voice channel ONCE a meeting is held in-game, and everyone else knows that you're dead. \n This is so others will only know when someone's dead by finding a dead body, which is how the game's intended to work. \n \n Note: Those who have died and are in the Dead voice channel may speak with each other.")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Thank you for reading! Now go and have fun!')
       message.channel.send(commandsEmbed);
   } else if(command == 'lore'){
       client.commands.get('lore').execute(message, args);
   }*/ else if(command == 'rank'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       client.commands.get('rank').execute(message, args);
   } else if(command == 'color'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       client.commands.get('color').execute(message, args);
   } else if(command == "addcolors"){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Lack of permissions!");

       const black = message.guild.roles.cache.find(black_role => black_role.name === '「Black」');
       const gray = message.guild.roles.cache.find(gray_role => gray_role.name == '「Gray」');
       const white = message.guild.roles.cache.find(white_role => white_role.name == '「White」');
       const pink = message.guild.roles.cache.find(pink_role => pink_role.name == '「Pink」');
       const red = message.guild.roles.cache.find(red_role => red_role.name == '「Red」');
       const pastel_red = message.guild.roles.cache.find(pastel_red_role => pastel_red_role.name == '「Pastel Red」');
       const pastel_orange = message.guild.roles.cache.find(pastel_orange_role => pastel_orange_role.name == '「Pastel Orange」');
       const orange = message.guild.roles.cache.find(orange_role => orange_role.name == '「Orange」');
       const yellow = message.guild.roles.cache.find(yellow_role => yellow_role.name == '「Yellow」');
       const pastel_yellow = message.guild.roles.cache.find(pastel_yellow_role => pastel_yellow_role.name == '「Pastel Yellow」');
       const yellow_green = message.guild.roles.cache.find(yellow_green_role => yellow_green_role.name == '「Yellow Green」');
       const green = message.guild.roles.cache.find(green_role => green_role.name == '「Green」');
       const pastel_green = message.guild.roles.cache.find(pastel_green_role => pastel_green_role.name == '「Pastel Green」');
       const light_blue_green = message.guild.roles.cache.find(light_blue_green_role => light_blue_green_role.name == '「Light Blue Green」');
       const blue_green = message.guild.roles.cache.find(blue_green_role => blue_green_role.name == '「Blue Green」');
       const pastel_blue = message.guild.roles.cache.find(pastel_blue_role => pastel_blue_role.name == '「Pastel Blue」');
       const blue = message.guild.roles.cache.find(blue_role => blue_role.name == '「Blue」');
       const indigo = message.guild.roles.cache.find(indigo_role => indigo_role.name == '「Indigo」');
       const violet = message.guild.roles.cache.find(violet_role => violet_role.name == '「Violet」');
       const pastel_purple = message.guild.roles.cache.find(pastel_purple_role => pastel_purple_role.name == '「Pastel Purple」');

       //Create Black Role
       if(black){
           message.channel.send("Tind the 「Black」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Black」',
                   color: '111111',
               }
           });
       }

       //Create Gray Role
       if(gray){
           message.channel.send("The 「Gray」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Gray」',
                   color: 'acacac',
               }
           });
       }
       
       //Create White Role
       if(white){
           message.channel.send("The 「White」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「White」',
                   color: 'ffffff',
               }
           });
       }
       
       //Create Pink Role
       if(pink){
           message.channel.send("The 「Pink」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pink」',
                   color: 'ffa0a0',
               }
           });
       }
       
       //Create Red Role
       if(red){
           message.channel.send("The 「Red」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Red」',
                   color: 'ff0000',
               }
           });
       }
       
       //Create Pastel Red Role
       if(pastel_red){
           message.channel.send("The 「Pastel Red」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pastel Red」',
                   color: 'ff5555',
               }
           });
       }
       
       //Create Pastel Orange Role
       if(pastel_orange){
           message.channel.send("The 「Pastel_Orange」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pastel Orange」',
                   color: 'ffac69',
               }
           });
       }
       
       //Create Orange Role
       if(orange){
           message.channel.send("The 「Orange」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Orange」',
                   color: 'e67e22',
               }
           });
       }
       
       //Create Yellow Role
       if(yellow){
           message.channel.send("The 「Yellow」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Yellow」',
                   color: 'f1c40f',
               }
           });
       }
       
       //Create Pastel Yellow Role
       if(pastel_yellow){
           message.channel.send("The 「Pastel_yellow」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pastel Yellow」',
                   color: 'ffffa0',
               }
           });
       }
       
       //Create Yellow Green Role
       if(yellow_green){
           message.channel.send("The 「Yellow Green」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Yellow Green」',
                   color: 'ccff00',
               }
           });
       }
       
       //Create Green Role
       if(green){
           message.channel.send("The 「Green」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Green」',
                   color: '1eff00',
               }
           });
       }
       
       //Create Pastel Green Role
       if(pastel_green){
           message.channel.send("The 「Pastel Green」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pastel Green」',
                   color: '90ff9b',
               }
           });
       }
       
       //Create Light Blue Green Role
       if(light_blue_green){
           message.channel.send("The 「Light Blue Green」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Light Blue Green」',
                   color: '00ffac',
               }
           });
       }
       
       //Create Blue Green Role
       if(blue_green){
           message.channel.send("The 「Blue Green」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Blue Green」',
                   color: '1abc9c',
               }
           });
       }
       
       //Create Pastel Blue Role
       if(pastel_blue){
           message.channel.send("The 「Pastel Blue」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pastel Blue」',
                   color: 'aae1ff',
               }
           });
       }
       
       //Create Blue Role
       if(blue){
           message.channel.send("The 「Blue」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Blue」',
                   color: '00acff',
               }
           });
       }
       
       //Create Indigo Role
       if(indigo){
           message.channel.send("The 「Indigo」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Indigo」',
                   color: '9b59b6',
               }
           });
       }
       
       //Create Violet Role
       if(violet){
           message.channel.send("The 「Violet」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Violet」',
                   color: '71368a',
               }
           });
       }
       
       //Create Pastel Purple Role
       if(pastel_purple){
           message.channel.send("The「Pastel Purple」 color role already exists.");
       } else{
           message.guild.roles.create({
               data: {
                   name: '「Pastel Purple」',
                   color: 'c17cff',
               }
           });
       }
       
       message.channel.send("Created 20 new color roles! Type `+colors` to see what colors were added. To remove all 20 of these colors, type `+delcolors`.");
   } else if(command == 'delcolors'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Lack of permissions!")
       
       const black = message.guild.roles.cache.find(black_role => black_role.name === '「Black」');
       const gray = message.guild.roles.cache.find(gray_role => gray_role.name == '「Gray」');
       const white = message.guild.roles.cache.find(white_role => white_role.name == '「White」');
       const pink = message.guild.roles.cache.find(pink_role => pink_role.name == '「Pink」');
       const red = message.guild.roles.cache.find(red_role => red_role.name == '「Red」');
       const pastel_red = message.guild.roles.cache.find(pastel_red_role => pastel_red_role.name == '「Pastel Red」');
       const pastel_orange = message.guild.roles.cache.find(pastel_orange_role => pastel_orange_role.name == '「Pastel Orange」');
       const orange = message.guild.roles.cache.find(orange_role => orange_role.name == '「Orange」');
       const yellow = message.guild.roles.cache.find(yellow_role => yellow_role.name == '「Yellow」');
       const pastel_yellow = message.guild.roles.cache.find(pastel_yellow_role => pastel_yellow_role.name == '「Pastel Yellow」');
       const yellow_green = message.guild.roles.cache.find(yellow_green_role => yellow_green_role.name == '「Yellow Green」');
       const green = message.guild.roles.cache.find(green_role => green_role.name == '「Green」');
       const pastel_green = message.guild.roles.cache.find(pastel_green_role => pastel_green_role.name == '「Pastel Green」');
       const light_blue_green = message.guild.roles.cache.find(light_blue_green_role => light_blue_green_role.name == '「Light Blue Green」');
       const blue_green = message.guild.roles.cache.find(blue_green_role => blue_green_role.name == '「Blue Green」');
       const pastel_blue = message.guild.roles.cache.find(pastel_blue_role => pastel_blue_role.name == '「Pastel Blue」');
       const blue = message.guild.roles.cache.find(blue_role => blue_role.name == '「Blue」');
       const indigo = message.guild.roles.cache.find(indigo_role => indigo_role.name == '「Indigo」');
       const violet = message.guild.roles.cache.find(violet_role => violet_role.name == '「Violet」');
       const pastel_purple = message.guild.roles.cache.find(pastel_purple_role => pastel_purple_role.name == '「Pastel Purple」');
       
       //Delete Black Role
       if(!black){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           black.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Gray Role
       if(!gray){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           gray.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete White Role
       if(!white){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           white.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pink Role
       if(!pink){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pink.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Red Role
       if(!red){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           red.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pastel Red
       if(!pastel_red){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pastel_red.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pastel Orange
       if(!pastel_orange){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pastel_orange.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Orange
       if(!orange){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           orange.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Yellow
       if(!yellow){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           yellow.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pastel Yellow
       if(!pastel_yellow){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pastel_yellow.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Yellow Green
       if(!yellow_green){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           yellow_green.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Green
       if(!green){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           green.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pastel Green
       if(!pastel_green){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pastel_green.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Light Blue Green
       if(!light_blue_green){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           light_blue_green.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Blue Green
       if(!blue_green){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           blue_green.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pastel Blue
       if(!pastel_blue){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pastel_blue.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Blue
       if(!blue){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           blue.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Indigo
       if(!indigo){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           indigo.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Violet
       if(!violet){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           violet.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       //Delete Pastel Purple
       if(!pastel_purple){
           message.channel.send("Couldn't find the 「Black」 color role.");
       } else{
           pastel_purple.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }

       message.channel.send("Successfully deleted all __20__ color roles!")
   } else if(command == 'roll'){
       client.commands.get('roll').execute(message, args);
   } else if(command == '8ball'){
       client.commands.get('8ball').execute(message, args);
   } else if(command == 'coin'){
       client.commands.get('coin').execute(message, args);
   } else if(command == 'timer'){
       client.commands.get('timer').execute(message, args);
   } else if(command == 'meme'){
       client.commands.get('meme').execute(message, args);
   } else if(command == 'hug'){ //Action commands
       if(!message.guild) return message.channel.send('You must be in a guild.');
       //client.commands.get('hug').execute(message, args);
       if(!args[0]){
           message.channel.send("You didn't say who you wanted to hug! Please @mention them next time.")
           //console.log('Missing args');
       } else{
           //console.log('should work.');
           const image = Math.floor((Math.random() * 10) + 1);
           if(image == 1){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655951374024775/giphy.gif';
           } else if(image == 2){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655954704564295/giphy-1.gif';
           } else if(image == 3){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655971049767032/nrdYNtL.gif';
           } else if(image == 4){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655977542287390/anime-hug.gif';
           } else if(image == 5){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655981442990169/tumblr_ma7l17EWnk1rq65rlo1_500.gif';
           } else if(image == 6){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655982890156032/b62f047f8ed11b832cb6c0d8ec30687b.gif';
           } else if(image == 7){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733656000049053766/1451239600645.gif';
           } else if(image == 8){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655996781690890/tumblr_939249beed1e6e81801ac8391bb8a203_111e1ef2_500.gif';
           } else if(image == 9){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655994063650906/tenor.gif';
           } else if(image == 10){
               var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733655987331924008/c61.gif';
           }
           
           const personTagged = message.mentions.members.first();
           
           let embed = new Discord.MessageEmbed()
           .setTitle("Hugs")
           .setDescription(message.author.username + ' hugs ' + personTagged.displayName)
           .setImage(chosenImage)
           .setColor("RANDOM")
           message.channel.send(embed)
           
           if(personTagged.displayName == "Sweet Pea"){
               message.reply("❤️ Aww, thanks! I feel better now.");
               resetAttempts();
           }
       }
   } else if(command == 'slap'){
       client.commands.get('slap').execute(message, args);
   } else if(command == 'kiss'){
       client.commands.get('kiss').execute(message, args);
   } else if(command == 'kill'){
       client.commands.get('kill').execute(message, args);
   } else if(command == 'pat'){
       client.commands.get('pat').execute(message, args);
   } else if(command == 'cuddle'){
       client.commands.get('cuddle').execute(message, args);
   } else if(command == 'tickle'){
       client.commands.get('tickle').execute(message, args);
   } else if(command == 'poke'){
       client.commands.get('poke').execute(message, args);
   } else if(command == 'lick'){
       client.commands.get('poke').execute(message, args);
   } else if(command == 'punch'){
       client.commands.get('punch').execute(message, args);
   } else if(command == 'dog'){ //Animal commands
       client.commands.get('dog').execute(message, args);
   } else if(command == 'cat'){
       client.commands.get('cat').execute(message, args);
   } else if(command == 'duck'){
       client.commands.get('duck').execute(message, args);
   } else if(command == 'cow'){
       client.commands.get('cow').execute(message, args);
   } else if(command == 'sheep'){
       client.commands.get('sheep').execute(message, args);
   } else if(command == 'pig'){
       client.commands.get('pig').execute(message, args);
   } else if(command == 'turtle'){
       client.commands.get('turtle').execute(message, args);
   } else if(command == 'horse'){
       client.commands.get('horse').execute(message, args);
   } else if(command == 'lion'){
       client.commands.get('lion').execute(message, args);
   } else if(command == 'tiger'){
       client.commands.get('tiger').execute(message, args);
   } else if(command == 'wolf'){
       client.commands.get('wolf').execute(message, args);
   } else if(command == 'penguin'){
       client.commands.get('penguin').execute(message, args);
   } else if(command == 'bear'){
       client.commands.get('bear').execute(message, args);
   } else if(command == 'fish'){
       client.commands.get('fish').execute(message, args);
   } else if(command == 'av'){
       /*if(!message.mentions.users.size){
           return message.reply(`Here's your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
       }*/

       /*if(message.mentions.users.size){
           let member=message.mentions.users.first()
           if(member){
               const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
               message.channel.send(emb)
           } else{
               message.channel.send("Sorry none found with that name")
           }
       } else{
           const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
           message.channel.send(emb)
       }*/
       
       //The good code
       /*const parts = message.content.split(' ');
       let member = message.mentions.users.first();
       if(member){
           const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username);
           message.channel.send(emb);
       } else if(!parts[1]){
           const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username);
           message.channel.send(emb);
       } else{
           message.channel.send("Sorry none found with that name");
       }*/

       //This code works well
       let embed = new MessageEmbed()
       if(!message.mentions.users.first()){
           embed.setTitle('Your avater:')
           embed.setImage(message.author.displayAvatarURL())
           //embed.setColor(message.author.displayHexColor)
           //embed.setColor(message.member.hoistRole.hexColor)
           return message.channel.send(embed)
       } else{
           let user = message.mentions.users.first()
           embed.setTitle(`${user.tag}'s avater:`)
           embed.setImage(user.displayAvatarURL())
           //embed.setColor(user.displayHexColor)
           //embed.setColor(user.hoistRole.hexColor)
           return message.channel.send(embed)
       }

       /*let user = message.mentions.users.first();
       if(!user) user = message.author;
       let color = message.member.displayHexColor;
       if (color == '#000000') color = message.member.hoistRole.hexColor;
       const embed = new MessageEmbed()
       .setTitle("")
       .setImage(user.avatarURL)
       .setColor(color)
       message.channel.send({embed});*/
       
   } else if(command == 'invite'){
       const invite = new MessageEmbed()
       .setTitle('Invite me to a server!')
       //.setDescription("Want me to join a server? Well, now you can do just that! \n \n Instructions: \n - Click on the title in blue to be redirected to a page in your browser. \n - Afterwards, select the server you want to add me to. \n \n Walla, I'm in a new server! How awesome is that?")
       .setDescription("Want me to join a server? Well, now you can do just that! \n \n Instructions: \n - Click on the title in blue to be redirected to a page in your browser. \n - Afterwards, click on the invite button to invite me to a server! \n \n Then select the server you want to add me to. \n \n Hit continue, then authorize my permissions. \n \n Walla, I'm in a new server! How awesome is that?")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('New servers with new people? Add me!                                                                 Created by jc smoothie')
       .setURL('https://discord.com/oauth2/authorize?client_id=729142073126682644&scope=bot&permissions=8')
       //.setURL('https://discord.com/oauth2/authorize?client_id=729142073126682644&scope=bot&permissions=37088328')
       message.author.send(invite);
       message.channel.send("Invitation with instructions sent through dms!");
   } else if(command == 'support'){
       const invite = new MessageEmbed()
       .setTitle('Join the support server!')
       .setDescription("Need to ask a question? Well, join the support server and ask away! \n \n Instructions: \n - Click on the title in blue to be redirected to a page in your browser. \n - Afterwards, you sould have access to the support server in your discord application/tab. \n \n Walla, you're in the support server! How awesome is that?")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Need help or want to ask a question? Join the support server!                    Created by jc smoothie')
       .setURL('https://discord.gg/m3Q6f3KRDP')
       message.author.send(invite);
       message.channel.send("Invitation with instructions sent through dms!");
   } else if(command == 'deletemessage'){
       message.reply('This message will delete itself after 5 seconds').then(msg => {
           msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
       }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
   } else if(command == 'clear'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       client.commands.get('clear').execute(message, args);
   } /*else if(command == 'purge'){
       const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
       const amount = args.join(' '); // Amount of messages which should be deleted
       
       if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
       if (isNaN(amount)) return msg.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error
       
       if (amount > 100) return msg.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
       if (amount < 1) return msg.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1
       await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
        msg.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
        )});
   }*/ else if(command == 'token'){
       if(attempts == 1){
           increateAttempts();
           message.reply("Sorry, but I can't reveal my token to anyone in a text channel.");
       } else if(attempts == 2){
           increateAttempts();
           message.reply("Once again, I can't display my token in a text channel, otherwise others will see. Others can write code and commands, and control my actions with my token.");
       } else if(attempts == 3){
           increateAttempts();
           message.reply("Now this is just bullying! I'm telling you, I can't reveal my token!");
       } else if(attempts == 4){
           increateAttempts();   
           message.reply("Mo yada!!");
       } else if(attempts == 5){
           increateAttempts();
           message.reply("( >~<')");
       } else if(attempts == 6){
           increateAttempts();
           message.reply("(>ᗝ<)");
       } else if(attempts == 7){
           message.reply("(;-;)");
       }
   } else if(command == 'scratch'){
       const invite = new MessageEmbed()
       .setTitle('Check out the Scratch Projects of jc smoothie!')
       .setDescription("Interested in other coding projects by my developer, jc smoothie? \n Well, click the blue title at the top, and it will open a new tab in your browser with my developer's Scratch profile. \n \n To see a project, simply click on one from the 'Shared Projects' section. \n If you then want to see the code of the project, you can click on the blue 'See inside' button somewhere on the screen. \n Read the description and notes of the project for some information about it. \n \n My favorite project my developer made is the one called 'Imaginary World' since the music is sooo wholesome, along with the character Tsumugi Kotobuki from K ON who's playing the keyboard. \n My developer spent a long time to edit out the background of 12 images of her playing the keyboard, but the end result was worth it. \n \n Anyways, I hope you enjoy those projects as this was where the coding profession of my developer started!")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Check out other coding projects by my developer on Scratch!                    Created by jc smoothie')
       .setURL('https://scratch.mit.edu/users/jc_jeffrey/')
       message.author.send(invite);
       message.channel.send("Link with instructions sent through dms!");
   } /*else if(command == 'stc'){
       const invite = new MessageEmbed()
       .setTitle('Sort The Court!')
       .setDescription("You're a ruler of a kingdom and make decisions to improve it. Gain population and get into the Council of Crowns to beat the game. Have fun!")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Check out this game made by my creator!                                                            Created by jc smoothie')
       .setURL('https://repl.it/@jcjeffrey/Sort-The-Court-Strategy-Game-coded-by-jcjeffreysmoothie#main.py')
       message.author.send(invite);
       message.channel.send("Invitation with instructions sent through dms!");
   }*/ else if(command == 'wyr'){
       const wyrEmbed = new MessageEmbed()
       .setTitle('Would You Rather!')
       .setDescription('')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                                                                     Created by jc smoothie')
       message.channel.send(wyrEmbed);
   } else if(command == 'say'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       client.commands.get('say').execute(message, args);
       /*const auth = message.author
       message.delete();
       message.channel.startTyping();
       setTimeout(() => {  message.channel.send(`<@${auth.id}>, Stop it, get some help.`).then(msg => {
           msg.delete({ timeout: 4000});
       }); }, 2000);
       message.channel.stopTyping();*/
   } else if(command == 'hello'){
       message.channel.startTyping();
       setTimeout(() => {  message.channel.send("hii"); }, 2000);
       message.channel.stopTyping();
   } else if(command == 'cuterate'){
       if(!args[0]){
           //console.log('Missing args')
           var cuteness = Math.floor(Math.random() * 101);
           const cuterate = new MessageEmbed()
           .setTitle('QT!')
           .setDescription("You are " + cuteness + "% a cutie!")
           .setColor('#66ccff')
           .setThumbnail('https://media1.tenor.com/images/097f46e1db35653902b10b0a322c908f/tenor.gif?itemid=12003933')
           message.channel.send(cuterate);
       } else{
           if(!message.mentions.members.first()){
               message.channel.send("Please @mention someone!")
               return;
           }

           //console.log('should work.')
           const personTagged = message.mentions.members.first();
           var cuteness = Math.floor(Math.random() * 101);
           const cuterate = new MessageEmbed()
           .setTitle('QT!')
           .setDescription("**" + personTagged.displayName + "** is " + cuteness + "% a cutie!")
           .setColor('#66ccff')
           .setThumbnail('https://media1.tenor.com/images/097f46e1db35653902b10b0a322c908f/tenor.gif?itemid=12003933')
           message.channel.send(cuterate);

           /*
           if(personTagged.displayName == "Sweet Pea"){
               message.reply("❤️ Aww, thanks! I feel better now.");
               resetAttempts();
           }
           */
       }
   } else if(command == 'weebrate'){
       if(!args[0]){
           //console.log('Missing args')
           var weebness = Math.floor(Math.random() * 101);
           const weebrate = new MessageEmbed()
           .setTitle('Calling fellow weebs!')
           .setDescription("You are " + weebness + "% a weeb!")
           .setColor('#66ccff')
           .setThumbnail('https://pbs.twimg.com/profile_images/777681909979680768/-7qNVsGS.jpg')
           message.channel.send(weebrate);
       } else{
           if(!message.mentions.members.first()){
               message.channel.send("Please @mention someone!")
               return;
           }

           //console.log('should work.')
           const personTagged = message.mentions.members.first();
           var weebness = Math.floor(Math.random() * 101);
           const weebrate = new MessageEmbed()
           .setTitle('Calling fellow weebs!')
           .setDescription("You are " + weebness + "% a weeb!")
           .setColor('#66ccff')
           .setThumbnail('https://pbs.twimg.com/profile_images/777681909979680768/-7qNVsGS.jpg')
           message.channel.send(weebrate);
           
           /*
           if(personTagged.displayName == "Sweet Pea"){
               message.reply("❤️ Aww, thanks! I feel better now.");
               resetAttempts();
           }
           */
       }
   } else if(command == 'smartrate'){
       if(!args[0]){
           //console.log('Missing args')
           var smartness = Math.floor(Math.random() * 101);
           const smartrate = new MessageEmbed()
           .setTitle('Intelligence!')
           .setDescription("You are " + smartness + "% an intelligent!")
           .setColor('#66ccff')
           .setThumbnail('https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif')
           message.channel.send(smartrate);
       } else{
           if(!message.mentions.members.first()){
               message.channel.send("Please @mention someone!")
               return;
           }

           //console.log('should work.')
           const personTagged = message.mentions.members.first();
           var smartness = Math.floor(Math.random() * 101);
           const smartrate = new MessageEmbed()
           .setTitle('Intelligence!')
           .setDescription("You are " + smartness + "% an intelligent!")
           .setColor('#66ccff')
           .setThumbnail('https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif')
           message.channel.send(smartrate);
       }
   } else if(command == 'epicrate'){
       if(!args[0]){
           //console.log('Missing args')
           var epicness = Math.floor(Math.random() * 101);
           const epicrate = new MessageEmbed()
           .setTitle('Epic!')
           .setDescription("You are " + epicness + "% epic!")
           .setColor('#66ccff')
           .setThumbnail('https://i.pinimg.com/originals/ba/76/ef/ba76ef5073422254cdd76038a817875c.gif')
           message.channel.send(epicrate);
       } else{
           if(!message.mentions.members.first()){
               message.channel.send("Please @mention someone!")
               return;
           }

           //console.log('should work.')
           const personTagged = message.mentions.members.first();
           var epicness = Math.floor(Math.random() * 101);
           const epicrate = new MessageEmbed()
           .setTitle('Epic!')
           .setDescription("You are " + epicness + "% epic!")
           .setColor('#66ccff')
           .setThumbnail('https://i.pinimg.com/originals/ba/76/ef/ba76ef5073422254cdd76038a817875c.gif')
           message.channel.send(epicrate);
       }
   } else if(command == 'quiz'){
       const quiz = require('./quiz.json');
       const item = quiz[Math.floor(Math.random() * quiz.length)];
       const filter = response => {
           return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
       };

        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} got the correct answer!`);
            })
            .catch(collected => {
                message.channel.send('Looks like nobody got the answer this time.');
            });
        });
   } else if(command == 'mute'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       message.channel.send("This command is currently being looked at and is in the process of repair.")
       //client.commands.get('mute').execute(message. args);
   } else if(command == 'unmute'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       message.channel.send("This command is currently being looked at and is in the process of repair.")
       //client.commands.get('unmute').execute(message. args);
   } else if(command == 'welcome'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       if(message.member.displayName == 'jc smoothie'){
           if(message.member.guild.id == Asian_Invasion || message.member.guild.id == Eclipsys_Contact || message.member.guild.id == jc_smoothie_support_server || message.member.guild.id == jc_smoothie_server || message.member.guild.id == The_Toilet){
               const welcomeChannel = message.member.guild.channels.cache.find(channel => channel.name === "welcome");
               
               let embed = new MessageEmbed()
               .setTitle(`Welcome to ${message.member.guild.name}!`)
               .setImage("https://data.whicdn.com/images/307098937/original.gif")
               //.setDescription(`**Thank you for joining our server!** \n Hey ${member.user.tag}! Make sure to read the rules, check out the reaction roles, and we hope you enjoy your stay! Please contect any of the staff if you have any questions.`)
               .setDescription(`**Thank you for joining our server!** \n Hey **${message.member.displayName}**! Make sure to read the rules, check out the reaction roles, and we hope you enjoy your stay! Please contect any of the staff if you have any questions.`)
               .setColor('#66ccff')
               .setThumbnail(message.member.user.avatarURL())
               .setFooter(`Member #${message.member.guild.memberCount}`)
               .setTimestamp()
               welcomeChannel.send(embed);
               message.channel.send("Done! Check the welcome text channel!");
           }
       } else{
           message.channel.send("Unfortunately, you do not have the permissions to use this command.")
       }
   } else if(command == 'addrole'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Lack of permissions!");
       if(!args[0]){
           message.channel.send("Please type the hexcolor starting with a # followed by a 6 digit number, along with the desired name for the new role to create.");
           return;
       } else if(args[0].length < 7 || args[0].length > 7){
           message.channel.send("Please type the hexcolor with __exactly__ a 6 digit number. Remember to add a # at the front of the number.");
           return;
       } else if(!args[1]){
           message.channel.send("Please type the name of the role to add.");
           return;
       }

       const inputtedName = message.content.slice(10 + args[0].length);
       //guild.roles.create({ data: roleData, reason: 'New staff role!' });
       message.guild.roles.create({
           data: {
               name: inputtedName,
               color: args[1],
           }
       });

       message.channel.send("Created a new role named **" + inputtedName + "** with the hexcolor __" + args[0] + "__!");
   } else if(command == 'delrole'){
       if(!message.guild) return message.channel.send('You must be in a guild.');
       if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Lack of permissions!")
       if(!args[1]){
           message.channel.send("Please type the name of a role to delete.");
           return;
       }

       const selectedRole = message.content.slice(9);
       const role = message.guild.roles.cache.find(role => role.name === selectedRole);

       if(!role){
           message.channel.send(`Couldn't find a role named ` + selectedRole + '. Please try again, and make sure to type the name __exactly__ how it is shown.');
           return;
       } else{
           role.delete('The role needed to go')
           .then(deleted => message.channel.send(`Deleted role __${deleted.name}__.`))
           .catch(console.error);
       }
   } else if(command == 'play'){ //Hosting on Heroku doesn't allow for the music commands to work, so they were removed to prevent errors from occuring
       message.channel.send("[Note: Currently unavailable due to bot hosting.]");
   } else if(command == 'stop'){
       message.channel.send("[Note: Currently unavailable due to bot hosting.]");
   }
});

//Reaction stuff
client.on('message', async message => {
    if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command == 'languagereactions'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Welcome!')
        .setDescription("If you don't have a language role, react to get yours! \n If you already have a language role and want to remove it, react to remove it. \n \n 🇺🇸 🇬🇧 🇨🇦 🇦🇺 -> EN \n 🇫🇷 -> FR \n 🇪🇸 -> ESP \n 🇩🇪 -> DE \n 🇻🇳 -> VN \n 🇵🇹 🇧🇷 -> PT/BR \n 🇰🇷 -> KR \n 🇯🇵 -> JP \n 🇨🇳 -> CN")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed);
        messageEmbed.react('🇺🇸');
        messageEmbed.react('🇬🇧');
        messageEmbed.react('🇨🇦');
        messageEmbed.react('🇦🇺');
        messageEmbed.react('🇫🇷');
        messageEmbed.react('🇪🇸');
        messageEmbed.react('🇩🇪');
        messageEmbed.react('🇻🇳');
        messageEmbed.react('🇵🇹');
        messageEmbed.react('🇧🇷');
        messageEmbed.react('🇰🇷');
        messageEmbed.react('🇯🇵');
        messageEmbed.react('🇨🇳');
    } else if(command == 'regionreactions'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Want to see other people from your region?')
        .setDescription("If you don't have a region role, react to get yours! \n If you already have a region role and want to remove it, react again to remove it. \n \n 🌎 -> AMERICAS \n 🌍 -> EUROPE/AFRICA \n 🌏 -> ASIA/AUSTRALIA")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed);
        messageEmbed.react('🌎');
        messageEmbed.react('🌍');
        messageEmbed.react('🌏');
    } else if(command == 'grades'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Grade Level')
        .setDescription("If you don't have a grade level role, react to get yours! \n If you already have one and want to remove it, react again to remove it. \n Your previous grade level role will be swapped out when you get a different one, so no need to remove it yourself! \n \n 📗 -> Freshman \n 📘 -> Sophomore \n 📕 -> Junior \n 📙 -> Senior")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed);
        messageEmbed.react('📗');
        messageEmbed.react('📘');
        messageEmbed.react('📕');
        messageEmbed.react('📙');
    } else if(command == 'among'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Among Us!')
        .setDescription("There will be an Among Us game later today. React to confirm your slot and attendance!")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed);
        reactionsEmbed.react('❤️');
        //const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'AmongUs');
        //messageEmbed.react(reactionEmoji);
    } else if(command == 'camong'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Among Us Canceled!')
        .setDescription("The Among Us game scheduled later today has been canceled. \n This may be because not enough people have voted to participate, or has simply been decided to be canceled.")
        .setColor('#66ccff')
        message.channel.send(reactionsEmbed);
    } else if(command == 'verification'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Verification!')
        .setDescription("After reading the rules, verify yourself by clicking on the reaction below! You'll then gain access to the rest of the server!")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed);
        messageEmbed.react('✅');
    } else if(command == 'poll'){
        const msg = message.content.slice(5);
        if(msg == '') return;
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Poll!')
        .setDescription("**" + message.member.displayName + "** created a poll: \n __" + msg + "__ \n \n Type your response below!")
        .setColor('#66ccff')
        message.delete();
        message.channel.send(reactionsEmbed);
    } else if(command == 'ynpoll'){
        const msg = message.content.slice(5);
        if(msg == '') return;
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Yess No Poll!')
        .setDescription("**" + message.member.displayName + "** created a poll: \n __" + msg + "__ \n \n React with a check mark or an x to vote!")
        .setColor('#66ccff')
        message.delete();
        let messageEmbed = await message.channel.send(reactionsEmbed);
        messageEmbed.react('✅');
        messageEmbed.react('❌');
    } else if(command == 'anime'){
        const msg = message.content.slice(6);
        if(msg == '') return;
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Anime Recommendation!')
        .setDescription("Note: No shows with over 26 episodes, otherwise we won't watch it to completion and thus be rejected. Also, no animes rated R+ on myanimelist or very lewd scenes/themes. Use your sixth sense here: common sense. \n \n **" + message.member.displayName + "** has suggested __" + msg + "__ \n \n React with a check mark or an x to vote!")
        .setColor('#66ccff')
        message.delete();
        let messageEmbed = await message.channel.send(reactionsEmbed);
        messageEmbed.react('✅');
        messageEmbed.react('❌');
    } else if(command == 'toiletroles'){
        const msg = message.content.slice(12);
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Get your server roles!')
        .setDescription("Welcome to the server! \n React with the corresponding reaction to get a server role. The server roles are listed below: \n \n **Games** \n <:minecraft:781962289040850954> -> Minecraft \n <:LolIcon:781967459401203752> -> League \n <:roblox:781976618868408351> -> Roblox \n <:fleethefacility:781973423722201178> -> Flee the Facility \n <:entrypoint:781973273771900928> -> Entry Point \n <:arsenal:781973252448059402> -> Arsenal \n \n **Misc** \n <:sovietlel:781973189097160744> -> Comrade \n <:uwuweebs:781976106013949993> -> Weeb \n ")
        .setColor('#66ccff')
        message.delete();
        let messageEmbed = await message.channel.send(reactionsEmbed);
        const minecraftEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'minecraft');
        messageEmbed.react(minecraftEmoji);
        const leagueEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'LolIcon');
        messageEmbed.react(leagueEmoji);
        const robloxEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'roblox');
        messageEmbed.react(robloxEmoji);
        const fleeEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'fleethefacility');
        messageEmbed.react(fleeEmoji);
        const entryPointEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'entrypoint');
        messageEmbed.react(entryPointEmoji);
        const arsenalEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'arsenal');
        messageEmbed.react(arsenalEmoji);
        const sovietEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'sovietlel');
        messageEmbed.react(sovietEmoji);
        const weebEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'uwuweebs');
        messageEmbed.react(weebEmoji);
        const kpopEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'kpoploveheart');
        messageEmbed.react(kpopEmoji);
    }

    if (command == 'osureact') {
        message.channel.send('Ta da!~');
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'osu');
        message.react(reactionEmoji);
    }
});

//Role Variables
const Asian_Invasion = '637447111725809664';
const jc_smoothie_support_server = '755814665111470142';
const WHS_Anime_Club = '361609091602317312';
const The_Toilet = '781945168491446353';

function Asian_Invasion_roles(){
    reactionRolesChannel = '763441746314133505';
    EN = '763733022150361098';
    FR = '763733139222560789';
    ESP = '763733454286094337';
    DE = '763733491501367317';
    VN = '763733533700653066';
    PTBR = '763733564361408534';
    KR = '763733609793716294';
    JP = '763733642127736852';
    CN = '763733672439971840';
    AMERICAS = '763850145984282654';
    EUROPEAFRICA = '';
    ASIAAUSTRALIA = '';
}

function jc_smoothie_support_server_roles(){
    reactionRolesChannel = '772076538707312651';
    EN = '772080462209613884';
    FR = '772081493853995008';
    ESP = '772081524593000478';
    DE = '772081553106272266';
    VN = '772081606466076703';
    PTBR = '772081625433505823';
    KR = '772081666726297622';
    JP = '772081695687573514';
    CN = '772081734899990528';
    AMERICAS = '772081772417646622';
    EUROPEAFRICA = '772108008406253578';
    ASIAAUSTRALIA = '772106026433904690';
}

function WHS_Anime_Club_roles(){
    reactionRolesChannel = '778233243698462732';
    freshman = '777896782628782100';
    sophomore = '777896779592892436';
    junior = '777896776199176202';
    senior = '777896772684742656';
}

function The_Toilet_roles(){
    reactionRolesChannel = '781949679994535946';
    member = '781948743171833906';
    weeb = '781954294404087868';
    waman = '781953590130245642';
    boi = '781954015587598406';
    minecraft = '781954482292129863';
    roblox = '781992798261739590';
    arsenal = '781954660226433054';
    league = '781954823477395487';
    dnd = '781955082811998248';
    entry_point = '781955745876803585';
    flee = '781956039561838622';
    comrade = '781956110839054367';
    kpop = '781957997000654879';
}

function Not_Identified_Server(){
    reactionRolesChannel = '';
    EN = '';
    FR = '';
    ESP = '';
    DE = '';
    VN = '';
    PTBR = '';
    KR = '';
    JP = '';
    CN = '';
    AMERICAS = '';
    EUROPEAFRICA = '';
    ASIAAUSTRALIA = '';
    freshman = '';
    sophomore = '';
    junior = '';
    senior = '';
}

//Assigning the correct role ids according to the server
client.on('messageReactionAdd', async (messageReaction, user) => {
    if(messageReaction.message.guild.id == Asian_Invasion){
        Asian_Invasion_roles();
    } else if(messageReaction.message.guild.id == jc_smoothie_support_server){
        jc_smoothie_support_server_roles();
    } else if(messageReaction.message.guild.id == WHS_Anime_Club){
        WHS_Anime_Club_roles();
    } else if(messageReaction.message.guild.id == The_Toilet){
        The_Toilet_roles();
    } else{
        Not_Identified_Server();
    }
});

//Verification Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '✅') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add('776164933649039391').then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You are now verified!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '✅') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove('776164933649039391').then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You are no longer verified!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Freshman Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📗') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        /*if(messageReaction.message.member.roles.cache.find(r => r.name === "Sophomore")){
            messageReaction.message.member.roles.remove(sophomore);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Junior")){
            messageReaction.message.member.roles.remove(junior);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Senior")){
            messageReaction.message.member.roles.remove(senior);
        }*/
        userrole.roles.add(freshman).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Freshman** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📗') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(freshman).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Freshman** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Sophomore Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📘') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        /*if(messageReaction.message.member.roles.cache.find(r => r.name === "Freshman")){
            messageReaction.message.member.roles.remove(freshman);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Junior")){
            messageReaction.message.member.roles.remove(junior);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Senior")){
            messageReaction.message.member.roles.remove(senior);
        }*/
        userrole.roles.add(sophomore).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Sophomore** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📘') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(sophomore).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Sophomore** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Junior Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📕') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        /*if(messageReaction.message.member.roles.cache.find(r => r.name === "Freshman")){
            messageReaction.message.member.roles.remove(freshman);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Sophomore")){
            messageReaction.message.member.roles.remove(sophomore);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Senior")){
            messageReaction.message.member.roles.remove(senior);
        }*/
        userrole.roles.add(junior).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Junior** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📕') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(junior).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Junior** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Senior Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📙') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        /*if(messageReaction.message.member.roles.cache.find(r => r.name === "Freshman")){
            messageReaction.message.member.roles.remove(freshman);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Sophomore")){
            messageReaction.message.member.roles.remove(sophomore);
        } else if(messageReaction.message.member.roles.cache.find(r => r.name === "Junior")){
            messageReaction.message.member.roles.remove(junior);
        }*/
        userrole.roles.add(senior).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Senior** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '📙') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(senior).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Senior** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//American Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇺🇸') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(EN).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇺🇸') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(EN).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//British Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇬🇧') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(EN).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇬🇧') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(EN).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Canadian Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇨🇦') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(EN).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇨🇦') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(EN).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Australian Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇦🇺') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(EN).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇦🇺') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(EN).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **EN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//French Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇫🇷') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(FR).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **FR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇫🇷') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(FR).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **FR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Spain Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇪🇸') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(ESP).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **ESP** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇪🇸') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(ESP).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **ESP** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//German Flag Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇩🇪') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(DE).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **DE** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇩🇪') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(DE).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **DE** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Vietnamese Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇻🇳') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(VN).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **VN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇻🇳') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(VN).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **VN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Portuguese Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇵🇹') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(PTBR).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **PT/BR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇵🇹') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(PTBR).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **PT/BR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Brazilian Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇧🇷') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(PTBR).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **PT/BR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇧🇷') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(PTBR).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **PT/BR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Korean Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇰🇷') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(KR).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **KR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇰🇷') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(KR).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **KR** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Japanese Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇯🇵') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(JP).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **JP** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇯🇵') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(JP).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **JP** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Chinese Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇨🇳') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(CN).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **CN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🇨🇳') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(CN).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **CN** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Americas Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌎') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(AMERICAS).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Americas** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌎') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(AMERICAS).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Americas** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Europe/Africa Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌍') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(EUROPEAFRICA).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Europe/Africa** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌍') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(EUROPEAFRICA).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Europe/Africa** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Asia/Australia Reaction
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌏') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(ASIAAUSTRALIA).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Asia/Australia** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌏') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(ASIAAUSTRALIA).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Asia/Australia** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Verification
const Verified = '776164933649039391';

client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌏') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(Verified).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You are now verified!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
 });

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === '🌏') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(Verified).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You are no longer verified.`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//The Toilet Reaction Roles
//Minecraft
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'minecraft') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(minecraft).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Minecraft** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'minecraft') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(minecraft).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Minecraft** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Lol Icon
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'LolIcon') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(league).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **League** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'LolIcon') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(league).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **League** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Roblox
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'roblox') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(roblox).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Roblox** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'roblox') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(roblox).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Roblox** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Flee the Facility
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'fleethefacility') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(flee).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Flee** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'fleethefacility') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(flee).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Flee** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Entry Point
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'entrypoint') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(entry_point).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Entry Point** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'entrypoint') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(entry_point).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Entry Point** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Arsenal
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'arsenal') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(arsenal).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Arsenal** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'arsenal') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(arsenal).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Arsenal** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Comrade
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'sovietlel') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(comrade).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Comrade** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'sovietlel') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(comrade).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Comrade** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Weeb
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'uwuweebs') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(weeb).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Weeb** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'uwuweebs') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(weeb).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Weeb** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Kpop
client.on('messageReactionAdd', async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'kpoploveheart') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.add(kpop).then(() => {
            messageReaction.message.channel.send(`✅ <@${user.id}> You now have the **Kpop** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.bot || !messageReaction.message.guild) return;
    
    if (messageReaction.message.channel.id === reactionRolesChannel && messageReaction.emoji.name === 'kpoploveheart') {
        const channel = messageReaction.message.guild.channels.cache.get(reactionRolesChannel);
        const userrole = messageReaction.message.guild.members.cache.get(user.id);
        userrole.roles.remove(kpop).then(() => {
            messageReaction.message.channel.send(`❌ <@${user.id}> You no longer have the **Kpop** role!`).then(msg => {
                msg.delete({ timeout: 5000 /*time until delete in milliseconds*/});
            }).catch(error/*Your Error handling if the Message isn't returned, sent, etc.*/);
        });
    }
});

//Journey Beginning
client.on('message', async message => {
    if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command == 'story'){
        if (client.channels.cache.filter(c => c.name === 'story').keyArray().includes(channel.id)){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Sort The Court!')
            .setDescription("======================================== \n                                    SORT THE COURT                                    \n <VERSION 1.2.4> \n - NEW CHARACTERS! \n       Dragon, Black Smith, Skelly, Yarno, \n       Button Boy, Advisor Pia, \n       King Andromedus, Queen Chanterelle, \n       Queen Cerith, Advisor Pontus, \n       and Advisor Agaric \n - Added achievements! \n - More options with  Royal Advisor \n - True ending: Council of Crowns \n ======================================== \n  \n Are you a king or queen?")
            .setColor('#66ccff')
            let messageEmbed = await message.channel.send(reactionsEmbed)
            messageEmbed.react('🤴')
            messageEmbed.react('👸')
        }
    }
});

//Story
client.on('message', async message => {
    if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command == 'story'){
        const storyChannel = guild.channels.find(c => c.name === 'story');
        if(!message.channel == storyChannel){
            message.channel.send('Sorry, but you must be in the text channel called "story" to be able to use this feature. If there is no text channel named that, create it or ask someone to.');
            return;
        }
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Your Journey Begins!')
        .setDescription("You arrive in the town of Glendale, a small settlement distant from any bustling town or city like those around the capital. The people live peacefully in calm solitude, with few travelers or outsiders. You decided to explore these lands, and happened to stumble upon the humble town. \n \n Walking up to the gate, you hit up a conversation with one of the two guards standing alongside the wall.")
        .setColor('#ffffff')
        message.channel.send(reactionsEmbed);
        let messageEmbed = await message.channel.send(reactionsEmbed)
        messageEmbed.react('➡️')
    }
});

//Continue Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "766037768379695117"){
        if(reaction.emoji.name === '➡️'){
            if(start == 2){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Our city's still very small right now, but \n it certainly has the potential to grow.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 3){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Perhaps one day we will have a bustling \n metropolis and you'll be invited to join the \n Council of Crowns!")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 4){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("For now, all you need to concern yourself \n with is keeping the citizens happy and \n growing our population.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 5){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("At the beginning of the day, you can type \n in `awards` to see the achievements.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 6){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Do your best, " + gender2 + "!")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 7){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day 1')
                .setDescription("======================================== \n Population: " + population + "\n Happiness: " + happiness + "\n Gold: " + gold + "\n ========================================")
                .setColor('#228B22')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 8){
                //Character Selection
                character();
                if(char == 1){
                    sneakyGirl();
                    visits();
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Sneaky Girl')
                    .setDescription("Want me to steal from the rich and give \n to... you? Not just the rich, I'll steal from \n whoever,basically.")
                    .setColor('#FF1493')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('✅')
                    messageEmbed.react('❌')
                } else if(char == 2){
                    bootsTheCat();
                    visits();
                    bootsTheCatOption();
                    if(catOption == 1){
                        let reactionsEmbed = new MessageEmbed()
                        .setTitle('Boots The Cat')
                        .setDescription("Meow! (It's just... staring at me... Does it want \n something?)")
                        .setColor('#DAA520')
                        let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                        messageEmbed.react('✅')
                        messageEmbed.react('❌')
                    } else if(catOption == 2){
                        let reactionsEmbed = new MessageEmbed()
                        .setTitle('Boots The Cat')
                        .setDescription("Meeow. (Looks like he wants somebody \n to pat his belly...)")
                        .setColor('#DAA520')
                        let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                        messageEmbed.react('✅')
                        messageEmbed.react('❌')
                    }
                }
            } else if(start == 9){
                startAdd();
                if(population_difference < 0){
                    populationReport = population_difference;
                } else{
                    populationReport = "+" + population_difference;
                }
                if(happiness_difference < 0){
                    happinessReport = happiness_difference;
                    cityNegativeOpinion();
                } else{
                    happinessReport = "+" + happiness_difference;
                    cityPositiveOpinion();
                }
                if(gold_difference < 0){
                    goldReport = gold_difference;
                } else{
                    goldReport = "+" + gold_difference;
                }
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day ' + day + ' is complete!')
                .setDescription("++++++++++++++++++++++++++++++++++++++++ \n Report: \n " + populationReport + " Population \n " + happinessReport + " Happiness \n " + goldReport + " Gold \n \n " + cityOpinion + " \n ++++++++++++++++++++++++++++++++++++++++")
                .setColor('#228B22')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                forwardDay();
                resetReports();
            } else if(start == 10){
                startSubtract();
                startSubtract();
                if(happiness_difference < 0){
                    negativeDailyPopulation();
                } else{
                    positiveDailyPopulation();
                }
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day ' + day)
                .setDescription(dailyPopulationDisplay + " \n \n ======================================== \n Population: " + population + " \n Happiness: " + happiness + " \n Gold: " + gold + " \n ========================================")
                .setColor('#228B22')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            } else if(start == 11){
                start = 0;
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day ' + day)
                .setDescription("**************************************** \n Your kingdom lasted " + day + " days. \n Your kingdom ended with " + population + " people. \n Your kingdom ended with " + happiness + " happiness. \n Your kingdom ended with " + gold + " gold. \n **************************************** \n \n Type `+start` to play the game again.")
                .setColor('#228B22')
            }
        }
    }

    /*
    if(reaction.emoji.name === '➡️'){
        if(start == 2){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Our city's still very small right now, but \n it certainly has the potential to grow.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 3){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Perhaps one day we will have a bustling \n metropolis and you'll be invited to join the \n Council of Crowns!")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 4){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("For now, all you need to concern yourself \n with is keeping the citizens happy and \n growing our population.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 5){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("At the beginning of the day, you can type \n in `awards` to see the achievements.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 6){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Do your best, " + gender2 + "!")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 7){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day 1')
            .setDescription("======================================== \n Population: " + population + "\n Happiness: " + happiness + "\n Gold: " + gold + "\n ========================================")
            .setColor('#228B22')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 8){
            //Character Selection
            character();
            if(char == 1){
                sneakyGirl();
                visits();
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Sneaky Girl')
                .setDescription("Want me to steal from the rich and give \n to... you? Not just the rich, I'll steal from \n whoever,basically.")
                .setColor('#FF1493')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('✅')
                messageEmbed.react('❌')
            } else if(char == 2){
                bootsTheCat();
                visits();
                bootsTheCatOption();
                if(catOption == 1){
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription("Meow! (It's just... staring at me... Does it want \n something?)")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('✅')
                    messageEmbed.react('❌')
                } else if(catOption == 2){
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription("Meeow. (Looks like he wants somebody \n to pat his belly...)")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('✅')
                    messageEmbed.react('❌')
                }
            }
        } else if(start == 9){
            startAdd();
            if(population_difference < 0){
                populationReport = population_difference;
            } else{
                populationReport = "+" + population_difference;
            }
            if(happiness_difference < 0){
                happinessReport = happiness_difference;
                cityNegativeOpinion();
            } else{
                happinessReport = "+" + happiness_difference;
                cityPositiveOpinion();
            }
            if(gold_difference < 0){
                goldReport = gold_difference;
            } else{
                goldReport = "+" + gold_difference;
            }
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day ' + day + ' is complete!')
            .setDescription("++++++++++++++++++++++++++++++++++++++++ \n Report: \n " + populationReport + " Population \n " + happinessReport + " Happiness \n " + goldReport + " Gold \n \n " + cityOpinion + " \n ++++++++++++++++++++++++++++++++++++++++")
            .setColor('#228B22')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            forwardDay();
            resetReports();
        } else if(start == 10){
            startSubtract();
            startSubtract();
            if(happiness_difference < 0){
                negativeDailyPopulation();
            } else{
                positiveDailyPopulation();
            }
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day ' + day)
            .setDescription(dailyPopulationDisplay + " \n \n ======================================== \n Population: " + population + " \n Happiness: " + happiness + " \n Gold: " + gold + " \n ========================================")
            .setColor('#228B22')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
        } else if(start == 11){
            start = 0;
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day ' + day)
            .setDescription("**************************************** \n Your kingdom lasted " + day + " days. \n Your kingdom ended with " + population + " people. \n Your kingdom ended with " + happiness + " happiness. \n Your kingdom ended with " + gold + " gold. \n **************************************** \n \n Type `+start` to play the game again.")
            .setColor('#228B22')
        }
    }
    */
});

//Sort The Court

//Variables
var ruler = 0;
var start = 0;
var visitor = "";
var dailyVisits = 0;
var day = 1;
var generatedDailyPopulation = 0;

//var gender1 = "";
//var gender2 = "";
//var gender3 = "";

var population = 100;
var happiness = 100;
var gold = 200;
var population_difference = 0;
var happiness_difference = 0;
var gold_difference = 0;

function king(){
    ruler = ruler + 1;
    gender1 = "lord";
    gender2 = "sir";
    gender3 = "king";
}

function queen(){
    ruler = ruler + 2;
    gender1 = "lady";
    gender2 = "madam";
    gender3 = "queen";
}

function startAdd(){
    start = start + 1;
}

function startSubtract(){
    start = start - 1;
}

function character(){
    char = Math.floor((Math.random() * 2) + 1);
}

function leavesRoom(){
    if(visitor == 'Boots The Cat'){
        leaveMessage = " \n \n (" + visitor + " leaves the room.)";
    } else{
        leaveMessage = " \n \n (The " + visitor + " leaves the room.)";
    }
}

function visits(){
    dailyVisits = dailyVisits + 1;
    if(dailyVisits == 10){
        dailyVisits = 0;
        startAdd();
    }
}

function forwardDay(){
    day = day + 1
}

function resetReports(){
    populationReport = 0;
    happinessReport = 0;
    goldReport = 0;
}

function negativeDailyPopulation(){
    generatedDailyPopulation = Math.floor((Math.random() * 15));
    population = population - generatedDailyPopulation;
    dailyPopulationDisplay = "-" + generatedDailyPopulation + " Population";
}

function positiveDailyPopulation(){
    generatedDailyPopulation = Math.floor((Math.random() * 15));
    population = population + generatedDailyPopulation;
    dailyPopulationDisplay = "+" + generatedDailyPopulation + " Population";
}

function cityPositiveOpinion(){
    cityOpinion = "People are happy! Your city is growing.";
}

function cityNegativeOpinion(){
    cityOpinion = "People are sad! The city is shrinking.";
}

client.on('message', async message => {
    if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    /*if(command == 'stc'){
        if(message.guild.channels.cache.filter(c => c.name === 'sort the court')){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Sort The Court!')
            .setDescription("======================================== \n                                    SORT THE COURT                                    \n <VERSION 0.5> \n - TWO CHARACTERS! \n Sneaky Girl and Boots the Cat \n ======================================== \n  \n Are you a king or queen?")
            .setColor('#66ccff')
            let messageEmbed = await message.channel.send(reactionsEmbed)
            messageEmbed.react('🤴')
            messageEmbed.react('👸')
        }
    }*/
});

//King user response
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    
    //if(reaction.message.channel.id === "766037768379695117"){
    /*if(reaction.message.guild.channels.cache.filter(c => c.name === 'sort the court')){
        if(reaction.emoji.name === '🤴'){
            if(start == 0){
                king();
                startAdd();
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("My " + gender1 + ", I'll help you rule your kingdom. \n but you have to make the tough choices. \n Just say yes or no, understand?")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('✅')
                messageEmbed.react('❌')
            }
        }
    }*/
    

   /*if(reaction.emoji.name === '🤴'){
       if(start == 0){
           king();
           startAdd();
           let reactionsEmbed = new MessageEmbed()
           .setTitle('Royal Advisor')
           .setDescription("My " + gender1 + ", I'll help you rule your kingdom. \n but you have to make the tough choices. \n Just say yes or no, understand?")
           .setColor('#DC143C')
           let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
           messageEmbed.react('✅')
           messageEmbed.react('❌')
       }
   }*/
});

//Queen user response
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    
    //if(reaction.message.channel.id === "766037768379695117"){
    /*if(reaction.message.guilds.channels.cache.filter(c => c.name === 'sort the court')){
        if(reaction.emoji.name === '👸'){
            if(start == 0){
                queen();
                startAdd();
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("My " + gender1 + ", I'll help you rule your kingdom. \n but you have to make the tough choices. \n Just say yes or no, understand?")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('✅')
                messageEmbed.react('❌')
            }
        }
    }*/
    

   /*if(reaction.emoji.name === '👸'){
       if(start == 0){
           queen();
           startAdd();
           let reactionsEmbed = new MessageEmbed()
           .setTitle('Royal Advisor')
           .setDescription("My " + gender1 + ", I'll help you rule your kingdom. \n but you have to make the tough choices. \n Just say yes or no, understand?")
           .setColor('#DC143C')
           let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
           messageEmbed.react('✅')
           messageEmbed.react('❌')
       }
   }*/
});

//Yes Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    /*
    if(reaction.message.channel.id === "766037768379695117"){
        if(reaction.emoji.name === '✅'){
            if(start == 1){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Good! You're already got the hang of it.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            }
            
            if(visitor == "Sneaky Girl"){
                sneakyGirlAccept();
                leavesRoom();
                gold = gold + 20
                gold_difference = gold_difference + 20
                population = population - 5
                population_difference = population_difference - 5
                happiness = happiness - 10
                happiness_difference = happiness_difference - 10
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Sneaky Girl')
                .setDescription(acceptMessage + leaveMessage + " \n \n +20 Gold \n -5 Population \n -10 Happiness")
                .setColor('#FF1493')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                if(population <= 0){
                    start = 11;
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Everyone Left!')
                    .setDescription("Press the arrow reaction to see your \n results and you may replay the \n game from the start.")
                    .setColor('#FF1493')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('➡️')
                }
            } else if(visitor == "Boots The Cat"){
                if(catOption == 1){
                    bootsTheCat1Accept();
                    leavesRoom();
                    gold = gold + 50;
                    gold_difference = gold_difference + 50;
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription(acceptMessage + leaveMessage + " \n \n +50 Gold")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('➡️')
                } else if(catOption == 2){
                    bootsTheCat2Accept();
                    leavesRoom();
                    happiness = happiness + 3;
                    happiness_difference = happiness_difference + 3;
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription(acceptMessage + leaveMessage + " \n \n +3 Happiness")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('➡️')
                }
            }
        }
    }
    */

    /*
    if(reaction.emoji.name === '✅'){
        if(start == 1){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Good! You're already got the hang of it.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        }
        
        if(visitor == "Sneaky Girl"){
            sneakyGirlAccept();
            leavesRoom();
            gold = gold + 20
            gold_difference = gold_difference + 20
            population = population - 5
            population_difference = population_difference - 5
            happiness = happiness - 10
            happiness_difference = happiness_difference - 10
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Sneaky Girl')
            .setDescription(acceptMessage + leaveMessage + " \n \n +20 Gold \n -5 Population \n -10 Happiness")
            .setColor('#FF1493')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            if(population <= 0){
                start = 11;
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Everyone Left!')
                .setDescription("Press the arrow reaction to see your \n results and you may replay the \n game from the start.")
                .setColor('#FF1493')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            }
        } else if(visitor == "Boots The Cat"){
            if(catOption == 1){
                bootsTheCat1Accept();
                leavesRoom();
                gold = gold + 50;
                gold_difference = gold_difference + 50;
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Boots The Cat')
                .setDescription(acceptMessage + leaveMessage + " \n \n +50 Gold")
                .setColor('#DAA520')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            } else if(catOption == 2){
                bootsTheCat2Accept();
                leavesRoom();
                happiness = happiness + 3;
                happiness_difference = happiness_difference + 3;
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Boots The Cat')
                .setDescription(acceptMessage + leaveMessage + " \n \n +3 Happiness")
                .setColor('#DAA520')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            }
        }
    }
    */
});

//No Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    /*
    if(reaction.message.channel.id === "766037768379695117"){
        if(reaction.emoji.name === '❌'){
            if(start == 1){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Very funny. Just give people their answers, okay?")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            }

            if(visitor == "Sneaky Girl"){
                sneakyGirlDecline();
                leavesRoom();
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Sneaky Girl')
                .setDescription(declineMessage + leaveMessage)
                .setColor('#FF1493')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            } else if(visitor == "Boots The Cat"){
                if(catOption == 1){
                    bootsTheCat1Decline();
                    leavesRooms();
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription(declineMessage + leaveMessage)
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('➡️')
                } else if(catOption == 2){
                    bootsTheCat2Decline();
                    leavesRooms();
                    happiness = happiness - 3;
                    happiness_difference = happiness_difference - 3;
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription(declineMessage + leaveMessage + " \n \n -3 Happiness")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('➡️')
                }
            }
        }
    }
    */

    /*
    if(reaction.emoji.name === '❌'){
        if(start == 1){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Very funny. Just give people their answers, okay?")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        }

        if(visitor == "Sneaky Girl"){
            sneakyGirlDecline();
            leavesRoom();
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Sneaky Girl')
            .setDescription(declineMessage + leaveMessage)
            .setColor('#FF1493')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
        } else if(visitor == "Boots The Cat"){
            if(catOption == 1){
                bootsTheCat1Decline();
                leavesRooms();
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Boots The Cat')
                .setDescription(declineMessage + leaveMessage)
                .setColor('#DAA520')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            } else if(catOption == 2){
                bootsTheCat2Decline();
                leavesRooms();
                happiness = happiness - 3;
                happiness_difference = happiness_difference - 3;
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Boots The Cat')
                .setDescription(declineMessage + leaveMessage + " \n \n -3 Happiness")
                .setColor('#DAA520')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            }
        }
    }
    */
});

//Continue Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    /*
    if(reaction.message.channel.id === "766037768379695117"){
        if(reaction.emoji.name === '➡️'){
            if(start == 2){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Our city's still very small right now, but \n it certainly has the potential to grow.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 3){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Perhaps one day we will have a bustling \n metropolis and you'll be invited to join the \n Council of Crowns!")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 4){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("For now, all you need to concern yourself \n with is keeping the citizens happy and \n growing our population.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 5){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("At the beginning of the day, you can type \n in `awards` to see the achievements.")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 6){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Royal Advisor')
                .setDescription("Do your best, " + gender2 + "!")
                .setColor('#DC143C')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 7){
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day 1')
                .setDescription("======================================== \n Population: " + population + "\n Happiness: " + happiness + "\n Gold: " + gold + "\n ========================================")
                .setColor('#228B22')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                startAdd();
            } else if(start == 8){
                //Character Selection
                character();
                if(char == 1){
                    sneakyGirl();
                    visits();
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Sneaky Girl')
                    .setDescription("Want me to steal from the rich and give \n to... you? Not just the rich, I'll steal from \n whoever,basically.")
                    .setColor('#FF1493')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('✅')
                    messageEmbed.react('❌')
                } else if(char == 2){
                    bootsTheCat();
                    visits();
                    bootsTheCatOption();
                    if(catOption == 1){
                        let reactionsEmbed = new MessageEmbed()
                        .setTitle('Boots The Cat')
                        .setDescription("Meow! (It's just... staring at me... Does it want \n something?)")
                        .setColor('#DAA520')
                        let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                        messageEmbed.react('✅')
                        messageEmbed.react('❌')
                    } else if(catOption == 2){
                        let reactionsEmbed = new MessageEmbed()
                        .setTitle('Boots The Cat')
                        .setDescription("Meeow. (Looks like he wants somebody \n to pat his belly...)")
                        .setColor('#DAA520')
                        let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                        messageEmbed.react('✅')
                        messageEmbed.react('❌')
                    }
                }
            } else if(start == 9){
                startAdd();
                if(population_difference < 0){
                    populationReport = population_difference;
                } else{
                    populationReport = "+" + population_difference;
                }
                if(happiness_difference < 0){
                    happinessReport = happiness_difference;
                    cityNegativeOpinion();
                } else{
                    happinessReport = "+" + happiness_difference;
                    cityPositiveOpinion();
                }
                if(gold_difference < 0){
                    goldReport = gold_difference;
                } else{
                    goldReport = "+" + gold_difference;
                }
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day ' + day + ' is complete!')
                .setDescription("++++++++++++++++++++++++++++++++++++++++ \n Report: \n " + populationReport + " Population \n " + happinessReport + " Happiness \n " + goldReport + " Gold \n \n " + cityOpinion + " \n ++++++++++++++++++++++++++++++++++++++++")
                .setColor('#228B22')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
                forwardDay();
                resetReports();
            } else if(start == 10){
                startSubtract();
                startSubtract();
                if(happiness_difference < 0){
                    negativeDailyPopulation();
                } else{
                    positiveDailyPopulation();
                }
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day ' + day)
                .setDescription(dailyPopulationDisplay + " \n \n ======================================== \n Population: " + population + " \n Happiness: " + happiness + " \n Gold: " + gold + " \n ========================================")
                .setColor('#228B22')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('➡️')
            } else if(start == 11){
                start = 0;
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Day ' + day)
                .setDescription("**************************************** \n Your kingdom lasted " + day + " days. \n Your kingdom ended with " + population + " people. \n Your kingdom ended with " + happiness + " happiness. \n Your kingdom ended with " + gold + " gold. \n **************************************** \n \n Type `+start` to play the game again.")
                .setColor('#228B22')
            }
        }
    }
    */

    /*
    if(reaction.emoji.name === '➡️'){
        if(start == 2){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Our city's still very small right now, but \n it certainly has the potential to grow.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 3){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Perhaps one day we will have a bustling \n metropolis and you'll be invited to join the \n Council of Crowns!")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 4){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("For now, all you need to concern yourself \n with is keeping the citizens happy and \n growing our population.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 5){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("At the beginning of the day, you can type \n in `awards` to see the achievements.")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 6){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Royal Advisor')
            .setDescription("Do your best, " + gender2 + "!")
            .setColor('#DC143C')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 7){
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day 1')
            .setDescription("======================================== \n Population: " + population + "\n Happiness: " + happiness + "\n Gold: " + gold + "\n ========================================")
            .setColor('#228B22')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            startAdd();
        } else if(start == 8){
            //Character Selection
            character();
            if(char == 1){
                sneakyGirl();
                visits();
                let reactionsEmbed = new MessageEmbed()
                .setTitle('Sneaky Girl')
                .setDescription("Want me to steal from the rich and give \n to... you? Not just the rich, I'll steal from \n whoever,basically.")
                .setColor('#FF1493')
                let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                messageEmbed.react('✅')
                messageEmbed.react('❌')
            } else if(char == 2){
                bootsTheCat();
                visits();
                bootsTheCatOption();
                if(catOption == 1){
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription("Meow! (It's just... staring at me... Does it want \n something?)")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('✅')
                    messageEmbed.react('❌')
                } else if(catOption == 2){
                    let reactionsEmbed = new MessageEmbed()
                    .setTitle('Boots The Cat')
                    .setDescription("Meeow. (Looks like he wants somebody \n to pat his belly...)")
                    .setColor('#DAA520')
                    let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
                    messageEmbed.react('✅')
                    messageEmbed.react('❌')
                }
            }
        } else if(start == 9){
            startAdd();
            if(population_difference < 0){
                populationReport = population_difference;
            } else{
                populationReport = "+" + population_difference;
            }
            if(happiness_difference < 0){
                happinessReport = happiness_difference;
                cityNegativeOpinion();
            } else{
                happinessReport = "+" + happiness_difference;
                cityPositiveOpinion();
            }
            if(gold_difference < 0){
                goldReport = gold_difference;
            } else{
                goldReport = "+" + gold_difference;
            }
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day ' + day + ' is complete!')
            .setDescription("++++++++++++++++++++++++++++++++++++++++ \n Report: \n " + populationReport + " Population \n " + happinessReport + " Happiness \n " + goldReport + " Gold \n \n " + cityOpinion + " \n ++++++++++++++++++++++++++++++++++++++++")
            .setColor('#228B22')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
            forwardDay();
            resetReports();
        } else if(start == 10){
            startSubtract();
            startSubtract();
            if(happiness_difference < 0){
                negativeDailyPopulation();
            } else{
                positiveDailyPopulation();
            }
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day ' + day)
            .setDescription(dailyPopulationDisplay + " \n \n ======================================== \n Population: " + population + " \n Happiness: " + happiness + " \n Gold: " + gold + " \n ========================================")
            .setColor('#228B22')
            let messageEmbed = await reaction.message.channel.send(reactionsEmbed)
            messageEmbed.react('➡️')
        } else if(start == 11){
            start = 0;
            let reactionsEmbed = new MessageEmbed()
            .setTitle('Day ' + day)
            .setDescription("**************************************** \n Your kingdom lasted " + day + " days. \n Your kingdom ended with " + population + " people. \n Your kingdom ended with " + happiness + " happiness. \n Your kingdom ended with " + gold + " gold. \n **************************************** \n \n Type `+start` to play the game again.")
            .setColor('#228B22')
        }
    }
    */
});

//Characters
//Sneaky Girl
function sneakyGirl(){
    visitor = "Sneaky Girl";
}

function sneakyGirlAccept(){
    acceptMessage = "I knew you couldn't resist! Here's some gold.";
}

function sneakyGirlDecline(){
    declineMessage = "Taking the high road, huh? I'll see you \n around.";
}

//Boots The Cat
function bootsTheCat(){
    visitor = "Boots The Cat";
}

function bootsTheCatOption(){
   catOption = Math.floor((Math.random() * 2) + 1);
}

//Boots The Cat Option 1
function bootsTheCat1Accept(){
    acceptMessage = "Meow! (What just happened? I feel... lucky!)";
}

function bootsTheCat1Decline(){
    declineMessage = "(Boots walks around the room.)";
}

//Boots The Cat Option 2
function bootsTheCat2Accept(){
    acceptMessage = "Mmmrrrrow.";
}

function bootsTheCat2Decline(){
    declineMessage = "Maow...";
}
