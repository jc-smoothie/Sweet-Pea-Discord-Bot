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
        
        const part1 = parts[1];
        const part2 = parts[2];
        const part3 = parts[3];
        if(part1 == 'black'){
            if(message.member.roles.cache.find(r => r.name === "「Black」")){
                message.member.roles.remove(Black);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Black」.");
            } else{
                message.member.roles.add(Black);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Black」!");
            }
        } else if(part1 == 'gray'){
            if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                message.member.roles.remove(Gray);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Gray」.");
            } else{
                message.member.roles.add(Gray);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Gray」!");
            }
        } else if(parts[1] == 'white'){
            if(message.member.roles.cache.find(r => r.name === "「White」")){
                message.member.roles.remove(White);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「White」.");
            } else{
                message.member.roles.add(White);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「White」!");
            }
        } else if(parts[1] == 'pink'){
            if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                message.member.roles.remove(Pink);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pink」.");
            } else{
                message.member.roles.add(Pink);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pink」!");
            }
        } else if(parts[1] == 'red'){
            if(message.member.roles.cache.find(r => r.name === "「Red」")){
                message.member.roles.remove(Red);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Red」.");
            } else{
                message.member.roles.add(Red);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Red」!");
            }
        } else if(parts[1] == 'orange'){
            if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                message.member.roles.remove(Orange);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Orange」.");
            } else{
                message.member.roles.add(Orange);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Orange」!");
            }
        } else if(parts[1] == 'yellow'){
            if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                message.member.roles.remove(Yellow);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Yellow」.");
            } else{
                message.member.roles.add(Yellow);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Yellow」!");
            }
        } else if(parts[1] == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Green」")){
                message.member.roles.remove(Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Green」.");
            } else{
                message.member.roles.add(Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Green」!");
            }
        } else if(parts[1] == 'blue'){
            if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                message.member.roles.remove(Blue);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Blue」.");
            } else{
                message.member.roles.add(Blue);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Blue」!");
            }
        } else if(parts[1] == 'indigo'){
            if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                message.member.roles.remove(Indigo);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Indigo」.");
            } else{
                message.member.roles.add(Indigo);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Indigo」!");
            }
        } else if(parts[1] == 'violet'){
            if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                message.member.roles.remove(Violet);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Violet」.");
            } else{
                message.member.roles.add(Violet);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Violet」!");
            }
        } else if(part1 == 'pastel'){
            if(part2 == 'red'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Red」.");
                } else{
                    message.member.roles.add(Pastel_Red);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Red」!");
                }
            } else if(part2 == 'orange'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Orange」.");
                } else{
                    message.member.roles.add(Pastel_Orange);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Orange」!");
                }
            } else if(part2 == 'yellow'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Yellow」.");
                } else{
                    message.member.roles.add(Pastel_Yellow);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Yellow」!");
                }
            } else if(part2 == 'green'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Green」.");
                } else{
                    message.member.roles.add(Pastel_Green);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Green」!");
                }
            } else if(part2 == 'blue'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Blue」.");
                } else{
                    message.member.roles.add(Pastel_Blue);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Blue」!");
                }
            } else if(part2 == 'purple'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Purple」.");
                } else{
                    message.member.roles.add(Pastel_Purple);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Purple」!");
                }
            }
        } else if(part1 == 'yellow' && part2 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                message.member.roles.remove(Yellow_Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Yellow Green」.");
            } else{
                message.member.roles.add(Yellow_Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Yellow Green」!");
            }
        } else if(part1 == 'blue' && part2 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                message.member.roles.remove(Blue_Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Light Blue Green」.");
            } else{
                message.member.roles.add(Blue_Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Light Blue Green」!");
            }
        } else if(part1 == 'light' && part2 == 'blue' && part3 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                message.member.roles.remove(Light_Blue_Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Light Blue Green」.");
            } else{
                message.member.roles.add(Light_Blue_Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Light Blue Green」!");
            }
        } else if(parts[1] == 'staff' || parts[1] == 'mod' || parts[1] == 'moderator'){
            message.reply('You can not give youself the "staff" or "Moderator" roles. \n These roles are manually given by the current staff to those who are worthy.');
        } else {
            message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
        }
    }
}