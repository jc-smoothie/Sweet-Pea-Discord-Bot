module.exports = {
    name: 'topic',
    description: "this sends a topic question!",
    execute(message, args){
        const topic = Math.floor((Math.random() * 10) + 1);
        message.channel.send('pong!');
    }
}