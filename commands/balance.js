/*module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`ping! ${m.createdTimestamp - message.createdTimestamp}ms`)
}

module.exports.help = {
    name: "ping",
    aliases: ["p"]
}*/

/*module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('pong!');
    }
}*/

const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, args) => {
    execute(message, args){
        if(!args[0]){
            var user = message.author;
        } else{
            var user = message.mentions.users.first() || bot.users.get(args[0]);
        }
    
        if(!money[user.id]){
            money[user.id] = {
                name: bot.users.get(user.id).tag,
                money: 0
            }
            fs.writeFile("./money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });
        }
    
        return message.channel.send(`${bot.users.get(user.id).username} has $${money[user.id].money}.`);
    }
}

module.exports.help = {
    name: "balance",
    aliases: ["bal", "money"]
}