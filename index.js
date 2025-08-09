// index.js
require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// قائمة أسماء أنميات
const animes = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "Demon Slayer",
    "Death Note",
    "My Hero Academia",
    "Jujutsu Kaisen",
    "Fullmetal Alchemist: Brotherhood",
    "Bleach",
    "Tokyo Ghoul",
    "Hunter x Hunter",
    "Black Clover",
    "Fairy Tail",
    "Chainsaw Man",
    "Blue Lock"
];

const channelId = "1395418342315262073";

client.once(Events.ClientReady, () => {
    console.log(`✅ Logged in as ${client.user.tag}`);

    const channel = client.channels.cache.get(channelId);
    if (!channel) {
        console.error("❌ لم أجد الروم! تأكد أن البوت موجود فيه وأنه يملك صلاحية إرسال الرسائل.");
        return;
    }

    // إرسال اسم أنمي عشوائي كل 30 ثانية
    setInterval(() => {
        const anime = animes[Math.floor(Math.random() * animes.length)];
        channel.send(`🎯 أنمي عشوائي: **${anime}**`);
    }, 30000);
});

client.login(process.env.TOKEN);MTM5MTU2NDM3NTk2NTQzMzkwNw.GSOhnf.1iM6_qZxbR7ZQGAjKg5yr6q4-WZ48zrJhbQefo
