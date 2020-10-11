const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'hug',
    description: "Default command.",
    usage: "!hug <user>",
    execute(message, args){
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
    }
}