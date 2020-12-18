/*module.exports = {
    name: 'color',
    description: "this assigns color roles!",
    execute(message, args){
        //Role Variables
        const Asian_Invasion = '637447111725809664';
        const jc_smoothie_suppoet_server = '755814665111470142';
        const nico_nico_nii = '771147395585146910';
        const B = '764619306553311253';
        const WHS_Anime_Club = '361609091602317312';
        var hasColorRoles = 0

        function enableColorRoles(){
            hasColorRoles = 1;
        }

        function disableColorRoles(){
            hasColorRoles = 0;
        }

        function Asian_Invasion_roles(){
            Black = '771568348642672670';
            Gray = '771568601693159454';
            White = '771568680416837642';
            Pink = '771568756672692266';
            Red = '771568870732857387';
            Pastel_Red = '771568989163225120';
            Pastel_Orange = '771569098341482497';
            Orange = '771569241861652480';
            Yellow = '771569332803076101';
            Pastel_Yellow = '771569409910374402';
            Yellow_Green = '771569562620526592';
            Green = '771569741596327946';
            Pastel_Green = '771569860014374913';
            Light_Blue_Green = '771570030109917214';
            Blue_Green = '771570265511428129';
            Pastel_Blue = '771570337853997067';
            Blue = '771570340559585290';
            Indigo = '771570666041769984';
            Violet = '771570721524154389';
            Pastel_Purple = '771570764938739743';
        }

        function jc_smoothie_support_server_roles(){
            Black = '772073023439634442';
            Gray = '772073027159457792';
            White = '772073032692793344';
            Pink = '772073029663588413';
            Red = '772073035153801256';
            Pastel_Red = '772073037641547776';
            Pastel_Orange = '772073040154460160';
            Orange = '772073042436292618';
            Yellow = '772073044885110785';
            Pastel_Yellow = '772073047376789504';
            Yellow_Green = '772073049880526848';
            Green = '772073052212297728';
            Pastel_Green = '772073054481940481';
            Light_Blue_Green = '772073056729694220';
            Blue_Green = '772073059271966730';
            Pastel_Blue = '772073061746737162';
            Blue = '772073063931969568';
            Indigo = '772073066518806528';
            Violet = '772073068822265897';
            Pastel_Purple = '772073071137652756';
        }

        function nico_nico_nii_roles(){
            Black = '771748675469705276';
            Gray = '771756390163152906';
            White = '771756488690892821';
            Pink = '771756546895511563';
            Red = '771756615849476176';
            Pastel_Red = '771756928329711617';
            Pastel_Orange = '771757019199307807';
            Orange = '771757092716806217';
            Yellow = '771757133100351528';
            Pastel_Yellow = '771757134597455924';
            Yellow_Green = '771757161989537832';
            Green = '771757259683397653';
            Pastel_Green = '771757362796429373';
            Light_Blue_Green = '771757423262302208';
            Blue_Green = '771757490802393140';
            Pastel_Blue = '771758468851695617';
            Blue = '771758472202289222';
            Indigo = '771758474819534858';
            Violet = '771758477541638144';
            Pastel_Purple = '771758480340025364';
        }

        function B_roles(){
            Black = '771785009765417033';
            Gray = '771785244428468234';
            White = '771785249788657684';
            Pink = '771785254426902579';
            Red = '771785259191894016';
            Pastel_Red = '771785263415689246';
            Pastel_Orange = '771785267962314782';
            Orange = '771785272445894718';
            Yellow = '771785276501917766';
            Pastel_Yellow = '771785280653885476';
            Yellow_Green = '771785284781211688';
            Green = '771785289114976316';
            Pastel_Green = '771785293296173096';
            Light_Blue_Green = '771785297158864926';
            Blue_Green = '771785300845920307';
            Pastel_Blue = '771785304713330699';
            Blue = '771785308345204736';
            Indigo = '771785311675613235';
            Violet = '771785315911729182';
            Pastel_Purple = '771785319812038696';
        }

        function WHS_Anime_Club_roles(){
            Black = '771798625940537374';
            Gray = '771798630679445504';
            White = '771798633997271091';
            Pink = '771798638086324255';
            Red = '771798644043022356';
            Pastel_Red = '771798641316593735';
            Pastel_Orange = '771798646828040202';
            Orange = '771798653606166570';
            Yellow = '771798657481179188';
            Pastel_Yellow = '771798660748410900';
            Yellow_Green = '771798663001145405';
            Green = '771798669229555733';
            Pastel_Green = '771798665915400295';
            Light_Blue_Green = '771798675956432926';
            Blue_Green = '771798672555638804';
            Pastel_Blue = '771798685511450654';
            Blue = '771798678825861190';
            Indigo = '771798682340818975';
            Violet = '771798687898271815';
            Pastel_Purple = '771798690604122153';
        }

        //Template
        //function Asian_Invasion_roles(){
            //Black = '';
            //Gray = '';
            //White = '';
            //Pink = '';
            //Red = '';
            //Pastel_Red = '';
            //Pastel_Orange = '';
            //Orange = '';
            //Yellow = '';
            //Pastel_Yellow = '';
            //Yellow_Green = '';
            //Green = '';
            //Pastel_Green = '';
            //Light_Blue_Green = '';
            //Blue_Green = '';
            //Pastel_Blue = '';
            //Blue = '';
            //Indigo = '';
            //Violet = '';
            //Pastel_Purple = '';
        //}
        
        if(message.channel.guild.id == Asian_Invasion){
            enableColorRoles()
            Asian_Invasion_roles();
        } else if(message.channel.guild.id == jc_smoothie_suppoet_server){
            enableColorRoles()
            jc_smoothie_support_server_roles();
        } else if(message.channel.guild.id == nico_nico_nii){
            enableColorRoles()
            nico_nico_nii_roles();
        } else if(message.channel.guild.id == B){
            enableColorRoles()
            B_roles();
        } else if(message.channel.guild.id == WHS_Anime_Club){
            enableColorRoles()
            WHS_Anime_Club_roles();
        }
        
        const parts = message.content.split(' ');
        const part1 = parts[1];
        const part2 = parts[2];
        const part3 = parts[3];

        if(hasColorRoles == 1){
            disableColorRoles()
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
            } else if(!part1){
                message.reply("You haven't stated a color! To see the collection of colors available, type `+colors` then hit enter, before trying again.")
            } else {
                message.reply("Sorry, either the color role you entered is not available or does not exist. Also check that the entire message is lowercase, otherwise it can't be read properly. Please try again.")
            }
        } else{
            message.reply("Unfortunately my creator, jc smoothie, hasn't added and configured color roles on this server. For me to be able to assign color roles to others, this action is required. This makes these color roles only available on certain servers at the moment.");
        }
    }
}*/

