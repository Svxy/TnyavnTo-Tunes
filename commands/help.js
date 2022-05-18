const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'Lists all available commands for TnyavnTo.',
    execute(interaction) {
        let str = '';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            str += `\nCommand:\n${command.name}\nDescription:\n${command.description}\n`;
        }

        return void interaction.reply({
            content: str,
            ephemeral: true,
        });
    },
};