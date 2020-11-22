/*
module.exports = {
    name: 'purge',
    description: "Deletes an amount of messages inputted.",
    async execute(message, args){
        if(message.member.hasPermission("MANAGE_MESSAGES")){
            const deleteCount = parseInt(args[0], 10);
            const deleteMessage = `Deleted ${deleteCount} messages.`;

            if(!deleteCount || deleteCount > 100 || deleteCount < 2) return message.reply("Please input a number between 2 - 100.");

            const fetchd = await message.channel.messages.fetch({
                limit: deleteCount
            });

            message.channel.bulkDelete(fetched)
                .catch(err => console.log(`Cannot delete messages because of ${err}`))
                .then(message.reply(deleteMessage))
                .catch(err => {
                    console.log(err);
                });
        } else{
            message.reply("You do not have permission to use this command.");
        }
    }
}
*/