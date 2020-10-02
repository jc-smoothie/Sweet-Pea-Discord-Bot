module.exports = {
    name: 'sortthecourt',
    description: "this is the sourt the court game!",
    execute(message, args){
        //message.channel.send("");
        message.channel.send("======================================== \n .....................................SORT THE COURT..................................... \n <VERSION 1.2.4> \n - NEW CHARACTERS! \n       Dragon, Black Smith, Skelly, Yarno, \n       Button Boy, Sdvisor Pia, \n       King Andromedus, Queen Chanterelle, \n       Queen Cerith, Advisor Pontus, \n       and Advisor Agaric \n - Added achievements! \n - More options with  Royal Advisor \n - True ending: Council of Crowns \n ======================================== \n  \n Are you a king or queen?");
        const {Client, MessageEmbed} = require('discord.js');
        const client = new Client();
        
        let i = 0
        while(i<1){
            client.on('message', message => {
                if(message.content.toLowerCase() === 'king'){
                    const ruler = "king";
                    i++
                } else if(message.content.toLowerCase() === 'queen'){
                    const ruler = "queen";
                    i++
                }
            });
        }

        //message.channel.send("ruler");
        message.author.send("Hey there " + message.author + "!");
    }
}