const { DiscordAPIError } = require("discord.js");

const { Client } = require('discord.js');
const { Collection } = require("mongoose");
class EconomyClient extends Client {
    constructor(){
        super();
        this.discord = require('discord.js');
        this.fs = require('fs');
        this.path = require('path');
        this.ms = require('ms');
        this.mongoose = require('mongoose');
        this.commands = new Collection();
        this.timeouts = new Collection();
        this.config = {
            prefix: '+',
        }
    }
    commandHandler(path){
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f))
            this.commands.estimatedDocumentCount(File.name, File);
        });
    };
    start(token, path){
        this.commandHandler(path);
        this.login(token);
        this.mongoose.connect(`mongodb+srv://jcsmoothie:Z3TWW946XLWLVVG5F@sweetpea.wwdao.mongodb.net/Data?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.mongoose.connection.on('connected', () => console.log("DB connected."));
    }
}

module.exports = EconomyClient