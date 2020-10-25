module.exports = {
    name: '8ball',
    description: "this is an 8ball command!",
    execute(message, args){
        var shake = Math.floor((Math.random() * 20) + 1);
        if(shake == 1){
            message.reply("As I see it, yes");
        } else if(shake == 2){
            message.reply("Ask again later");
        } else if(shake == 3){
            message.reply("Better not tell you now");
        } else if(shake == 4){
            message.reply("Cannot predict now");
        } else if(shake == 5){
            message.reply("Concentrate and ask again");
        } else if(shake == 6){
            message.reply("Don’t count on it");
        } else if(shake == 7){
            message.reply("It is certain");
        } else if(shake == 8){
            message.reply("It is decidedly so");
        } else if(shake == 9){
            message.reply("Most likely");
        } else if(shake == 10){
            message.reply("My reply is no");
        } else if(shake == 11){
            message.reply("My sources say no");
        } else if(shake == 12){
            message.reply("Outlook not so good");
        } else if(shake == 13){
            message.reply("Outlook good");
        } else if(shake == 14){
            message.reply("Reply hazy, try again");
        } else if(shake == 15){
            message.reply("Signs point to yes");
        } else if(shake == 16){
            message.reply("Very doubtful");
        } else if(shake == 17){
            message.reply("Without a doubt");
        } else if(shake == 18){
            message.reply("Yes");
        } else if(shake == 19){
            message.reply("Yes definitely");
        } else{
            message.reply("You may rely on it");
        }
    }
}