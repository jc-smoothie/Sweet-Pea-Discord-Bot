const Discord = require("discprd.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let user;
    if(message.mentions.users.first()){
        user = message.mentions.users.first();
    } else if(args[0]){
        user = message.guild.members.cache.get(args[0]).user;
    } else{
        user = message.author;
    }

    if(user.bot || user === client.user){
        return message.channel.send("This user is a bot.");
    }

    let balance = db.get(`account.${user.id}.balance`);
    if(!balance) balance = 0;
    else balance = balance;

    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTitle(`Balance pf ${user.tag}`)
    .addField("Balance", `$${(balance).toLocaleString()}`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    .setTimestamp(new Date)
    return message.channel.send(embed);
}

exports.help = {
    name: "balance",
    description: "Checking yours, or other members money.",
    usage: "balance [@user | user ID]",
    example: "balance \n balance @ray#1337"
}

exports.conf = {
    aliases: ["bal", "coin", "money", "credit"],
    cooldown: 5
}