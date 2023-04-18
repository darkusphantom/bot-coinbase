const { Telegraf } = require("telegraf");

// Import the dotenv package to load environment variables from an .env file.
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Creates a new Telegraf instance using the bot access token
const bot = new Telegraf(process.env.BOT_TOKEN);

// Defines a handler for the /start command
bot.start((ctx) => ctx.reply("Welcome to the Bot, human"));

// Defines a handler for the /help command
bot.help((ctx) => ctx.reply("Send me a sticker"));

//Define a handler for the event "sticker".
bot.on("sticker", (ctx) => ctx.reply("👍"));

// Defines a handler for the message "hi".
bot.hears("hi", (ctx) => ctx.reply("Hey there"));

// Defines a handler for the setting.
bot.settings((ctx) => ctx.reply("Settings"));

bot.command(["send"], (ctx) => ctx.reply("You send something"));

// Start the bot
bot.launch().then(() => {
  console.log("Bot started");
});
