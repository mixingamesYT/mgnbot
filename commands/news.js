const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    message.channel.bulkDelete("1");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission to use that command!").then(msg => msg.delete(5000));;

    var splitser = "//"

    if(args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Use")
            .setColor("00ee00")
            .setDescription(`Make a news message by using: \n?news Title ${splitser} Color ${splitser} Channel ${splitser} Message`);

        return message.channel.send(useMessage).then(msg => msg.delete(10000));

    }

    args = args.join(" ").split(splitser);

    if(args[1] == undefined) args[1] = "#eeeeee";
    if(args[2] == undefined) args[2] = "news";

    var options = {

        titel: args[0] || "News message:",
        kleur: args[1].trim(),
        kanaal: args[2].trim(),
        bericht: args[3] || "No news message"

    }

    var writer = message.author;

    var newsMessage = new discord.RichEmbed()
        .setTitle(options.titel)
        .setColor(options.kleur)
        .setDescription(`Message by ${writer} \n\n${options.bericht} \n`)
        .setTimestamp();

    var newsChannel = message.guild.channels.find(c => c.name == options.kanaal);
    if(!newsChannel) return message.channel.send("Didn't find the channel").then(msg => msg.delete(5000));

    newsChannel.send(newsMessage);

}

module.exports.help = {
    name: "news"
}