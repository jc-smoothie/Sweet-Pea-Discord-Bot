const request = require("request")
const cheerio = require('cheerio')
const Discord = require('discord.js');

module.exports = {
    name: 'turtle',
    description: "Turtle",
    execute(message, args){

        function image(message){

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + "turtle",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
        
            request(options, function(error, response, responseBody) {
                if (error) {
                    return;
                }
        
                $ = cheerio.load(responseBody);
        
                var links = $(".image a.link");
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
                if (!urls.length) {
        
                    return;
                }
                const image = urls[Math.floor(Math.random() * urls.length)]
                const embed = new Discord.MessageEmbed()
                .setTitle("Turtles!")
                .setImage(image)
                .setColor("0xC0C0C0")
                message.channel.send(embed)
        
            })
        }
        
        image(message);

    }

}