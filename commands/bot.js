const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setDescription("About this bot")
        .setColor("#29e53f")
        .setThumbnail(botIcon)
        .addField("Name of this bot:", "AllesServer English")
        .addField("Version:", "1.1")
        .addField("New features", "Added new commands! \n(type ?updatelog 1.1 for the whole updatelog of this version)")
        .addField("Bot created at", bot.user.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "bot"
}