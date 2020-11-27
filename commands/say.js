module.exports = {
    name: 'say',
    description: "this says what someone types after the command!",
    execute(message, args){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Lack of permissions!")
        const msg = message.content.slice(4);
        if(msg == '') return; message.delete();
        message.channel.send(msg);
    }
}