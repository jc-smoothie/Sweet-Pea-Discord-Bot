module.exports = {
    name: 'say',
    description: "this says what someone types after the command!",
    execute(message, args){
        const msg = message.content.slice(4);
        if(msg == '') return;
        message.channel.send(msg);
    }
}