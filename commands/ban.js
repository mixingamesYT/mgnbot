const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("This user isn't found");

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you don't have the permissions to use that command").then(msg => msg.delete(3000));;

    if (banUser.hasPermission("BAN_MEMBERS")) return message.reply("you don't have the permission to ban thet user").then(msg => msg.delete(3000));;

    var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#ee0000")
        .addField("banned user:", banUser)
        .addField("banned by:", message.author)
        .addField("Reason", reason);

    var banChannel = message.guild.channels.find(`name`, "logs");
    if (!banChannel) return message.channel.send("You must have a channel named logs!");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban"
}