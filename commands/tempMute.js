const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have the permissions to use that command").then(msg => msg.delete(5000));

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("**Error:** metion a user or the user you mentioned doesn't exist").then(msg => msg.delete(5000));

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't mute that user").then(msg => msg.delete(5000));

    var muteRole = message.guild.roles.find("name", "muted");

    if(!muteRole) return message.channel.send("You must have a role called muted").then(msg => msg.delete(5000));

    var muteTime = args[1];

    if(!muteTime) return message.channel.send("Use: ?tempmute [user] [time]").then(msg => msg.delete(5000));

    await (user.addRole(muteRole.id));

    var logs = message.guild.channels.find(c => c.name == "logs");
    if (!logs) return message.channel.send("You must have a channel named logs!");

    var mute = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#ee0000")
        .addField("muted user:", user)
        .addField("muted by:", message.author)
        .addField("muted for", muteTime);

    logs.send(mute);

    setTimeout(function() {

        user.removeRole(muteRole.id);

        var unMute = new discord.RichEmbed()
        .setTitle("unmute")
        .setColor("#ee0000")
        .setDescription(`${user} is unmuted`);

    logs.send(unMute);

    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}