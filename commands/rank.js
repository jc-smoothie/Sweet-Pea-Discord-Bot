module.exports = {
    name: 'rank',
    description: "this assigns the Traveler role!",
    execute(message, args){
        const Projekt_Rossmoor = '637447111725809664';
        const Weeb = '694999716047618199';
        const Member = '691304349711859792';
        
        const Eclipsys_Contact = '700620542419664968';
        const Yomifu_Staff = '727677441597767680';
        const MOD = '727680375266213968';
        const Traveler = '708750286038106133';
        //const Bot = '727682963415760906';

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
        
        const parts = message.content.split(' ');
        if(parts[1] == 'traveler'){
            if(message.member.roles.some(role => role.name === 'Traveler')) {
                message.reply("You can not stop being a Traveler!");
            }
            message.member.roles.add(Traveler);
            message.reply('Welcome, Traveler~ Visit #react-role-assign to get language and region roles.');
        } else if(parts[1] == 'member'){
            message.member.roles.add(Member);
            message.reply('Welcome, new Member~ Visit #react-role-assign to get language and region roles.');
        } else if(parts[1] == 'weeb'){
            if(message.member.roles.has(694999716047618199)){
                message.member.roles.remove(Weeb);
            message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
            } else{
                message.member.roles.add(Weeb);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.");
                //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
            }
        } else if(parts[1] == 'staff' || parts[1] == 'mod' || parts[1] == 'moderator'){
            message.reply('You can not give youself the "staff" or "Moderator" roles. \n These roles are manually given by the current staff to those who are worthy.');
        } else {
            message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
        }
    }
}