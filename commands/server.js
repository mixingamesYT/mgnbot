const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    var serverIcon = message.guild.iconURL

    var serverEmbed = new discord.RichEmbed()
        .setDescription("About this server")
        .setColor("#29e53f")
        .setThumbnail(serverIcon)
        .addField("Name of this server:", message.guild.name)
        .addField("Version of AllesServer:", "beta 0.3")
        .addField("Server maked at:", message.guild.createdAt)
        .addField("You have been joined at:", message.member.joinedAt)
        .addField("Membercount:", message.guild.memberCount);

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "server"
}