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
            const image = Math.floor((Math.random() * 10) + 1);
            if(image == 1){
                var chosenImage = 'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif?itemid=5509136';
            } else if(image == 2){
                var chosenImage = 'https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif';
            } else if(image == 3){
                var chosenImage = 'https://i.imgur.com/fm49srQ.gif';
            } else if(image == 4){
                var chosenImage = 'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943';
            } else if(image == 5){
                var chosenImage = 'https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif';
            } else if(image == 6){
                var chosenImage = 'https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFk2Ae92E1tAeAfjk_pGLpKnHfWiikue5-m1fMe8_1TjRXlLKNwbrQTs1EfUN5ol3A';
            } else if(image == 7){
                var chosenImage = 'https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633';
            } else if(image == 8){
                var chosenImage = 'https://media4.giphy.com/media/tX29X2Dx3sAXS/giphy.gif';
            } else if(image == 9){
                var chosenImage = 'https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif';
            } else if(image == 10){
                var chosenImage = 'https://thumbs.gfycat.com/BleakCommonFrogmouth-size_restricted.gif';
            }
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