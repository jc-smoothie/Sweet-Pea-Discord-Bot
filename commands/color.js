module.exports = {
    name: 'color',
    description: "this assigns color roles!",
    execute(message, args){
        //Role Variables
        const Asian_Invasion = '637447111725809664';
        const nico_nico_nii = '771147395585146910';
        const B = '764619306553311253';

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

        /*
        if(member.guild.id == Asian_Invasion){
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
        } else if(member.guild.id == nico_nico_nii){
            const Black = '771748675469705276';
            const Gray = '771756390163152906';
            const White = '771756488690892821';
            const Pink = '771756546895511563';
            const Red = '771756615849476176';
            const Pastel_Red = '771756928329711617';
            const Pastel_Orange = '771757019199307807';
            const Orange = '771757092716806217';
            const Yellow = '771757133100351528';
            const Pastel_Yellow = '771757134597455924';
            const Yellow_Green = '771757161989537832';
            const Green = '771757259683397653';
            const Pastel_Green = '771757362796429373';
            const Light_Blue_Green = '771757423262302208';
            const Blue_Green = '771757490802393140';
            const Pastel_Blue = '771758468851695617';
            const Blue = '771758472202289222';
            const Indigo = '771758474819534858';
            const Violet = '771758477541638144';
            const Pastel_Purple = '771758480340025364';
        } /*else if(member.guild.id == B){
            const Black = '';
            const Gray = '';
            const White = '';
            const Pink = '';
            const Red = '';
            const Pastel_Red = '';
            const Pastel_Orange = '';
            const Orange = '';
            const Yellow = '';
            const Pastel_Yellow = '';
            const Yellow_Green = '';
            const Green = '';
            const Pastel_Green = '';
            const Light_Blue_Green = '';
            const Blue_Green = '';
            const Pastel_Blue = '';
            const Blue = '';
            const Indigo = '';
            const Violet = '';
            const Pastel_Purple = '';
        }*/
        
        const parts = message.content.split(' ');
        const part1 = parts[1];
        const part2 = parts[2];
        const part3 = parts[3];

        if(part1 == 'black'){
            if(message.member.roles.cache.find(r => r.name === "「Black」")){
                message.member.roles.remove(Black);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Black」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Black);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Black」!");
            }
        } else if(part1 == 'gray'){
            if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                message.member.roles.remove(Gray);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Gray」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Gray);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Gray」!");
            }
        } else if(parts[1] == 'white'){
            if(message.member.roles.cache.find(r => r.name === "「White」")){
                message.member.roles.remove(White);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「White」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(White);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「White」!");
            }
        } else if(parts[1] == 'pink'){
            if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                message.member.roles.remove(Pink);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pink」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Pink);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pink」!");
            }
        } else if(parts[1] == 'red'){
            if(message.member.roles.cache.find(r => r.name === "「Red」")){
                message.member.roles.remove(Red);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Red」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Red);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Red」!");
            }
        } else if(parts[1] == 'orange'){
            if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                message.member.roles.remove(Orange);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Orange」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Orange);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Orange」!");
            }
        } else if(parts[1] == 'yellow'){
            if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                message.member.roles.remove(Yellow);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Yellow」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Yellow);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Yellow」!");
            }
        } else if(parts[1] == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Green」")){
                message.member.roles.remove(Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Green」!");
            }
        } else if(parts[1] == 'blue'){
            if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                message.member.roles.remove(Blue);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Blue」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Blue);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Blue」!");
            }
        } else if(parts[1] == 'indigo'){
            if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                message.member.roles.remove(Indigo);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Indigo」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Indigo);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Indigo」!");
            }
        } else if(parts[1] == 'violet'){
            if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                message.member.roles.remove(Violet);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Violet」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Violet);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Violet」!");
            }
        } else if(part1 == 'pastel'){
            if(part2 == 'red'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Red」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(Black);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(Gray);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(White);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(Pink);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(Indigo);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(Violet);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_Purple);
                    }
                    message.member.roles.add(Pastel_Red);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Red」!");
                }
            } else if(part2 == 'orange'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Orange」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(Black);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(Gray);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(White);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(Pink);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(Indigo);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(Violet);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_Purple);
                    }
                    message.member.roles.add(Pastel_Orange);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Orange」!");
                }
            } else if(part2 == 'yellow'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Yellow」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(Black);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(Gray);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(White);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(Pink);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(Indigo);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(Violet);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_Purple);
                    }
                    message.member.roles.add(Pastel_Yellow);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Yellow」!");
                }
            } else if(part2 == 'green'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Green」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(Black);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(Gray);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(White);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(Pink);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(Indigo);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(Violet);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_Purple);
                    }
                    message.member.roles.add(Pastel_Green);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Green」!");
                }
            } else if(part2 == 'blue'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Blue」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(Black);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(Gray);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(White);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(Pink);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(Indigo);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(Violet);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_Purple);
                    }
                    message.member.roles.add(Pastel_Blue);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Blue」!");
                }
            } else if(part2 == 'purple'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Purple」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(Black);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(Gray);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(White);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(Pink);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_Red);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(Orange);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_Yellow);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_Green);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(Blue);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(Indigo);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(Violet);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_Purple);
                    }
                    message.member.roles.add(Pastel_Purple);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Purple」!");
                }
            }
        } else if(part1 == 'yellow' && part2 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                message.member.roles.remove(Yellow_Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Yellow Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Yellow_Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Yellow Green」!");
            }
        } else if(part1 == 'blue' && part2 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                message.member.roles.remove(Blue_Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Light Blue Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Blue_Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Light Blue Green」!");
            }
        } else if(part1 == 'light' && part2 == 'blue' && part3 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                message.member.roles.remove(Light_Blue_Green);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Light Blue Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(Black);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(Gray);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(White);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(Pink);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_Red);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(Orange);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_Yellow);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_Green);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(Blue);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(Indigo);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(Violet);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_Purple);
                }
                message.member.roles.add(Light_Blue_Green);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Light Blue Green」!");
            }
        } else {
            message.reply('Sorry, either the color role you entered is not available or does not exist. Please try again.')
        }
    }
}