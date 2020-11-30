const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'kiss',
    description: "Default command.",
    usage: "+kiss <user>",
    execute(message, args){
        if(!args[0]){
            message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } else{
            console.log('should work.')
            const image = Math.floor((Math.random() * 13) + 1);
            if(image == 1){
                var chosenImage = 'https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489';
            } else if(image == 2){
                var chosenImage = 'https://i.pinimg.com/originals/04/7e/1b/047e1bef01702b9252ef3a528a2401ad.gif';
            } else if(image == 3){
                var chosenImage = 'https://media1.tenor.com/images/5d2b53028b305f56ae753d6a7a988f6b/tenor.gif?itemid=12997856';
            } else if(image == 4){
                var chosenImage = 'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif';
            } else if(image == 5){
                var chosenImage = 'https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412';
            } else if(image == 6){
                var chosenImage = 'https://cutewallpaper.org/21/best-anime-kisses/Anime-kiss-GIFs-Get-the-best-GIF-on-GIPHY.gif';
            } else if(image == 7){
                var chosenImage = 'https://media1.tenor.com/images/2b2662689048ee9cc66468c20ee13ffa/tenor.gif?itemid=14042664';
            } else if(image == 8){
                var chosenImage = 'https://media1.tenor.com/images/279c4716a469ace39b15e34d7fa3e7c4/tenor.gif?itemid=11487318';
            } else if(image == 9){
                var chosenImage = 'https://media1.tenor.com/images/641aeeb446c7a2350843b5ce69ccfd2b/tenor.gif?itemid=17500022';
            } else if(image == 10){
                var chosenImage = 'https://media.discordyui.net/reactions/kiss/a2qzZ7w.gif';
            } else if(image == 11){
                var chosenImage = 'https://media.discordyui.net/reactions/kiss/Xrxhow8.gif';
            } else if(image == 12){
                var chosenImage = 'https://media.discordyui.net/reactions/kiss/723805.gif';
            } else if(image == 13){
                var chosenImage = 'https://cdn.weeb.sh/images/ryceu6V0W.gif';
            }

            const personTagged = message.mentions.members.first();
            
            let embed = new Discord.MessageEmbed()
            .setTitle("Kissess")
            .setDescription(message.author.username + ' kissess ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed)
        }
    }
}