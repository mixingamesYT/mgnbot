const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("**About this bot**")
        .setColor("#29e53f")
        .setThumbnail(botIcon)
        .addField("Name of this bot:", "MixinNetwork Bot")
        .addField("Version:", "1.1.2")
        .addField("New features", "Added a tampban command! \n(type ?updatelog 1.1.2 for the whole updatelog of this version)")
        .addField("Bot created at", bot.user.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "bot"
}