const { GuildMember } = require('discord.js');

module.exports = {
    name: 'stop',
    description: 'Stops all songs, and leaves current channel.',
    async execute(interaction, player) {
        if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
            return void interaction.reply({
                content: 'You are not in a voice channel!',
                ephemeral: false,
            });
        }

        if (
            interaction.guild.me.voice.channelId &&
            interaction.member.voice.channelId !== interaction.guild.me.voice.channelId
        ) {
            return void interaction.reply({
                content: 'You are not in my voice channel!',
                ephemeral: false,
            });
        }

        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing)
            return void interaction.followUp({
                content: '❌ | No music is being played!',
            });
        queue.destroy();
        return void interaction.followUp({ content: '🛑 | Stopped the player!' });
    },
};