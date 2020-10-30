module.exports = {
    name: 'say',
    description: "this says what someone types after the command!",
    execute(message, args){
        /*
        if(message.member.roles.some(role => role.name === 'Staff') || message.member.roles.some(role => role.name === 'Yomifu Staff')) {
            const msg = message.content.slice(4);
            message.channel.send(msg);
        } else{
            message.reply("This message is only available to those with the Staff role!");
        }
        */
        const msg = message.content.slice(4);
        message.channel.send(msg);
    }
}