module.exports = {
    name: 'color',
    description: "this assigns color roles!",
    execute(message, args){
        var Black = message.member.guild.roles.cache.find(r => r.name === "「Black」");
        var BlackID = Black.id;

        var Gray = message.member.guild.roles.cache.find(r => r.name === "「Gray」");
        var GrayID = Gray.id;

        var White = message.member.guild.roles.cache.find(r => r.name === "「White」");
        var WhiteID = White.id;

        var Pink = message.member.guild.roles.cache.find(r => r.name === "「Pink」");
        var PinkID = Pink.id;

        var Red = message.member.guild.roles.cache.find(r => r.name === "「Red」");
        var RedID = Red.id;

        var Pastel_Red = message.member.guild.roles.cache.find(r => r.name === "「Pastel Red」");
        var Pastel_RedID = Pastel_Red.id;

        var Pastel_Orange = message.member.guild.roles.cache.find(r => r.name === "「Pastel Orange」");
        var Pastel_OrangeID = Pastel_Orange.id;

        var Orange = message.member.guild.roles.cache.find(r => r.name === "「Orange」");
        var OrangeID = Orange.id;

        var Yellow = message.member.guild.roles.cache.find(r => r.name === "「Yellow」");
        var YellowID = Yellow.id;

        var Pastel_Yellow = message.member.guild.roles.cache.find(r => r.name === "「Pastel Yellow」");
        var Pastel_YellowID = Pastel_Yellow.id;

        var Yellow_Green = message.member.guild.roles.cache.find(r => r.name === "「Yellow Green」");
        var Yellow_GreenID = Yellow_Green.id;

        var Green = message.member.guild.roles.cache.find(r => r.name === "「Green」");
        var GreenID = Green.id;

        var Pastel_Green = message.member.guild.roles.cache.find(r => r.name === "「Pastel Green」");
        var Pastel_GreenID = Pastel_Green.id;

        var Light_Blue_Green = message.member.guild.roles.cache.find(r => r.name === "「Light Blue Green」");
        var Light_Blue_GreenID = Light_Blue_Green.id;

        var Blue_Green = message.member.guild.roles.cache.find(r => r.name === "「Blue Green」");
        var Blue_GreenID = Blue_Green.id;

        var Pastel_Blue = message.member.guild.roles.cache.find(r => r.name === "「Pastel Blue」");
        var Pastel_BlueID = Pastel_Blue.id;

        var Blue = message.member.guild.roles.cache.find(r => r.name === "「Blue」");
        var BlueID = Blue.id;

        var Indigo = message.member.guild.roles.cache.find(r => r.name === "「Indigo」");
        var IndigoID = Indigo.id;

        var Violet = message.member.guild.roles.cache.find(r => r.name === "「Violet」");
        var VioletID = Violet.id;

        var Pastel_Purple = message.member.guild.roles.cache.find(r => r.name === "「Pastel Purple」");
        var Pastel_PurpleID = Pastel_Purple.id;


        const parts = message.content.split(' ');
        const part1 = parts[1];
        const part2 = parts[2];
        const part3 = parts[3];

        if(part1 == 'black'){
            if(message.member.roles.cache.find(r => r.name === "「Black」")){
                message.member.roles.remove(BlackID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Black」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(BlackID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Black」!");
            }
        } else if(part1 == 'gray'){
            if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                message.member.roles.remove(GrayID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Gray」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(GrayID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Gray」!");
            }
        } else if(part1 == 'white'){
            if(message.member.roles.cache.find(r => r.name === "「White」")){
                message.member.roles.remove(WhiteID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「White」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(WhiteID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「White」!");
            }
        } else if(part1 == 'pink'){
            if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                message.member.roles.remove(PinkID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pink」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(PinkID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pink」!");
            }
        } else if(part1 == 'red'){
            if(message.member.roles.cache.find(r => r.name === "「Red」")){
                message.member.roles.remove(RedID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Red」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(RedID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Red」!");
            }
        } else if(part1 == 'orange'){
            if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                message.member.roles.remove(OrangeID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Orange」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(OrangeID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Orange」!");
            }
        } else if(part1 == 'yellow'){
            if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                message.member.roles.remove(YellowID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Yellow」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(YellowID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Yellow」!");
            }
        } else if(part1 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Green」")){
                message.member.roles.remove(GreenID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(GreenID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Green」!");
            }
        } else if(part1 == 'blue'){
            if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                message.member.roles.remove(BlueID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Blue」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(BlueID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Blue」!");
            }
        } else if(part1 == 'indigo'){
            if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                message.member.roles.remove(IndigoID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Indigo」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(IndigoID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Indigo」!");
            }
        } else if(part1 == 'violet'){
            if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                message.member.roles.remove(VioletID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Violet」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(VioletID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Violet」!");
            }
        } else if(part1 == 'pastel'){
            if(part2 == 'red'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Red」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(BlackID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(GrayID);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(WhiteID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(PinkID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(IndigoID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(VioletID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_PurpleID);
                    }
                    message.member.roles.add(Pastel_RedID);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Red」!");
                }
            } else if(part2 == 'orange'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Orange」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(BlackID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(GrayID);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(WhiteID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(PinkID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(IndigoID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(VioletID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_PurpleID);
                    }
                    message.member.roles.add(Pastel_OrangeID);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Orange」!");
                }
            } else if(part2 == 'yellow'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Yellow」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(BlackID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(GrayID);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(WhiteID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(PinkID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(IndigoID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(VioletID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_PurpleID);
                    }
                    message.member.roles.add(Pastel_YellowID);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Yellow」!");
                }
            } else if(part2 == 'green'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Green」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(BlackID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(GrayID);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(WhiteID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(PinkID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(IndigoID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(VioletID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_PurpleID);
                    }
                    message.member.roles.add(Pastel_GreenID);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Green」!");
                }
            } else if(part2 == 'blue'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Blue」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(BlackID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(GrayID);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(WhiteID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(PinkID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(IndigoID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(VioletID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_PurpleID);
                    }
                    message.member.roles.add(Pastel_BlueID);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Blue」!");
                }
            } else if(part2 == 'purple'){
                if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Pastel Purple」.");
                } else{
                    if(message.member.roles.cache.find(r => r.name === "「Black」")){
                        message.member.roles.remove(BlackID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                        message.member.roles.remove(GrayID);
                    } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                        message.member.roles.remove(WhiteID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                        message.member.roles.remove(PinkID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                        message.member.roles.remove(RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                        message.member.roles.remove(Pastel_RedID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                        message.member.roles.remove(Pastel_OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                        message.member.roles.remove(OrangeID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                        message.member.roles.remove(YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                        message.member.roles.remove(Pastel_YellowID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                        message.member.roles.remove(Yellow_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                        message.member.roles.remove(GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                        message.member.roles.remove(Pastel_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                        message.member.roles.remove(Light_Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                        message.member.roles.remove(Blue_GreenID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                        message.member.roles.remove(Pastel_BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                        message.member.roles.remove(BlueID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                        message.member.roles.remove(IndigoID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                        message.member.roles.remove(VioletID);
                    } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                        message.member.roles.remove(Pastel_PurpleID);
                    }
                    message.member.roles.add(Pastel_PurpleID);
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Pastel Purple」!");
                }
            }
        } else if(part1 == 'yellow' && part2 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                message.member.roles.remove(Yellow_GreenID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Yellow Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(Yellow_GreenID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Yellow Green」!");
            }
        } else if(part1 == 'blue' && part2 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                message.member.roles.remove(Blue_GreenID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Light Blue Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(Blue_GreenID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Light Blue Green」!");
            }
        } else if(part1 == 'light' && part2 == 'blue' && part3 == 'green'){
            if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                message.member.roles.remove(Light_Blue_GreenID);
                message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Light Blue Green」.");
            } else{
                if(message.member.roles.cache.find(r => r.name === "「Black」")){
                    message.member.roles.remove(BlackID);
                } else if(message.member.roles.cache.find(r => r.name === "「Gray」")){
                    message.member.roles.remove(GrayID);
                } else if(message.member.roles.cache.find(r => r.name === "「White」")){
                    message.member.roles.remove(WhiteID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pink」")){
                    message.member.roles.remove(PinkID);
                } else if(message.member.roles.cache.find(r => r.name === "「Red」")){
                    message.member.roles.remove(RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Red」")){
                    message.member.roles.remove(Pastel_RedID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Orange」")){
                    message.member.roles.remove(Pastel_OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Orange」")){
                    message.member.roles.remove(OrangeID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow」")){
                    message.member.roles.remove(YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Yellow」")){
                    message.member.roles.remove(Pastel_YellowID);
                } else if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(Yellow_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Green」")){
                    message.member.roles.remove(GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Green」")){
                    message.member.roles.remove(Pastel_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Light Blue Green」")){
                    message.member.roles.remove(Light_Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(Blue_GreenID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Blue」")){
                    message.member.roles.remove(Pastel_BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Blue」")){
                    message.member.roles.remove(BlueID);
                } else if(message.member.roles.cache.find(r => r.name === "「Indigo」")){
                    message.member.roles.remove(IndigoID);
                } else if(message.member.roles.cache.find(r => r.name === "「Violet」")){
                    message.member.roles.remove(VioletID);
                } else if(message.member.roles.cache.find(r => r.name === "「Pastel Purple」")){
                    message.member.roles.remove(Pastel_PurpleID);
                }
                message.member.roles.add(Light_Blue_GreenID);
                message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Light Blue Green」!");
            }
        } else if(!part1){
            message.reply("You haven't stated a color! To see the collection of colors available, type `+colors` then hit enter, before trying again.")
        } else {
            message.reply("Sorry, either the color role you entered is not available or does not exist. Also check that the entire message is lowercase, otherwise it can't be read properly. Please try again.")
        }
    }
}