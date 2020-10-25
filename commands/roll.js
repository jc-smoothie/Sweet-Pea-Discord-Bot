module.exports = {
    name: 'roll',
    description: "this is a dice roller command!",
    execute(message, args){
        const parts = message.content.split(' ');
        var dice_result = parts[1];
        var dice_number = parseInt(dice_result, 10);
        var dice = Math.floor((Math.random() * dice_number) + 1);
        message.reply("You rolled a " + dice + "!");
    }
}