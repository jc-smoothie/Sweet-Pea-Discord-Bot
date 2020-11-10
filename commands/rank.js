module.exports = {
    name: 'rank',
    description: "this assigns server roles!",
    execute(message, args){
        const Asian_Invasion = '637447111725809664';
        const jc_smoothie_suppoet_server = '755814665111470142';
        const Eclipsys_Contact = '700620542419664968';

        function Asian_Invasion_roles(){
            const Weeb = '694999716047618199';
            const Member = '691304349711859792';
        }

        function Eclipsys_Contact_roles(){
            const Yomifu_Staff = '727677441597767680';
            const MOD = '727680375266213968';
            const Traveler = '708750286038106133';
            const Bot = '727682963415760906';
        }

        function jc_smoothie_support_server_roles(){
            const Member = '759550714862764045';
        }

        if(message.channel.guild.id == Asian_Invasion){
            Asian_Invasion_roles();
        } else if(message.channel.guild.id == jc_smoothie_suppoet_server){
            jc_smoothie_support_server_roles();
        } else if(message.channel.guild.id == Eclipsys_Contact){
            Eclipsys_Contact_roles();
        }/* else if(message.channel.guild.id == nico_nico_nii){
            nico_nico_nii_roles();
        } else if(message.channel.guild.id == B){
            B_roles();
        } else if(message.channel.guild.id == WHS_Anime_Club){
            WHS_Anime_Club_roles();
        }*/

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
        
        const parts = message.content.split(' ');

        if(parts[1] == 'traveler'){
            if(message.member.guild.id == Eclipsys_Contact){
                if(message.member.roles.some(role => role.name === 'Traveler')) {
                    message.reply("You can not stop being a Traveler!");
                } else{
                    message.member.roles.add(Traveler);
                    message.reply('Welcome, Traveler~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.');
            }
        } else if(parts[1] == 'member'){
            /*if(message.member.roles.cache.find(r => r.name === "Member")){
                //message.member.roles.remove(Member);
                //message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
                message.reply("You can not stop being a member! However, if you do want to leave the server, there's nothing stopping you.");
            } else{
                message.member.roles.add('759550714862764045');
                message.reply('Welcome, new Member~ Visit #react-role-assign to get language and region roles.');
                //message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, new member~");
                //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
            }*/
            
            if(message.member.guild.id == Asian_Invasion){
                if(message.member.roles.cache.find(r => r.name === "Member")){
                    //message.member.roles.remove(Member);
                    //message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
                    message.reply("You can not stop being a member! However, if you do want to leave the server, there's nothing stopping you.");
                } else{
                    message.member.roles.add(Member);
                    message.reply('Welcome, new Member~ Visit #react-role-assign to get language and region roles.');
                    //message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, new member~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else if(message.member.guild.id == jc_smoothie_support_server){
                if(message.member.roles.cache.find(r => r.name === "Member")){
                    //message.member.roles.remove(Member);
                    //message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
                    message.reply("You can not stop being a member! However, if you do want to leave the server, there's nothing stopping you.");
                } else{
                    message.member.roles.add(Member);
                    message.reply('Welcome, new Member~ Visit #react-role-assign to get language and region roles.');
                    //message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, new member~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
            
        } else if(parts[1] == 'weeb'){
            if(message.member.guild.id == Asian_Invasion){
                if(message.member.roles.cache.find(r => r.name === "Weeb")){
                    message.member.roles.remove('694999716047618199');
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
                } else{
                    message.member.roles.add('694999716047618199');
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, fellow Weeb~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(parts[1] == 'staff' || parts[1] == 'mod' || parts[1] == 'moderator'){
            message.reply('You can not give youself the "staff" or "Moderator" roles. \n These roles are manually given by the current staff to those who are worthy.');
        } else {
            message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
        }

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
    }
}