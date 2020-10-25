module.exports = {
    name: 'timer',
    description: "this is a timer command!",
    execute(message, args){
        const parts = message.content.split(' ');
        var timer_result = parts[1];
        var timer = parseInt(timer_result, 10);
        message.reply("Set timer for " + timer + " second(s)!");
        setTimeout(function(){
            message.reply("Your " + timer + " second(s) timer has ended!");
        }, timer*1000);
    }
}