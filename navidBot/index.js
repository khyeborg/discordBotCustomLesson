// Import our library and custom files
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

// Run handleMessage() whenever a new message sent
client.on("message", handleMessage);

// Replace with your own initials!
const prefix = "!NM";

function handleMessage(message) {
    // Check if a bot sent the message
    if (message.author.bot == true) return;
    // Check that message starts with our prefix
    if (message.content.startsWith(prefix) == false) return;

    // Add your own code HERE!

    let args = message.content.split(' '); // "!NM ping" --> ["!NM", "ping"]
    
    if (args[1] == "ping") {
        message.channel.send("pong!");
    }
}
client.login(config.token);