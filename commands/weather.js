/*const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "Checks a weather forecast",

    async run (client, message, args){
    weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
        if(error) return message.client.send(error);
        if(!args[0]) return message.channel.send("Please specify a location")
        
        if(result == undefined || result.length == 0) return message.channel.send('**Invalid** location');
        
        var current = result[0].current;
        var location = result[0].location;
        
        const weatherInfo = new Discord.MessageEmbed()
        .setDescription('**${current.skytext}**')
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezore', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Fahrenheit', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)
        
        message.channel.send(weatherInfo)
        })
    }
}*/

/*const Discord = require("discord.js");
const weather = require("weather-js");

exports.run = async (client, message, args) => {
    let city = args.join(" ");
    let degreetype = "C"; // You can change it to F. (fahrenheit.)

    await weather.find({search: city, degreeType: degreetype}, function(err, result) {
        if (!city) return message.channel.send("Please insert the city.");
        if (err || result === undefined || result.length === 0) return message.channel.send("Unknown city. Please try again.");

        let current = result[0].current;
        let location = result[0].location;

        const embed = new Discord.MessageEmbed()
        .setAuthor(current.observationpoint)
        .setDescription(`> ${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .setTimestamp()
        .setColor(0x7289DA)

        embed.addField("Latitude", location.lat, true)
        .addField("Longitude", location.long, true)
        .addField("Feels Like", `${current.feelslike}° Degrees`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Timezone", `GMT ${location.timezone}`, true)
        .addField("Temperature", `${current.temperature}° Degrees`, true)
        .addField("Observation Time", current.observationtime, true)

        return message.channel.send(embed);
    })
};

exports.help = {
    name: "weather",
    description: "Responds with weather information for a specific location.",
    usage: "weather <city/zipcode>",
    example: "weather San Fransisco"
};

exports.conf = {
    aliases: [],
    cooldown: 7.5
}*/