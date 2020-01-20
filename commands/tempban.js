const ms = require("ms")

module.exports.run = async(bot, message, args) =>{

    message.channel.bulkDelete("1");

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission to use that command").then(msg => msg.delete(5000));

    var user = message.guild.member(message.mentions.users.first());

    if(!user) return message.channel.send("**Error:** metion a user or the user you mentioned doesn't exist").then(msg => msg.delete(5000));

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't ban this person").then(msg => msg.delete(5000));

    var tempBanTime = args[1];

    if(!tempBanTime) return message.channel.send("Use: ?tempban User Time Reason").then(msg => msg.delete(10000));

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send("Give a reason!").then(msg => msg.delete(5000));

    var banChannel = message.guild.channels.find(c => c.name == "logs");
    if (!banChannel) return message.channel.send("You must have a channel named logs!");

    if(ms(tempBanTime)){

        await message.guild.member(user).ban(reason);

        var ban = new discord.RichEmbed
            .setDescription("tempban")
            .setColor("#ee0000")
            .addField("banned user:", user)
            .addField("banned by:", message.author)
            .addField("Reason", reason)
            .addField("banned for:", tempBanTime);

        banChannel.send(ban);

        setTimeout(function(){

            message.guild.unban(user.id);

            var unBan = new discord.RichEmbed
            .setTitle("tempban")
            .setColor("#ee0000")
            .setDescription(`${user} is unbanned`);

            banChannel.send(unBan);

        }, ms(tempBanTime));

    } else{
        return message.channel.send("Give a time!");
    }

}

module.exports.help = {
    name: "tempban"
}