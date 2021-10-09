module.exports = {
    name: 'roll',
    description: "this is a dice roller command!",
    execute(message, args){
        const parts = message.content.split(' ');
        var dice_result = parts[1];
        var dice_number = parseInt(dice_result, 10);
        var dice = Math.floor((Math.random() * dice_number) + 1);
        if(!parts[1] || dice.isNaN()){
            return message.reply("Enter a number for the amount you want to roll up to!");
        }
        message.reply("You rolled a " + dice + "!");
    }
}