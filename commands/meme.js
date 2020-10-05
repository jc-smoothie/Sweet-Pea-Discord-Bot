const request = require("request")
const cheerio = require('cheerio')
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    description: "Meme",
    execute(message, args){

        function image(message){

            var options = {
                url: "https://www.google.com/",
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
                .setTitle("Memes!")
                .setImage(image)
                .setColor("0xC0C0C0")
                message.channel.send(embed)
        
            })
        }
        
        image(message);

    }

}
