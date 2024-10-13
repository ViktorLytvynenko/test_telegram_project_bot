import express from 'express';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

bot.start((ctx) => {
    const webAppButton = {
        text: 'Open Web App',
        web_app: { url: 'https://test-telegram-project-frontend.vercel.app/' }
    };

    const keyboard = {
        inline_keyboard: [[webAppButton]]
    };

    ctx.reply('Welcome! Click me!', {
        reply_markup: keyboard
    });
});

const webhookPath = '/telegram-webhook';
const webhookUrl = `https://test-telegram-project-frontend.vercel.app/${webhookPath}`;

bot.telegram.setWebhook(webhookUrl);
app.use(bot.webhookCallback(webhookPath));

app.get('/', (req, res) => {
    res.send('Telegram Bot Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});