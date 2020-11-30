module.exports = {
    name: 'unmute',
    description: "This command unmutes a member!",
    execute(message, args){
        if(!args[1]){
            return message.reply("You didn't mention who to unmute!")
        }
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);
        } else{
            message.channel.send("Can not find that member!");
        }
    }
}