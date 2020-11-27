module.exports = {
    name: 'clear',
    description: "this is a clear command that deletes messages!",
    execute(message, args){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Lack of permissions!").then(msg => {
            msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
        }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        let deleteAmount;

        if(isNaN(args[0]) || parseInt(args[0]) <= 0){return message.reply("Please put a number for the amount of messages to clear!").then(msg => {
            msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
        }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);}
        if(parseInt(args[0]) > 100){
            message.reply("You can only delete 100 messages at a time!").then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        } else{
            deleteAmount = parseInt(args[0]);
            message.channel.bulkDelete(deleteAmount + 1, true);
            message.reply(`*Successfully deleted __${deleteAmount}__ messages.*`).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
        }
    }
}