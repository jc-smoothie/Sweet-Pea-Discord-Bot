const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//const client = new Client();

const {Client, MessageEmbed} = require('discord.js');

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

client.login('NzI5MTQyMDczMTI2NjgyNjQ0.XwEoeQ.v-WpbuYp4QbYs_WyVdxsK9TJIOY');
//client.login('NzQyMTE3MDUxNzYxNjg4NjM3.XzBcXQ.8bnHz6YKfLAYO_Wlk1s-WxV-Gjw');

//Variables
const EN = '763733022150361098';
const FR = '763733139222560789';
const ESP = '763733454286094337';
const DE = '763733491501367317';
const VN = '763733533700653066';
const PTBR = '763733564361408534';
const HG = '763733609793716294';
const NHG = '763733642127736852';
const ZW = '763733672439971840';
const AM = '763850145984282654';

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
   client.user.setActivity('anime! | +displaycommands', {type: "WATCHING"}).catch(console.error);
});

client.on('message', message => {
    const reply = message.content;
    const replyFormatted = reply.toLowerCase();
    if(replyFormatted == 'cool'){
        setTimeout(function(){
            message.channel.send("nice");
        }, 500);
    } else if(replyFormatted == 'introduce yourself'){
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
    }
});

client.on('message', message => {
   if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if(command == 'displaycommands'){
       //console.log(message.guild.roles);
       const displayCommandsEmbed = new MessageEmbed()
       .setTitle('Server Commands')
       .setDescription('+commands - Receive a list of commands via dm \n \n +rank [role] - Assign a role to yourself \n \n +roll [number] - Generate a random number \n \n +timer [seconds] - set a timer for a number of seconds \n \n +meme - Display a meme in a text channel! \n \n +ping - Play ping pong with me! \n \n +hug [person] - Hug someone in the server! \n \n +slap [person] - Slap someone in the server! \n \n +dog - Receive an image of a dog! \n \n +start - (Only available in the sort-the-court text channel) \n Play Sort The Court, a game where you rule a kindgom!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                             Created by jc smoothie')
       //+displaycommands - Receive a list of commands \n in a text channel \n \n 
       //message.author.send(embed);
       message.channel.send(displayCommandsEmbed);
   } else if(command == 'commands'){
       //console.log(message.guild.roles);
       const commandsEmbed = new MessageEmbed()
       .setTitle('Server Commands')
       .setDescription('+displaycommands - Receive a list of commands \n in a text channel \n \n +commands - Receive a list of commands via dm \n \n +rank [role] - Assign a role to yourself \n \n +roll [number] - Generate a random number \n \n +ping - Play ping pong with me! \n \n +hug [person] - Hug someone in the server! \n \n +dog - Receive an image of a dog! \n \n +sortthecourt - (Unavailable) Play Sort The Court, \n a game where you rule a kindgom!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                             Created by jc smoothie')
       message.author.send(commandsEmbed);
   } else if(command == 'ping'){
       client.commands.get('ping').execute(message, args);
   } else if(command == 'rules'){
       const commandsEmbed = new MessageEmbed()
       .setTitle('Rules!')
       .setDescription('> 1) Aside from Eclipsys Contact’s Community Guidelines, please adhere to Discord’s: \n Guidelines: https://discordapp.com/guidelines \n Terms of Service: https://discordapp.com/tos \n \n > 2) Discord names and avatars must be appropriate. \n No NSFW or suggestive content. \n \n > 3) Be respectful to anyone and everyone on the server. \n No one deserves such treatment, this includes staff as well. \n \n > 4) Any content that is NSFW is not allowed under any circumstances. \n If you must question on whether posting such content is allowed, don’t post it. \n (Take flirting and NSFW talks to DMS) \n \n > 5) Spamming in any form is not allowed. \n This includes text channels, voice channels and direct messages alike. \n \n > 6) Personal attacks are not tolerated \n This includes targeting someone just to provoke them. \n \n > 7) Do not attempt to bypass any blocked words \n You can’t use racist words, any type of slur and anything that is clearly not appropriate for the server. \n \n > 8) Don’t ping without legitimate reasoning behind them \n This includes pinging staff or helpers, if they are troll pings etc, its mutable. \n \n > 9) Alternate accounts are not allowed under any circumstances \n This is due to how they can be abused to avoid bans and mutes. \n \n > 10) No Discord server invite links or codes \n These links are not allowed and is an instant ban whether it is Dm or Server. \n \n > 11) Do not advertise without permission \n Do not advertise social media/content platforms. \n \n > 12) Do not role-play within the server \n Roleplaying is forbidden in the server. \n \n > 13) Raiding is not allowed \n Instant ban for raiding whether voice chat or text chat. \n \n > 14) Content relating to suicide or death \n Emoji combination, slang, speech and all texts. \n \n > 15) Anything to target specific groups/individuals is prohibited \n This includes antisemitism, Islamophobia, homophobia, racism etc. \n \n ⚠️ These rules are subject to change at any time.')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Thank you for reading! Now go and have fun!')
       message.channel.send(commandsEmbed);
       
       //message.channel.send('> 1) Aside from Eclipsys Contact’s Community Guidelines, please adhere to Discord’s: \n Guidelines: https://discordapp.com/guidelines \n Terms of Service: https://discordapp.com/tos \n > 2) Discord names and avatars must be appropriate. \n No NSFW or suggestive content. \n > 3) Be respectful to anyone and everyone on the server. \n No one deserves such treatment, this includes staff as well. \n > 4) Any content that is NSFW is not allowed under any circumstances. \n If you must question on whether posting such content is allowed, don’t post it. \n (Take flirting and NSFW talks to DMS) \n > 5) Spamming in any form is not allowed. \n This includes text channels, voice channels and direct messages alike. \n > 6) Personal attacks are not tolerated \n This includes targeting someone just to provoke them. \n > 7) Do not attempt to bypass any blocked words \n You can’t use racist words, any type of slur and anything that is clearly not appropriate for the server. \n > 8) Don’t ping without legitimate reasoning behind them \n This includes pinging staff or helpers, if they are troll pings etc, its mutable. \n > 9) Alternate accounts are not allowed under any circumstances \n This is due to how they can be abused to avoid bans and mutes. \n > 10) No Discord server invite links or codes \n These links are not allowed and is an instant ban whether it is Dm or Server. \n > 11) Do not advertise without permission \n Do not advertise social media/content platforms. \n > 12) Do not role-play within the server \n Roleplaying is forbidden in the server. \n > 13) Raiding is not allowed \n Instant ban for raiding whether voice chat or text chat. \n > 14) Content relating to suicide or death \n Emoji combination, slang, speech and all texts. \n > 15) Anything to target specific groups/individuals is prohibited \n This includes antisemitism, Islamophobia, homophobia, racism etc. \n ⚠️ These rules are subject to change at any time.');
   } else if(command == 'amongusrules'){
       const commandsEmbed = new MessageEmbed()
       .setTitle('Among Us Rules!')
       .setDescription("> 1) Mute yourself when in game \n You may ONLY unmute in the in-game meetings. \n \n > 2) When you have been killed in game and are dead, STAY in the Alive voice channel \n You may move into the Dead voice channel ONCE a meeting is held in-game, and everyone else knows that you're dead. \n This is so others will only know when someone's dead by finding a dead body, which is how the game's intended to work. \n \n Note: Those who have died and are in the Dead voice channel may speak with each other.")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Thank you for reading! Now go and have fun!')
       message.channel.send(commandsEmbed);
   } else if(command == 'lore'){
       client.commands.get('lore').execute(message, args);
   } else if(command == 'rank'){
       client.commands.get('rank').execute(message, args);
   } else if(command == 'roll'){
       const parts = message.content.split(' ');
       var dice_result = parts[1];
       var dice_number = parseInt(dice_result, 10);
       var dice = Math.floor((Math.random() * dice_number));
       message.reply("You rolled a " + dice + "!");
       //console.log(message.guild.roles);
   } else if(command == 'timer'){
       const parts = message.content.split(' ');
       var timer_result = parts[1];
       var timer = parseInt(timer_result, 10);
       message.reply("Set timer for " + timer + " second(s)!");
       setTimeout(function(){
           message.reply("Your " + timer + " second(s) timer has ended!");
       }, timer*1000);
   } else if(command == 'meme'){
       client.commands.get('meme').execute(message, args);
   } else if(command == 'hug'){
       //client.commands.get('hug').execute(message, args);
       if(!args[0]){
           message.channel.send('Missing Arguments!')
           console.log('Missing args')
       } else{
           console.log('should work.')
           const image = Math.floor((Math.random() * 9) + 1);
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
   } else if(command == 'dog'){
       client.commands.get('dog').execute(message, args);
   } else if(command === 'avatar'){
       if(!message.mentions.users.size){
           return message.reply(`Here's your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
       }
   } else if(command == 'invite'){
       const invite = new MessageEmbed()
       .setTitle('Invite me to a server!')
       .setDescription("Want me to join a server? Well, now you can do just that! \n \n Instructions: \n - Click on the title in blue to be redirected to a page in your browser. \n - Afterwards, select the server you want to add me to. \n \n Walla, I'm in a new server! How awesome is that?")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('New servers with new people? Add me!                                                                 Created by jc smoothie')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=729142073126682644&permissions=0&scope=bot')
       message.author.send(invite);
       message.channel.send("Invitation with instructions sent through dms!");
   } else if(command == 'deletemessage'){
       message.reply('This message will delete itself after 5 seconds').then(msg => {
           msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
       })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
   } else if(command == 'token'){
       if(attempts == 1){
           increateAttempts();
           message.reply("Sorry, but I can't reveal my token to anyone in a text channel.")
       } else if(attempts == 2){
           increateAttempts();
           message.reply("Once again, I can't display my token in a text channel, otherwise others will see. Others can write code and commands, and control my actions with my token.")
       } else if(attempts == 3){
           increateAttempts();
           message.reply("Now this is just bullying! I'm telling you, I can't reveal my token! ( >~<')")
       } else if(attempts == 4){
           increateAttempts();   
           message.reply("Mo yada!!")
       } else if(attempts == 5){
           increateAttempts();
       } else if(attempts == 6){
           increateAttempts();
       } else if (attempts == 7){
           message.reply("(;-;)")
       }
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
        .setDescription("(Work in progress) If you don't have a language role, react to get yours! \n If you already have a language role and want to remove it, react to remove it. \n \n 🇺🇸 🇬🇧 🇨🇦 🇦🇺 -> EN \n 🇫🇷 -> FR \n 🇪🇸 -> ESP \n 🇩🇪 -> DE \n 🇻🇳 -> VN \n 🇵🇹 🇧🇷 -> PT/BR \n 🇰🇷 -> HG \n 🇯🇵 -> NHG \n 🇨🇳 -> ZW")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed)
        messageEmbed.react('🇺🇸')
        messageEmbed.react('🇬🇧')
        messageEmbed.react('🇨🇦')
        messageEmbed.react('🇦🇺')
        messageEmbed.react('🇫🇷')
        messageEmbed.react('🇪🇸')
        messageEmbed.react('🇩🇪')
        messageEmbed.react('🇻🇳')
        messageEmbed.react('🇵🇹')
        messageEmbed.react('🇧🇷')
        messageEmbed.react('🇰🇷')
        messageEmbed.react('🇯🇵')
        messageEmbed.react('🇨🇳')
    } else if(command == 'regionreactions'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Want to see other people from your region?')
        //.setDescription("If you don't have a language role, react to get yours! \n If you already have a language role and want to remove it, react to remove it.")
        .setDescription("(Work in progress) If you don't have a region role, react to get yours! \n If you already have a region role and want to remove it, react to remove it. \n \n 🌎 -> AM")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed)
        messageEmbed.react('🌎')
    } else if(command == 'amongus'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Among Us!')
        .setDescription("There will be an Among Us game later today. React to confirm your slot and attendance!")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed)
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'AmongUs');
        messageEmbed.react(reactionEmoji);
    } else if(command == 'cancelamongus'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Among Us Canceled!')
        .setDescription("The Among Us game scheduled later today has been canceled. \n This may be because not enough people have voted to participate, or has simply been decided to be canceled.")
        .setColor('#66ccff')
        message.channel.send(reactionsEmbed)
    }

    if (command == 'osureact') {
        message.channel.send('Ta da!~');
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'osu');
        message.react(reactionEmoji);
    }
});

//Test Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '❤️'){
            reaction.message.guild.members.cache.get(user.id).roles.add(EN)
            //var user = reaction.message.guild.members.cache.get(user.id);
            //message.channel.send("✅ " + "<@" + user + ">" + ", You now have the Test role!").then(msg => {
                //msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            //});
            reaction.message.reply("✅ You now have the Test role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '❤️'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(EN)
            //var user = reaction.message.guild.members.cache.get(user.id);
            //message.channel.send("❌ " + "<@" + user + ">" + ", You no longer have the Test role.").then(msg => {
                //msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            //});
            reaction.message.reply("❌ You no longer have the Test role.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//American Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇺🇸'){
            reaction.message.guild.members.cache.get(user.id).roles.add(EN)
            //var user = reaction.message.guild.members.cache.get(user.id);
            //message.channel.send("✅ " + "<@" + user + ">" + ", You now have the EN role!").then(msg => {
                //msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            //});
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇺🇸'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(EN)
            //var user = reaction.message.guild.members.cache.get(user.id);
            //message.channel.send("❌ " + "<@" + user + ">" + ", You no longer have the EN role.").then(msg => {
                //msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            //});
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//British Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇬🇧'){
            reaction.message.guild.members.cache.get(user.id).roles.add(EN)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇬🇧'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(EN)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Canadian Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇨🇦'){
            reaction.message.guild.members.cache.get(user.id).roles.add(EN)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇨🇦'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(EN)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Australian Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇦🇺'){
            reaction.message.guild.members.cache.get(user.id).roles.add(EN)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇦🇺'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(EN)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//French Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇫🇷'){
            reaction.message.guild.members.cache.get(user.id).roles.add(FR)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇫🇷'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(FR)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Spain Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇪🇸'){
            reaction.message.guild.members.cache.get(user.id).roles.add(ESP)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇪🇸'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(ESP)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//German Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇩🇪'){
            reaction.message.guild.members.cache.get(user.id).roles.add(DE)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇩🇪'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(DE)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Vietnamese Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇻🇳'){
            reaction.message.guild.members.cache.get(user.id).roles.add(VN)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇻🇳'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(VN)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Portuguese Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇵🇹'){
            reaction.message.guild.members.cache.get(user.id).roles.add(PTBR)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇵🇹'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(PTBR)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Brazilian Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇧🇷'){
            reaction.message.guild.members.cache.get(user.id).roles.add(PTBR)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇧🇷'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(PTBR)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Korean Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇰🇷'){
            reaction.message.guild.members.cache.get(user.id).roles.add(HG)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇰🇷'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(HG)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Japanese Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇯🇵'){
            reaction.message.guild.members.cache.get(user.id).roles.add(NHG)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇯🇵'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(NHG)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Chinese Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇨🇳'){
            reaction.message.guild.members.cache.get(user.id).roles.add(ZW)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇨🇳'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(ZW)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

//Americas Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🌎'){
            reaction.message.guild.members.cache.get(user.id).roles.add(AM)
            reaction.message.reply("✅ You now have the role!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🌎'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(AM)
            reaction.message.reply("❌ Your role has been removed.").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
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
    leaveMessage = " \n \n (The " + visitor + " leaves the room.)";
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
    
    if(command == 'start'){
        if(message.channel.id === "766037768379695117"){
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

//King user response
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "766037768379695117"){
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
    }
});

//Queen user response
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "766037768379695117"){
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
    }
});

//Yes Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

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
});

//No Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

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