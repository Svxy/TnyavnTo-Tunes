const { GuildMember } = require('discord.js');

module.exports = {
    name: 'shuffle',
    description: 'Shuffles through the queue.',
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
        try {
            queue.shuffle();
            trimString = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
            return void interaction.followUp({
                embeds: [{
                    title: 'Now Playing',
                    description: trimString(
                        `The Current song playing is 🎶 | **${queue.current.title}**! \n 🎶 | ${queue}! `,
                        4095,
                    ),
                }, ],
            });
        } catch (error) {
            console.log(error);
            return void interaction.followUp({
                content: '❌ | Something went wrong!',
            });
        }
    },
};