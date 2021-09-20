module.exports = {
    name: 'rank',
    description: "this assigns server roles!",
    execute(message, args){
        const Asian_Invasion = '637447111725809664';
        const jc_smoothie_support_server = '755814665111470142';
        const Eclipsys_Contact = '700620542419664968';
        const LeToilet_MC = '787001697980776528';
        const Anime_Club = '361609091602317312';

        function Asian_Invasion_roles(){
            Weeb = '694999716047618199';
            Member = '691304349711859792';
            Gamers = '761245117234675772';
        }

        function Eclipsys_Contact_roles(){
            Yomifu_Staff = '727677441597767680';
            MOD = '727680375266213968';
            Traveler = '708750286038106133';
            Bot = '727682963415760906';
        }

        function jc_smoothie_support_server_roles(){
            Member = '773549608008941569';
        }

        function LeToilet_MC_roles(){
            Member = '787001825567571998';
        }

        function Anime_Club_roles(){
            Freshman = '777896782628782100';
            Sophomore = '777896779592892436';
            Junior = '777896776199176202';
            Senior = '777896772684742656';
            Alumni = '609187024343269376';
            Artist = '609186787658825738';
            Gamers = '609187986000707614';
            Announcements = '852984054663872513';
        }

        if(message.channel.guild.id == Asian_Invasion){
            Asian_Invasion_roles();
        } else if(message.channel.guild.id == jc_smoothie_support_server){
            jc_smoothie_support_server_roles();
        } else if(message.channel.guild.id == Eclipsys_Contact){
            Eclipsys_Contact_roles();
        } else if(message.channel.guild.id == LeToilet_MC){
            LeToilet_MC_roles();
        } else if(message.channel.guild.id == Anime_Club){
            Anime_Club_roles();
        }/* else if(message.channel.guild.id == nico_nico_nii){
            nico_nico_nii_roles();
        } else if(message.channel.guild.id == B){
            B_roles();
        }*/

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
        
        const parts = message.content.split(' ');
        const part1 = parts[1];
        const role = part1.shift().toLowerCase();

        if(role == 'traveler'){
            if(message.member.guild.id == Eclipsys_Contact){
                if(message.member.roles.cache.find(r => r.name === "Traveler")){
                    message.reply("You can not stop being a Traveler!");
                } else{
                    message.member.roles.add(Traveler);
                    message.reply('Welcome, Traveler~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.');
            }
        } else if(role == 'member'){
            const member = message.guild.roles.cache.find(r => r.name === "Member");
            /*if(!member){
                message.channel.send("Sorry, but there doesn't seem to the a role called `Member`. Try to contact the server owner or and possible moderator to check if this role exists in the server.")
            } else{
                if(message.member.roles.cache.find(r => r.name === "Member")){
                    //message.member.roles.remove(Member);
                    //message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
                    message.reply("You can not stop being a member! However, if you do want to leave the server, there's nothing stopping you.");
                } else{
                    message.member.roles.add(member.id);
                    message.reply('Welcome, new Member~ Visit #react-role-assign to get language and region roles.');
                    //message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, new member~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            }*/
            
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
            
            //Checks if the server id matches with one of my own servers
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
            } else if(message.member.guild.id == LeToilet_MC){
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
            
        } else if(role == 'weeb'){
            if(message.member.guild.id == Asian_Invasion){
                if(message.member.roles.cache.find(r => r.name === "Weeb")){
                    message.member.roles.remove(Weeb);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Weeb.");
                } else{
                    message.member.roles.add(Weeb);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, fellow Weeb~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'gamer' || parts[1] == 'gamers'){
            if(message.member.guild.id == Asian_Invasion){
                if(message.member.roles.cache.find(r => r.name === "Gamers")){
                    message.member.roles.remove(Gamers);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Gamers.");
                } else{
                    message.member.roles.add(Gamers);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, fellow Gamer~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else if(message.member.guild.id == Anime_Club){
                if(message.member.roles.cache.find(r => r.name === "Gamers")){
                    message.member.roles.remove(Gamers);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Gamers.");
                } else{
                    message.member.roles.add(Gamers);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, fellow Gamer~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'staff' || parts[1] == 'mod' || parts[1] == 'moderator'){
            message.reply('You can not give youself the "Staff" or "Moderator" roles. \n These roles are manually given by the current staff to those who are deemed worthy.');
        } else if(role == 'freshman'){
            if(message.member.guild.id == Anime_Club){
                if(message.member.roles.cache.find(r => r.name === "Freshman")){
                    message.member.roles.remove(Freshman);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Freshman.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "Sophomore")){
                        message.member.roles.remove(Sophomre);
                    } else if(message.member.roles.cache.find(r => r.name === "Junior")){
                        message.member.roles.remove(Junior);
                    } else if(message.member.roles.cache.find(r => r.name === "Senior")){
                        message.member.roles.remove(Senior);
                    }
                    message.member.roles.add(Freshman);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, Freshman~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'sophomore'){
            if(message.member.guild.id == Anime_Club){
                if(message.member.roles.cache.find(r => r.name === "Sophomore")){
                    message.member.roles.remove(Sophomore);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Sophomore.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "Freshman")){
                        message.member.roles.remove(Freshman);
                    } else if(message.member.roles.cache.find(r => r.name === "Junior")){
                        message.member.roles.remove(Junior);
                    } else if(message.member.roles.cache.find(r => r.name === "Senior")){
                        message.member.roles.remove(Senior);
                    }
                    message.member.roles.add(Sophomore);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, Sophomore~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'junior'){
            if(message.member.guild.id == Anime_Club){
                if(message.member.roles.cache.find(r => r.name === "Junior")){
                    message.member.roles.remove(Junior);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Junior.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "Freshman")){
                        message.member.roles.remove(Freshman);
                    } else if(message.member.roles.cache.find(r => r.name === "Sophomore")){
                        message.member.roles.remove(Sophomore);
                    } else if(message.member.roles.cache.find(r => r.name === "Senior")){
                        message.member.roles.remove(Senior);
                    }
                    message.member.roles.add(Junior);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, Junior~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'senior'){
            if(message.member.guild.id == Anime_Club){
                if(message.member.roles.cache.find(r => r.name === "Senior")){
                    message.member.roles.remove(Senior);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Senior.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "Freshman")){
                        message.member.roles.remove(Freshman);
                    } else if(message.member.roles.cache.find(r => r.name === "Sophomore")){
                        message.member.roles.remove(Sophomore);
                    } else if(message.member.roles.cache.find(r => r.name === "Junior")){
                        message.member.roles.remove(Junior);
                    }
                    message.member.roles.add(Senior);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, Senior~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'artist'){
            if(message.member.guild.id == Asian_Invasion){
                if(message.member.roles.cache.find(r => r.name === "Artist")){
                    message.member.roles.remove(Artist);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Artist.");
                } else{
                    message.member.roles.add(Artist);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", Welcome, Artist~");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(role == 'announcements'){
            if(message.member.guild.id == Anime_Club){
                if(message.member.roles.cache.find(r => r.name === "Announcements")){
                    message.member.roles.remove(Announcements);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role Announcements.");
                } else{
                    message.member.roles.add(Announcements);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role Announcements!");
                    //message.reply('Welcome, fellow Weeb~ Visit #react-role-assign to get language and region roles.');
                }
            } else{
                message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
            }
        } else if(!role){
            message.reply('Please enter the role you wish to give yourself.');
        } else {
            message.reply('Sorry, either the role you entered is not available or does not exist. Please try again.')
        }

        //if(message.member.roles.some(role => role.name === 'Whatever')) {}
    }
}