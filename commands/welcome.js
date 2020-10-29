module.exports = client => {
    const channelID = '691101347642212362';

    client.on('guildMemberAdd', (member) => {
        console.log(member);

        const message = `Please welcome <@${member.id}> to the server!`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    })
}