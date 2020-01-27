const discord = require("discord.js");

const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    message.guild.member(message.author).kick("You wanted to leave the server");

}

module.exports.help = {
    name: "help"
}