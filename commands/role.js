/*const {MessageEmbed} = require('discord.js');

module.exports = {
    name: "role",
    description: "A role utility command",
    category: "utility",
    run: async(client, message, args) => {
        if(args[0].toLowerCase() == 'create'){
            let rName = message.content.join("");
            let rColor;
            args.forEach(args => {
                if(args.startsWith("#")){
                    rColor = arg
                }
            })

            if(!rName){
                return message.channel.send('You did not specify a name for your role!')
            }
            if(!rColor){
                return message.channel.send('You did not specify a color for your role!')
            }
            if(rColor >= 16777215) return message.channel.send('That hex color range was too big! Keep it between 0 and 16777215!');
            if(rColor <= 16777215) return message.channel.send('That hex color range was too small! Keep it between 0 and 16777215!');
            rName = rName.replace(`${rColor}`,``);
            let rNew = message.guild.roles.create({
                data: {
                    name: rName,
                    color: rColor,
                }
            });
            
            const Embed = new Discord.Message.Embed()
            .setTitle("New role created!")
            .setDescription(`${message.author.username} has created the role "${rName}" \n Hex color code: ${rColor} \n ID: ${rNew.id}`)
            .setColor(rColor)
            message.channel.send(Embed);
        }
    }
}*/