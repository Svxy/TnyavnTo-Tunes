const fs = require('fs');
const Discord = require('discord.js');
const Client = require('./client/Client');
const config = require('./config.json');
const { Player } = require('discord-player');

const client = new Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// UNCOMMENT TO DISPLAY ALL COMMANDS IN LOG FOR DEBUGGING

//console.log(client.commands);

const player = new Player(client);

player.on('error', (queue, error) => {
    console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`▶ | Started playing: **${track.title}** in **${queue.connection.channel.name}**!`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`🎶 | Track **${track.title}** queued!`);
});

player.on('botDisconnect', queue => {
    queue.metadata.send('❌ | I was manually disconnected from the voice channel, clearing queue!');
});

player.on('channelEmpty', queue => {
    queue.metadata.send('❌ | Nobody is in the voice channel, leaving...');
});

player.on('queueEnd', queue => {
    queue.metadata.send('✅ | Queue finished! Leaving channel.');
});

client.once('ready', async() => {
    console.log('\n\nReady!\n');
});

client.on('ready', function() {
    var today = new Date();
    var date = today.getMonth() + '/' + (today.getDate() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = `${date} ${time}`;
    console.log(dateTime)
});

client.on('ready', function() {
    console.log(`\n\nin ${client.guilds.cache.size} server(s)\n\nwith a total of ${client.users.cache.size} User(s).\n\nALSO; There are ${client.channels.cache.size} total channel(s) in said servers.\n\nLOGGING:\n\n`);
});

client.on("message", function(message) {
    console.log(`message sent -> ${message}`);
});

exports.help = {
    name: "serverinfo"
}

client.on('ready', function() {
    client.user.setActivity(config.activity, { type: config.activityType });
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('messageCreate', async message => {
    if (message.author.bot || !message.guild) return;

    if (message.content === '!deploy') {
        const newLocal = message.guild.commands;
        await newLocal
            .set(client.commands)
            .then(() => {
                message.reply('Deployed!\n\nhttps://tnyavnto-tunes.com');
            })
            .catch(err => {
                message.reply('Could not deploy commands!!\n\nPlease wait up to an hour or consult the bot owner\n\ntnyavntoツ゚#5090');
                console.error(err);
            });
    }
});

client.on('interactionCreate', async interaction => {
    const command = client.commands.get(interaction.commandName.toLowerCase());
    try {
        if (interaction.commandName == 'ban' || interaction.commandName == 'userinfo' || interaction.commandName == 'ping' || interaction.commandName == 'kill') {
            command.execute(interaction, client);
        } else {
            command.execute(interaction, player);
        }
    } catch (error) {
        console.error(error);
    }
});

client.login(config.token);