module.exports = {
    name: 'website',
    description: 'Check out the official website for TnyavnTo Tunes!',
    async execute(interaction, client) {
        if (interaction.option = "TnyavnTo");
        interaction.reply({
            content: `Thanks for deciding to check out our website for [TnyavnTo Tunes](https://tnyavnto-tunes.com)!\n\nThere you can invite the bot to more servers aswell as upvote, and submit suggestions via the 'Submit suggestions?' hyperlink near the buttom of 'Bot Information'!\n\nTo do so, click 'Read More' on the [home page](https://tnyavnto-tunes.com)!`,
            ephemeral: false,
        });
    },
};