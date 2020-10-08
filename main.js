const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//const client = new Client();

const {Client, MessageEmbed} = require('discord.js');


const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

//Variables
const Test = '763441410032140318';
var forgiven = 1

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
    const replyFormatted = replt.toLowerCase();
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
   } else if (command == 'ping'){
       client.commands.get('ping').execute(message, args);
   } else if (command == 'lore'){
       client.commands.get('lore').execute(message, args);
   } else if (command == 'rank'){
       client.commands.get('rank').execute(message, args);
   } else if(command == 'roll'){
       const parts = message.content.split(' ');
       var dice_result = parts[1];
       var dice_number = parseInt(dice_result, 10);
       var dice = Math.floor((Math.random() * dice_number));
       message.reply("You rolled a " + dice + "!");
       //console.log(message.guild.roles);
   } else if(command == 'hug'){
       //client.commands.get('hug').execute(message, args);
       if (!args[0]){
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
               var forgiven = 1
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
   } else if(command == 'testing'){
       message.channel.send("testing, 1 2 3, testing")//.then(sentMessage => {
           //sentMessage.delete(5000);
       //});
   } else if(command == 'token'){
       var attempts = 1
       if(attempts == 1){
           var attempts = 2
           message.reply("Sorry, but I can't reveal my token to anyone in a text channel.")
       } else if(attempts == 2){
           var attempts = 3
           message.reply("Once again, I simply can't display my token in a text channel, otherwise others will see. \n Others can write code and commands, and control me with my token.")
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
           var forgiven = 0
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
        .setDescription("If you don't have a language role, react to get yours! \n If you already have a language role and want to remove it, react to remove it.")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed)
        messageEmbed.react('🇺🇸')
    } else if(command == 'regionreactions'){
        let reactionsEmbed = new MessageEmbed()
        .setTitle('Want to see other people from your region?')
        //.setDescription("If you don't have a language role, react to get yours! \n If you already have a language role and want to remove it, react to remove it.")
        .setDescription("If you don't have a region role, react to get yours! \n If you already have a region role and want to remove it, react to remove it.")
        .setColor('#66ccff')
        let messageEmbed = await message.channel.send(reactionsEmbed)
        messageEmbed.react('🇺🇸')
    }
});

//Green Check Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '✅'){
            reaction.message.guild.members.cache.get(user.id).roles.add(Test)
            reaction.message.reply("✅ You now have the role!")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '✅'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(Test)
            reaction.message.reply("❌ Your role has been removed.")
        }
    }
})

//American Flag Reaction
client.on("messageReactionAdd", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇺🇸'){
            reaction.message.guild.members.cache.get(user.id).roles.add(Test)
            reaction.message.reply("✅ You now have the role!")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if(reaction.message.partcial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "763441746314133505"){
        if(reaction.emoji.name === '🇺🇸'){
            reaction.message.guild.members.cache.get(user.id).roles.remove(Test)
            reaction.message.reply("❌ Your role has been removed.")
        }
    }
})

client.login('NzI5MTQyMDczMTI2NjgyNjQ0.XwEoeQ.PAqRilpN0956yGxLgxy5xpr-qqY');
//client.login('NzQyMTE3MDUxNzYxNjg4NjM3.XzBcXQ.8bnHz6YKfLAYO_Wlk1s-WxV-Gjw');
