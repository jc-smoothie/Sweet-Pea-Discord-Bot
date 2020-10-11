const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//const client = new Client();

const {Client, MessageEmbed} = require('discord.js');

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

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

//function makeCounter(){
    //let count = 0;
    
    //return function(){
        //return count++;
    //}
//}

//let counter = makeCounter();

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
        //message.channel.send("I can help members in the server self-assign roles, and role a dice.");
    } else if(replyFormatted == "okay, that's all"){
        setTimeout(function(){
            message.channel.send("Sweet, bye!~");
        }, 500);
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
       .setDescription('+displaycommands - Receive a list of commands \n in a text channel \n \n +commands - Receive a list of commands via dm \n \n +rank [role] - Assign a role to yourself \n \n +roll [number] - Generate a random number \n \n +ping - Play ping pong with me! \n \n +hug [person] - Hug someone in the server! \n \n +dog - Receive an image of a dog! \n \n +sortthecourt - (Unavailable) Play Sort The Court, \n a game where you rule a kindgom!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                             Created by jc smoothie')
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
   //} else if(command == 'weather'){
       //client.commands.get('weather2').execute(message, args);
       //client.commands.get('weather').execute(message, args);
       /*} else if(command == 'weather'){
       let embed = new Discord.MessageEmbed()
       .setTitle("Weather Forecast")
       .setDescription("Sunny \n Chance of Rain: 0% \n High: 66°F Low: 57°F \n Current: 60°F")
       .setThumbnail('https://www.accuweather.com/images/weathericons/01.svg')
       .setColor("RANDOM")
       message.channel.send(embed)*/
   } else if(command == 'roll'){
       const parts = message.content.split(' ');
       var dice_result = parts[1];
       var dice_number = parseInt(dice_result, 10);
       var dice = Math.floor((Math.random() * dice_number));
       message.reply("You rolled a " + dice + "!");
       //console.log(message.guild.roles);
   } else if(command == 'timer'){
       const parts = message.content.split(' ');
       var dice_result = parts[1];
       var dice_number = parseInt(dice_result, 10);
       var dice = Math.floor((Math.random() * dice_number));
       message.reply("You rolled a " + dice + "!");
       function sleep(milliseconds){
           const date = Date.now();
           let currentDate = null;
           do{
               currentDate = Date.now();
           } while (currentDate - date < milliseconds);
       }
       
       sleep(seconds*1000);
   } else if(command == 'meme'){
       const commandsEmbed = new MessageEmbed()
       .setTitle("Meme")
       .setColor("RANDOM")
       .setImage('https://lh5.googleusercontent.com/gOBvhu_rcXzVi9tvvoqltTJ9-I_VP5-PsvNi-MkNG_iBP2zxLbyWSQDiB0HZq3Aa2nWab6k70z8fv4RESep1K-WjGELeAIoJd76A9aNh');
       //message.channel.sendEmbed(myInfo);
       message.channel.send(commandsEmbed);
   }
   else if(command == 'hug'){
       //client.commands.get('hug').execute(message, args);
       if(!args[0]){
           message.channel.send('Missing Arguments!')
           console.log('Missing args')
       } else{
           console.log('should work.')
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
           }
       }
   } else if(command == 'slap'){
       client.commands.get('slap').execute(message, args);
   } else if(command == 'dog'){
       client.commands.get('dog').execute(message, args);
   } else if(command == 'invite'){
       const invite = new MessageEmbed()
       .setTitle('Invite me to a server!')
       .setDescription("Want me to join a server? Here's a link to do just that! \n https://discord.com/api/oauth2/authorize?client_id=729142073126682644&permissions=0&scope=bot \n Afterwards, select the server you want to add me to. \n Walla, I'm in a new server! How awesome is that?")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('You too can add me to a server!                                                                                Created by jc smoothie')
       message.author.send(invite);
       message.channel.send("Invitation sentthrough dms!");
   } else if(command == 'sortthecourt'){
       client.commands.get('sortthecourt').execute(message, args);
       
       //have code to check for user input here, and have
       //seperate character files/text to print in separate
       //files, which would use a character handler to execute

       //client.commands.get('sortthecourt').execute(message, args);
   } else if(command == 'deletemessage'){
       message.reply('This message will delete itself after 5 seconds').then(msg => {
           msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
       })//.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
   } else if(command == 'token'){
       var attempts = 1
       if(attempts == 1){
           var attempts = 2
           message.reply("Sorry, but I can't reveal my token to anyone in a text channel.")
       } else if(attempts == 2){
           var attempts = 3
           message.reply("Once again, I can't display my token in a text channel, otherwise others will see. \n Others can write code and commands, and control my actions with my token.")
       } else if(attempts == 3){
           var attempts = 4
           message.reply("Now this is just bullying! I'm telling you, I can't reveal my token! ( >~<')")
       } else if(attempts == 4){
           var attempts = 5   
           message.reply("Mo yada!!")
       } else if(attempts == 5){
           var attempts = 6
       } else if(attempts == 6){
           var attempts = 7
       } else if (attempts == 7){   
           message.reply("(;-;)")
       }

       const reply = message.content
       const replyFormatted = reply.toLowerCase();

       if(!replyFormatted == "I'm sorry"){
           return;
       } else if(replyFormatted == "I'm sorry"){
           message.channel.send("*sniff* Really?");
       } else if(replyFormatted == "yes"){
           message.channel.send("Hmm, give me a hug, then I'll forgive you.");
       }
   }
});

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
        messageEmbed.react('❤️')
    }

    if (command == 'osureact') {
        message.channel.send('Ta da!~')
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'osu');
        message.react(reactionEmoji);
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

client.login('NzI5MTQyMDczMTI2NjgyNjQ0.XwEoeQ.MpvOmuLgZc97QrVQVBf7hdFEpC0');
//client.login('NzQyMTE3MDUxNzYxNjg4NjM3.XzBcXQ.8bnHz6YKfLAYO_Wlk1s-WxV-Gjw');
