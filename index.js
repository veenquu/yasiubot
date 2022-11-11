const { Client, Intents, Collection, command } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const BOT_TOKEN = "MTA0MDcyMzQ5NDYwMzg2MjE2Nw.GtajN3.9bfrFWEIKwzXvQOEV2PSk70gIxkQtG2rZaYI5A"
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