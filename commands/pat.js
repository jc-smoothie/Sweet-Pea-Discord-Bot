const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'pat',
    description: "Default command.",
    usage: "+pat <user>",
    execute(message, args){
        if(!args[0]){
            message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } else{
            console.log('should work.')
            const image = Math.floor((Math.random() * 6) + 1);
            if(image == 1){
                var chosenImage = 'https://cdn.weeb.sh/images/rybs1yFDb.gif';
            } else if(image == 2){
                var chosenImage = 'https://cdn.discordapp.com/attachments/708671684491739199/708672437683880004/PO9K4V2yXf5.gif';
            } else if(image == 3){
                var chosenImage = 'https://cdn.zerotwo.dev/PAT/18eb4077-a133-4865-9c2d-e2c5e42b908e.gif';
            } else if(image == 4){
                var chosenImage = 'https://cdn.weeb.sh/images/H1jgekFwZ.gif';
            } else if(image == 5){
                var chosenImage = 'https://cdn.weeb.sh/images/r12R1kYPZ.gif';
            } else if(image == 6){
                var chosenImage = 'https://media.discordyui.net/reactions/pet/1.gif';
            }/* else if(image == 7){
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
            .setTitle("Pats!")
            .setDescription(message.author.username + ' pats ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed);
        }
    }
}