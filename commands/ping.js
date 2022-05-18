const discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Get TnyavnTo Tune's server/api ping!",
    options: null,
    async execute(interaction, client) {

        let start = Date.now();

        let embed1 = new discord.MessageEmbed()
            .setDescription("Looks like the bot is slow.")
            .setColor("RANDOM");

        await interaction.reply({
            embeds: [embed1]
        });
        let end = Date.now();

        let embed = new discord.MessageEmbed()
            .setTitle("Here is TnyavnTo's ping:")
            .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
            .addField("Your Message Latency", `${end - start}ms`, true)
            .setColor("BLUE");

        interaction.editReply({ embeds: [embed] }).catch((e) => interaction.followUp(e));
    },
};