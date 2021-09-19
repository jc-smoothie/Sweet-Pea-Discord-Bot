const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'poke',
    description: "Default command.",
    usage: "+poke <user>",
    execute(message, args){
        if(!args[0]){
            message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } else{
            console.log('poke command activated!')
            const image = Math.floor((Math.random() * 4) + 1);
            if(image == 1){
                var chosenImage = 'https://cdn.weeb.sh/images/B14SJlTQG.gif';
            } else if(image == 2){
                var chosenImage = 'https://ci.memecdn.com/4449753.gif';
            } else if(image == 3){
                var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733709913209176194/1540305729189.gif';
            } else if(image == 4){
                var chosenImage = 'https://cdn.weeb.sh/images/SyJzRTKFW.gif';
            }/* else if(image == 5){
                var chosenImage = '';
            } else if(image == 6){
                var chosenImage = '';
            } else if(image == 7){
                var chosenImage = '';
            } else if(image == 8){
                var chosenImage = '';
            } else if(image == 9){
                var chosenImage = '';
            } else if(image == 10){
                var chosenImage = '';
            } else if(image == 11){
                var chosenImage = '';
            } else if(image == 12){
                var chosenImage = '';
            } else if(image == 13){
                var chosenImage = '';
            }*/

            if(!message.mentions.members.first()){
                message.reply("Please mention someone to perform this action to!");
                return;
            }

            const personTagged = message.mentions.members.first();
            
            let embed = new Discord.MessageEmbed()
            .setTitle("Pokes!")
            .setDescription(message.author.username + ' pokes ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed);
        }
    }
}