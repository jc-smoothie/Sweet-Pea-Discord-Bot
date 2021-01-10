const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kill',
    description: "Default command.",
    usage: "+kill <user>",
    execute(message, args){
        if (!args[0]) {
			message.channel.send('Missing Arguments!')
            //console.log('Missing args')
        } 
        else {
            //console.log('should work.')
            const image = Math.floor((Math.random() * 10) + 1);
            if(image == 1){
                var chosenImage = 'https://steamuserimages-a.akamaihd.net/ugc/863984095731146516/2F554E3A99C30F53394677C8558E3048418DFC60/';
            } else if(image == 2){
                var chosenImage = 'https://cdn.weeb.sh/images/B1VnoJFDZ.gif';
            } else if(image == 3){
                var chosenImage = 'https://cdn.weeb.sh/images/r11as1tvZ.gif';
            } else if(image == 4){
                var chosenImage = 'https://cdn.discordapp.com/attachments/713914988602982422/713935662755217408/uOlyiKmmUhS.gif';
            } else if(image == 5){
                var chosenImage = 'https://cdn.zerotwo.dev/SHOOT/9037a2eb-4a5a-44f5-95a9-9e96948be530.gif';
            } else if(image == 6){
                var chosenImage = 'https://cdn.zerotwo.dev/SHOOT/9037a2eb-4a5a-44f5-95a9-9e96948be530.gif';
            } else if(image == 7){
                var chosenImage = 'https://i.redd.it/dblql4vhaqa01.gif';
            } else if(image == 8){
                var chosenImage = 'https://i.imgur.com/VCrDz6C.gif';
            } else if(image == 9){
                var chosenImage = 'https://media1.tenor.com/images/560c804176fd19aa9bb8a4d32f1a3041/tenor.gif?itemid=17608722';
            } else if(image == 10){
                var chosenImage = 'https://media1.tenor.com/images/560c804176fd19aa9bb8a4d32f1a3041/tenor.gif?itemid=17608722';
            } else if(image == 11){
                var chosenImage = 'https://media1.tenor.com/images/560c804176fd19aa9bb8a4d32f1a3041/tenor.gif?itemid=17608722';
            } else if(image == 12){
                var chosenImage = 'https://i.imgur.com/VM0TwyH.gif';
            } else if(image == 13){
                var chosenImage = 'https://media.tenor.com/images/fe89919039e43c4c681bdb46358a502f/tenor.gif';
            } else if(image == 14){
                var chosenImage = 'https://media1.tenor.com/images/87cf4e6c9d7d523d736f9e8fddc4e951/tenor.gif?itemid=5502476';
            } else if(image == 15){
                var chosenImage = 'https://media1.tenor.com/images/aaa712effa82c1c7a4964e1cb5dacc05/tenor.gif?itemid=8242492';
            } else if(image == 16){
                var chosenImage = 'https://data.whicdn.com/images/314492571/original.gif';
            } else if(image == 17){
                var chosenImage = 'https://i.chzbgr.com/full/8442235648/h5122C918/whats-the-name-of-that-anime';
            } else if(image == 18){
                var chosenImage = 'https://media1.tenor.com/images/c8e45541220b07e444e77b814feee38c/tenor.gif?itemid=15340791';
            } //else if(image == 19){
                //var chosenImage = 'https://i.gifer.com/PXEk.gif';
            //}

            if(!message.mentions.members.first()){
                message.reply("Please mention someone to perform this action to!");
                return;
            }
            
            const personTagged = message.mentions.members.first();

            let embed = new Discord.MessageEmbed()
            .setTitle("Death")
            .setDescription(message.author.username + ' kills ' + personTagged.displayName)
            .setImage(chosenImage)
            .setColor("RANDOM")
            message.channel.send(embed);
        }
    }
}