const { GuildMember } = require('discord.js');

module.exports = {
    name: 'remove',
    description: 'Removes a song from the queue.',
    options: [{
        name: 'number',
        type: 4, // 'INTEGER' Type
        description: 'The queue number you want to remove',
        required: true,
    }, ],
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
        if (!queue || !queue.playing) return void interaction.followUp({ content: '❌ | No music is being played!' });
        const number = interaction.options.get('number').value - 1;
        if (number > queue.tracks.length)
            return void interaction.followUp({ content: '❌ | Track number greater than queue depth!' });
        const removedTrack = queue.remove(number);
        return void interaction.followUp({
            content: removedTrack ? `✅ | Removed **${removedTrack}**!` : '❌ | Something went wrong!',
        });
    },
};