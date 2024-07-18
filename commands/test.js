const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("örnek")
        .setDescription("örnek bir komut"),

    async run(client, interaction) {
        await interaction.reply('Selam siber kalp!');
    },
};
