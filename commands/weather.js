const weather = require('weather-js');

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
}