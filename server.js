import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

console.log("TOKEN:", process.env.BOT_TOKEN);

// Создаём бота
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

console.log("Bot is running...");

// Обработчик сообщений
bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Запустить игру 🚀", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Играть",
            web_app: { url: "https://rocketcrush.vercel.app" } // <-- твой URL игры
          }
        ]
      ]
    }
  });
});
