modules.exports = client => {
    const channelId = '775127852458180608' // welcome channel
    const targetChannelId = '775127852458180608' // tules and info

    client.on('guildMemberAdd', member => {
        console.log(member);

        const message = `Please welcome <@${member.id}> to the server! Please check out ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message)
    });
}