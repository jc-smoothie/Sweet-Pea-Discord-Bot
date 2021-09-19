module.exports = {
    name: 'color',
    description: "this assigns color roles!",
    execute(message, args){
        if(!message.member.guild.roles.cache.find(r => r.name === "「Black」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Black = message.member.guild.roles.cache.find(r => r.name === "「Black」");
        var BlackID = Black.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Gray」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Gray = message.member.guild.roles.cache.find(r => r.name === "「Gray」");
        var GrayID = Gray.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「White」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var White = message.member.guild.roles.cache.find(r => r.name === "「White」");
        var WhiteID = White.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pink」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pink = message.member.guild.roles.cache.find(r => r.name === "「Pink」");
        var PinkID = Pink.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Red」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Red = message.member.guild.roles.cache.find(r => r.name === "「Red」");
        var RedID = Red.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pastel Red」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pastel_Red = message.member.guild.roles.cache.find(r => r.name === "「Pastel Red」");
        var Pastel_RedID = Pastel_Red.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pastel Orange」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pastel_Orange = message.member.guild.roles.cache.find(r => r.name === "「Pastel Orange」");
        var Pastel_OrangeID = Pastel_Orange.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Orange」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Orange = message.member.guild.roles.cache.find(r => r.name === "「Orange」");
        var OrangeID = Orange.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Yellow」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Yellow = message.member.guild.roles.cache.find(r => r.name === "「Yellow」");
        var YellowID = Yellow.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pastel Yellow」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pastel_Yellow = message.member.guild.roles.cache.find(r => r.name === "「Pastel Yellow」");
        var Pastel_YellowID = Pastel_Yellow.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Yellow Green」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Yellow_Green = message.member.guild.roles.cache.find(r => r.name === "「Yellow Green」");
        var Yellow_GreenID = Yellow_Green.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Green」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Green = message.member.guild.roles.cache.find(r => r.name === "「Green」");
        var GreenID = Green.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pastel Green」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pastel_Green = message.member.guild.roles.cache.find(r => r.name === "「Pastel Green」");
        var Pastel_GreenID = Pastel_Green.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Light Blue Green」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Light_Blue_Green = message.member.guild.roles.cache.find(r => r.name === "「Light Blue Green」");
        var Light_Blue_GreenID = Light_Blue_Green.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Blue Green」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Blue_Green = message.member.guild.roles.cache.find(r => r.name === "「Blue Green」");
        var Blue_GreenID = Blue_Green.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pastel Blue」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pastel_Blue = message.member.guild.roles.cache.find(r => r.name === "「Pastel Blue」");
        var Pastel_BlueID = Pastel_Blue.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Blue」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Blue = message.member.guild.roles.cache.find(r => r.name === "「Blue」");
        var BlueID = Blue.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Indigo」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Indigo = message.member.guild.roles.cache.find(r => r.name === "「Indigo」");
        var IndigoID = Indigo.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Violet」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Violet = message.member.guild.roles.cache.find(r => r.name === "「Violet」");
        var VioletID = Violet.id;

        if(!message.member.guild.roles.cache.find(r => r.name === "「Pastel Purple」")){
            message.channel.send("The color role stated does not exist in this server. Type `+addcolors` to add in 20 new color roles if you have the manage roles permission.");
            return;
        }
        var Pastel_Purple = message.member.guild.roles.cache.find(r => r.name === "「Pastel Purple」");
        var Pastel_PurpleID = Pastel_Purple.id;

        const partsFormatted = message.content.toString().toLowerCase();
        const parts = partsFormatted.split(' ');
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
            if(part2 == 'green'){
                if(message.member.roles.cache.find(r => r.name === "「Yellow Green」")){
                    message.member.roles.remove(YellowGreenID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「YellowGreen」.");
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
            } else{
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
            if(part2 == 'green'){
                if(message.member.roles.cache.find(r => r.name === "「Blue Green」")){
                    message.member.roles.remove(BlueGreenID);
                    message.channel.send("❌ " + "<@" + message.author.id + ">" + ", You no longer have the role 「Blue Green」.");
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
                    message.channel.send("✅ " + "<@" + message.author.id + ">" + ", You now have the role 「Blue Green」!");
                }
            } else{
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
            message.reply("Sorry, either the color role you entered is not available or does not exist. Please try again.")
        }
    }
}