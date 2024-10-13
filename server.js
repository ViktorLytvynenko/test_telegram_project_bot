import {Telegraf} from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();
const bot = new Telegraf(process.env.TOKEN);


bot.start((ctx) => {
    const webAppButton = {
        text: 'Open Web App',
        web_app: {url: 'https://test-telegram-project-frontend.vercel.app/'}
    };

    const keyboard = {
        inline_keyboard: [[webAppButton]]
    };

    ctx.reply("Welcome! Click me!", {
        reply_markup: keyboard
    });
});

bot.launch()
    .then(() => console.log('Bot is running...'))
    .catch(err => console.error('Failed to launch the bot:', err));