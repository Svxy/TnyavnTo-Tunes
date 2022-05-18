module.exports = {
    name: 'upvote',
    description: 'Upvote TnyavnTo Tunes, either on TopGG or DBL!',
    async execute(interaction, client) {
        interaction.reply({
            content: `Hello!\nWe at S&A would greatly appreciate you upvoting our bot!\n\nTnyavnTo Tunes is currently only on [TopGG](https://top.gg/bot/955741017624162334) and [Discord Bot List (DBL)](https://discordbotlist.com/bots/tnyavntos-tunes)`,
            ephemeral: false,
        });
    },
};