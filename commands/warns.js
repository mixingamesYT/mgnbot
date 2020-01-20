const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have the permissions to use that command").then(msg => msg.delete(5000));

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("**Error:** metion a user or the user you mentioned doesn't exist").then(msg => msg.delete(5000));

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't warn that user").then(msg => msg.delete(5000));

    var reason = args.join(" ").slice(22);

    if(!reason) return  message.channel.send("Error: you must give a reason!").then(msg => msg.delete(5000));

    if(!warns[user.id]) warns[user.id] = {
        warns:0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("warn")
        .setColor("#ee0000")
        .addField("Warned user:", user)
        .addField("Warned by:", message.author)
        .addField("Warn count:", warns[user.id].warns)
        .addField("Reason", reason);

    var warnChannel = message.guild.channels.find(c => c.name == "logs");
    if (!warnChannel) return message.channel.send("You must have a channel named logs!");

    warnChannel.send(warnEmbed);

    if(warns[user.id].warns == 3) {

        var warningEmbed = new discord.RichEmbed()
            .setDescription("WATCH OUT " + user)
            .setColor("ee0000")
            .addField("Message:", "At the next warn you will be banned");

        message.channel.send(warningEmbed);

    } else if(warns[user.id].warns == 4) {

        var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#ee0000")
        .addField("banned user:", user)
        .addField("banned by:", message.author)
        .addField("Reason", "4th warning");

        message.guild.member(user).ban("4th warning");

        warnChannel.send(ban);

    }

}

module.exports.help = {
    name: "warn"
}