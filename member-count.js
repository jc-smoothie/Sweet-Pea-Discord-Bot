module.exports = (client) => {
    const channelId = '780098106071056384';

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId);
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`);
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild));
    client.on('guildMemberRemove', (member) => updateMembers(member.guild));

    const guild = client.guilds.cache.get('755814665111470142');
    updateMembers(guild);
}