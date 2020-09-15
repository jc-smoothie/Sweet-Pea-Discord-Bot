module.exports = {
    name: 'lore',
    description: "sends the google doc link!",
    execute(message, args){
        message.channel.send('https://docs.google.com/document/d/12oTZodesdaILTU5i8yCPgKJABsB1PnhsV1hSIlNovaY/edit?usp=sharing');
    }
}
