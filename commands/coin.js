module.exports = {
    name: 'coin',
    description: "this is a coin flip command!",
    execute(message, args){
        var flip = Math.floor((Math.random() * 2) + 1);
        if(flip == 1){
            message.reply("The coin landed on heads!");
        } else{
            message.reply("The coin landed on tails!");
        }
    }
}