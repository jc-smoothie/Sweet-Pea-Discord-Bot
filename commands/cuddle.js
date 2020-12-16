const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'cuddle',
    description: "Default command.",
    usage: "+cuddle <user>",
    execute(message, args){
        if(!args[0]){
            message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } else{
            console.log('should work.')
            const image = Math.floor((Math.random() * 13) + 1);
            if(image == 1){
                var chosenImage = 'https://cdn.weeb.sh/images/BkNe8LQPW.gif';
            } else if(image == 2){
                var chosenImage = 'https://cdn.weeb.sh/images/r1s9RqB7G.gif';
            } else if(image == 3){
                var chosenImage = 'https://cdn.weeb.sh/images/rylgIUmPW.gif';
            } else if(image == 4){
                var chosenImage = 'https://cdn.weeb.sh/images/B1S1I87vZ.gif';
            } else if(image == 5){
                var chosenImage = 'https://cdn.weeb.sh/images/rJ6zAkc1f.gif';
            } else if(image == 6){
                var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733706755376283778/PoliticalCrazyFlycatcher-max-1mb.gif';
            } else if(image == 7){
                var chosenImage = 'https://cdn.discordapp.com/attachments/730136973372555386/733706735205744690/tenor-1.gif';
            }/* else if(image == 8){
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
            .setTitle("Cuddles")
            .setDescription(message.author.username + ' cuddles ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed)
        }
    }
}