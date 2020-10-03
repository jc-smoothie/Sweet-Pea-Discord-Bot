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

client.login('NzI5MTQyMDczMTI2NjgyNjQ0.XwEoeQ.n7cOZwrRhBkNrWdkb4-he4mydWA');
