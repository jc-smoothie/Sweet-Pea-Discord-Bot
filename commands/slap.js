const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'slap',
    description: "Default command.",
    usage: "%slap <user>",
    execute(message, args){
        if (!args[0]) {
			message.channel.send('Missing Arguments!')
            console.log('Missing args')
        } 
        else {
            console.log('should work.')
            var chosenImage = 'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif?itemid=5509136';
            //const image = Math.floor((Math.random() * 10) + 1);
            //if(image == 1){
                //var chosenImage = '';
            //} else if(image == 2){
                //var chosenImage = '';
            //} else if(image == 3){
                //var chosenImage = '';
            //} else if(image == 4){
                //var chosenImage = '';
            //} else if(image == 5){
                //var chosenImage = '';
            //} else if(image == 6){
                //var chosenImage = '';
            //} else if(image == 7){
                //var chosenImage = '';
            //} else if(image == 8){
                //var chosenImage = '';
            //} else if(image == 9){
                //var chosenImage = '';
            //} else if(image == 10){
                //var chosenImage = '';
            //}
                const personTagged = message.mentions.members.first();
 
                let embed = new Discord.MessageEmbed()
                .setTitle("Hugs")
                .setDescription(message.author.username + ' slaps ' + personTagged.displayName)
                .setImage(chosenImage)
                .setColor("RANDOM")
                message.channel.send(embed)
        }
    }
}