const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'punch',
    description: "Default command.",
    usage: "+punch <user>",
    execute(message, args){
        if(!args[0]){
            message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } else{
            console.log('punch command activatedd!')
            const image = Math.floor((Math.random() * 2) + 1);
            if(image == 1){
                var chosenImage = 'https://cdn.weeb.sh/images/BkdyPTZWz.gif';
            } else if(image == 2){
                var chosenImage = 'https://cdn.weeb.sh/images/B1-ND6WWM.gif';
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

            if(!message.mentions.members.first()){
                message.reply("Please mention someone to perform this action to!");
                return;
            }

            const personTagged = message.mentions.members.first();
            
            let embed = new Discord.MessageEmbed()
            .setTitle("Punches!")
            .setDescription(message.author.username + ' punches ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed);
        }
    }
}