const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    return message.channel.send("Hello");

}

module.exports.help = {
    name: "hello"
}