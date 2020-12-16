const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'lick',
    description: "Default command.",
    usage: "+lick <user>",
    execute(message, args){
        if(!args[0]){
            message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } else{
            console.log('should work.')
            const image = Math.floor((Math.random() * 2) + 1);
            if(image == 1){
                var chosenImage = 'https://cdn.weeb.sh/images/H13HS7S6-.gif';
            } else if(image == 2){
                var chosenImage = 'https://cdn.discordapp.com/attachments/713915066441007164/713935831525621830/3tOnmnrhthY.gif';
            }/* else if(image == 3){
                var chosenImage = '';
            } else if(image == 4){
                var chosenImage = '';
            } else if(image == 5){
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

            const personTagged = message.mentions.members.first();
            
            let embed = new Discord.MessageEmbed()
            .setTitle("Licks!")
            .setDescription(message.author.username + ' licks ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed)
        }
    }
}