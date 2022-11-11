const { Client, Intents, Collection, command } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const PREFIX = "!!"



bot.on("ready", function() {
    console.log('dupa');
    bot.user.setActivity('bladee - be nice to me', { type: 'LISTENING' });
});

bot.commands = new Collection();

bot.commands.set(command.name, command); {
    if (message.content.includes('mad')) {
        message.channel.send('hej');
    }

}

bot.login(BOT_TOKEN);
