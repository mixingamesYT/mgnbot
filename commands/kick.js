const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!kickUser) return message.channel.send("This user isn't found");

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you don't have the permissions to use that command").then(msg => msg.delete(3000));;

    if (kickUser.hasPermission("KICK_MEMBERS")) return message.reply("you don't have the permission to kick that user").then(msg => msg.delete(3000));;

    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor("#ee0000")
        .addField("Kicked user:", kickUser)
        .addField("Kicked by:", message.author)
        .addField("Reason", reason);

    var kickChannel = message.guild.channels.find(c => c.name == "logs");
    if (!kickChannel) return message.channel.send("You must have a channel named logs!");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;

}

module.exports.help = {
    name: "kick"
}