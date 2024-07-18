const { Client, GatewayIntentBits, Events, Collection, MessageActionRow, MessageSelectMenu } = require("discord.js");
const { readdirSync } = require("fs");
const path = require('path');
const moment = require("moment");
const http = require('http');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const config = require("./settings/config.js");

const client = new Client({ intents: Object.values(GatewayIntentBits) });
const rest = new REST({ version: "10" }).setToken(config.bot.token);

client.commands = new Collection();
client.slashcommands = new Collection();
client.commandaliases = new Collection();

const log = (message) => console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${message}`);

const loadCommands = async () => {
    const slashcommands = [];
    const chalk = (await import('chalk')).default;
    readdirSync("./commands").forEach(file => {
        const command = require(`./commands/${file}`);
        if (command?.data) {
            slashcommands.push(command.data.toJSON());
            client.slashcommands.set(command.data.name, command);
            log(chalk.cyan(`[+] ${command.data.name} Yüklendi`));
        } else {
            console.error(chalk.red(`[-] ${file} dosyasında 'data' özelliği eksik!`));
        }
    });
    return slashcommands;
};

const loadEvents = async () => {
    readdirSync("./events").forEach(file => {
        const event = require(`./events/${file}`);
        const handler = (...args) => event.execute(...args);
        event.once ? client.once(event.name, handler) : client.on(event.name, handler);
    });
};

client.once(Events.ClientReady, async () => {
    const chalk = (await import('chalk')).default; 
    try {
        await rest.put(Routes.applicationCommands(client.user.id), { body: await loadCommands() });
        log(chalk.green(`${client.user.username} Aktif Edildi!`));
    } catch (error) {
        console.error(error);
    }
});



http.createServer((req, res) => {
    res.write("Siber Kalp kanalına abone ol");
    res.end();
}).listen(8080);

loadEvents();
client.login(config.bot.token);
