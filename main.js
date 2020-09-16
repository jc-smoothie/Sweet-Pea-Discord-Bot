const Discord = require('discord.js');

//const client = new Discord.Client();

const {Client, MessageEmbed} = require('discord.js');

const client = new Client();

const prefix = '!';

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
   if(!message.cleanContent.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   const Projekt_Rossmoor = '637447111725809664';
   const Eclipsys_Contact = '700620542419664968';
   const Traveler = '708750286038106133';
   const Weeb = '694999716047618199';
   const Member = '691304349711859792';

   if(command == 'displaycommands'){
       //console.log(message.guild.roles);
       
       const embed = new MessageEmbed()
       .setTitle('Server Commands')
       .setDescription('!commands - Access to a list of commands \n !rank [role] - Assign a role to yourself \n !roll [number] - Generate a random number \n !ping - Play ping pong with me!')
       .setColor('#66ccff')
       .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
       .setFooter('Your wish is my command!                                             Created by jc smoothie')
       //message.author.send(embed);
       message.channel.send(embed);
   } else if(command == 'commands'){
    //console.log(message.guild.roles);
    
    const embed = new MessageEmbed()
    .setTitle('Server Commands')
    .setDescription('!commands - Access to a list of commands \n !rank [role] - Assign a role to yourself \n !roll [number] - Generate a random number \n !ping - Play ping pong with me!')
    .setColor('#66ccff')
    .setThumbnail('https://i.pinimg.com/originals/59/4c/c3/594cc380359a81888a5f2801fa933073.webp')
    .setFooter('Your wish is my command!                                             Created by jc smoothie')
    message.author.send(embed);
   } else if (command == 'ping'){
       client.commands.get('ping').execute(message, args);
   } else if (command == 'lore'){
       client.commands.get('lore').execute(message, args);
   } else if (command == 'rank'){
       const parts = message.content.split(' ');
       if(parts[1] == 'traveler'){
           message.member.roles.add(Traveler);
           message.reply('Welcome, Traveler~ Enjoy the server!');
        } else if(parts[1] == 'member'){
            message.member.roles.add(Member);
            message.reply('Welcome, new Member~ Enjoy the server!');
        } else if(parts[1] == 'weeb'){
            message.member.roles.add(Weeb);
            message.reply('Welcome, fellow Weeb~ Enjoy the server!');
        } else if(parts[1] == 'staff' || parts[1] == 'mod' || parts[1] == 'moderator'){
            message.reply('You can not give youself the "staff" or "Moderator" roles. \n These roles are manually given by the current staff to those of their choosing.');
        } else {
            message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
        }

   } else if(command == 'roll'){
       const parts = message.content.split(' ');
       var dice_result = parts[1];
       var dice_number = parseInt(dice_result, 10);
       var dice = Math.floor((Math.random() * dice_number) + 1);
       message.reply('You rolled a ' + dice + '!');
       //console.log(message.guild.roles);
   }
});

client.login('NzI5MTQyMDczMTI2NjgyNjQ0.XwFE-w.yokUXA-UXEQCKW3HM_oeHKVze3I');
