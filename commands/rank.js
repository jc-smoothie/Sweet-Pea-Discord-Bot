module.exports = {
    name: 'rank',
    description: "this assigns the Traveler role!",
    execute(message, args){
        const Asian_Invasion = '637447111725809664';
        const Weeb = '694999716047618199';
        //const Member = '691304349711859792';
        const Member = '759550714862764045';
        
        const Eclipsys_Contact = '700620542419664968';
        const Yomifu_Staff = '727677441597767680';
        const MOD = '727680375266213968';
        const Traveler = '708750286038106133';
        //const Bot = '727682963415760906';

        //Role Variables
        const Black = '771568348642672670';
        const Gray = '771568601693159454';
        const White = '771568680416837642';
        const Pink = '771568756672692266';
        const Red = '771568870732857387';
        const Pastel_Red = '771568989163225120';
        const Pastel_Orange = '771569098341482497';
        const Orange = '771569241861652480';
        const Yellow = '771569332803076101';
        const Pastel_Yellow = '771569409910374402';
        const Yellow_Green = '771569562620526592';
        const Green = '771569741596327946';
        const Pastel_Green = '771569860014374913';
        const Light_Blue_Green = '771570030109917214';
        const Blue_Green = '771570265511428129';
        const Pastel_Blue = '771570337853997067';
        const Blue = '771570340559585290';
        const Indigo = '771570666041769984';
        const Violet = '771570721524154389';
        const Pastel_Purple = '771570764938739743';

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
        
        const parts = message.content.split(' ');
        const part1 = parts[1];
        const part2 = parts[2];
        const part3 = parts[3];

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
            if(message.member.roles.cache.find(r => r.name === "Weeb")){
                message.member.roles.remove(Weeb);
            message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
            } else{
                message.member.roles.add(Weeb);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, fellow Weeb~");
                //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
            }
        } else if(parts[1] == 'staff' || parts[1] == 'mod' || parts[1] == 'moderator'){
            message.reply('You can not give youself the "staff" or "Moderator" roles. \n These roles are manually given by the current staff to those who are worthy.');
        } else {
            message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
        }

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
    }
}