const Discord = require('discord.js');

//const client = new Discord.Client();

const {Client, MessageEmbed} = require('discord.js');

const client = new Client();

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
   const command = require(`./commands/${file}`);

   client.commands.set(command.name, command);
}

client.once('ready', () => {
   console.log('Sweet Pea is online!');
   client.user.setActivity('anime!', {type: "WATCHING"}).catch(console.error);
});

client.on('message', message => {
    const reply = message.content
    if(reply == 'cool'){
        setTimeout(function(){
            message.channel.send("nice");
        }, 500);
    } else if(reply == 'introduce yourself'){
        setTimeout(function(){
            message.channel.send("My name is Sweet Pea, and I am a discord bot coded in JavaScript by you, jc smoothie!");
        }, 500);
        setTimeout(function(){
            message.channel.send("I can help members in the server self-assign roles, and role a dice.");
        }, 500);
        //message.channel.send("I can help members in the server self-assign roles, and role a dice.");
    } else if(reply == "okay, that's all"){
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
       
       const embed = new MessageEmbed()
       .setTitle('Server Commands')
       .setDescription('+commands - Access to a list of commands \n +rank [role] - Assign a role to yourself \n +roll [number] - Generate a random number \n +ping - Play ping pong with me! \n +sortthecourt - Play Sort The Court, a game \n where you rule a kindgom!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                             Created by jc smoothie')
       //message.author.send(embed);
       message.channel.send(embed);
   } else if(command == 'commands'){
       //console.log(message.guild.roles);
       const embed = new MessageEmbed()
       .setTitle('Server Commands')
       .setDescription('+commands - Access to a list of commands \n +rank [role] - Assign a role to yourself \n +roll [number] - Generate a random number \n +ping - Play ping pong with me! \n +sortthecourt - Play Sort The Court, a game \n where you rule a kindgom!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                             Created by jc smoothie')
       message.author.send(embed);
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
       client.on('message', message => {
           let urls = [
               'https://cdn.discordapp.com/attachments/730136973372555386/733655951374024775/giphy.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655954704564295/giphy-1.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655971049767032/nrdYNtL.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655977542287390/anime-hug.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655981442990169/tumblr_ma7l17EWnk1rq65rlo1_500.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655982890156032/b62f047f8ed11b832cb6c0d8ec30687b.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733656000049053766/1451239600645.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655996781690890/tumblr_939249beed1e6e81801ac8391bb8a203_111e1ef2_500.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655994063650906/tenor.gif',
               'https://cdn.discordapp.com/attachments/730136973372555386/733655987331924008/c61.gif'
           ];

           const hugging = message.content.split(' ');
           var personTagged = hugging[1];
           
           //const image = urls[Math.floor(Math.random() * urls.length/10)]
           //var dice_number = parseInt(dice_result, 10);
           //var dice = Math.floor((Math.random() * dice_number));
           
           const hugEmbed = new MessageEmbed()
           .setTitle("Hugs")
           .setDescription(message.author.username + ' hugs ' + personTagged)
           .setImage(image)
           .setColor("RANDOM")
           message.channel.send(hugEmbed);
       });
   } else if(command == 'invite'){
       const invite = new MessageEmbed()
       .setTitle('Invite me to a server!')
       .setDescription("Want me to join a server? Here's a link to do just that! \n https://discord.com/api/oauth2/authorize?client_id=729142073126682644&permissions=0&scope=bot \n Afterwards, select the server you want to add me to. \n Walla, I'm in a new server! How awesome is that?")
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('You too can add me to a server!                                                                                Created by jc smoothie')
       message.author.send(invite);
       message.channel.send("Invitation sent!");
   } else if(command == 'sortthecourt'){
       client.commands.get('sortthecourt').execute(message, args);
       
       //have code to check for user input here, and have
       //seperate character files/text to print in separate
       //files, which would use a character handler to execute

       //client.commands.get('sortthecourt').execute(message, args);
   } else if(command == 'hello'){
       message.channel.send("testing, 1 2 3, testing")
   }
});

client.login('NzI5MTQyMDczMTI2NjgyNjQ0.XwEoeQ.FEB0iSPK8vxHywxOxZJRdLMLaa4');
