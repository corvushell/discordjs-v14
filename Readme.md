https://discord.gg/corleonedev
# Discord Bot
Bu, `discord.js` ve Node.js kullanılarak oluşturulmuş, komutları ve olayları dinamik olarak yükleme ve basit bir mesajla yanıt veren bir HTTP sunucusu gibi özelliklere sahip bir Discord botudur. Yeni başlayanlar için kullanıcı dostudur ve Youtube da öğretici videosu yayınlanmıştır. Siber Kalp kanalından öğreticilere ulaşabilirsiniz.

## İçindekiler
- [Kurulum](#kurulum)
- [Yapılandırma](#yapılandırma)
- [Botu Çalıştırmak](#running-the-bot)
- [Proje Yapısı](#project-structure)
## Kurulum
Başlamak için depoyu klonlayın ve bağımlılıkları yükleyin:
```bash
git clone https://github.com/corvushell/discordjs-v14
cd discordjs-v14
npm install
```
## Yapılandırma
Bot yapılandırması settings/config.js dosyasında saklanır. Bu dosya, bot token'ınızı ve diğer gerekli ayarları içeren bir nesneyi dışa aktarmalıdır. settings klasöründeki config.js dosyasına gelip tokeninizi 3. satıra yerleştirmeniz lazım.
## Botu çalıştırmak
`node corvus.js` yazarak botu başlatıp komutları yükleyebilirsiniz.

Örnek komut:
```js
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("örnek")
        .setDescription("örnek bir komut"),

    async run(client, interaction) {
        await interaction.reply('Selam siber kalp!');
    },
};
```
https://discord.gg/corleonedev
