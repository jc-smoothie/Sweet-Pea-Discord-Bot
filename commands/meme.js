const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
module.exports = {
    name: 'meme',
    description: "Default command.",
    usage: "+meme",
    execute(message, args){
        const image = Math.floor((Math.random() * 7) + 1);
        if(image == 1){
            var chosenImage = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/When-You-Lean-Too-Far-Back.jpg?q=50&fit=crop&w=740&h=586';
        } else if(image == 2){
            var chosenImage = 'https://assets3.thrillist.com/v1/image/2798222/792x879/flatten;scale;jpeg_quality=70';
        } else if(image == 3){
            var chosenImage = 'https://img.ifunny.co/images/1d5daa630e03363fce83880eb53d19ee2e128939526766f919bb693baeb09a7c_1.jpg';
        } else if(image == 4){
            var chosenImage = 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/04/Funny-anime-meme-5.jpeg?q=50&fit=crop&w=740&h=831';
        } else if(image == 5){
            var chosenImage = 'https://memestatic.fjcdn.com/pictures/Meme+here_eb72dc_7881148.jpg';
        } else if(image == 6){
            var chosenImage = 'https://i.chzbgr.com/full/9301650176/h672CA1B3/person-yes-apologize-my-late-introduction-sadako-girl-gursed-video-normies8-weebs';
        } else if(image == 7){
            var chosenImage = 'https://pbs.twimg.com/media/DLeY-uxX4AA8MkE.jpg';
        } else if(image == 8){
            var chosenImage = 'https://imgix.ranker.com/user_node_img/50091/1001807951/original/29-photo-u1?fit=crop&fm=pjpg&q=60&w=650&dpr=2';
        } //else if(image == 9){
            //var chosenImage = '';
        //} //else if(image == 10){
            //var chosenImage = '';
        //} //else if(image == 11){
            //var chosenImage = '';
        //}
        const personTagged = message.mentions.members.first();
            
        let embed = new Discord.MessageEmbed()
        .setTitle("Memes")
        .setImage(chosenImage)
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}