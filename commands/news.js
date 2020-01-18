const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permissions to use that command").then(msg => msg.delete(3000));

    var split = "||";

    if(!args[0] == null){
        
        return message.channel.send(`Use: !news Title ${split} Color ${split} Channel ${split} Message`).then(msg => msg.delete(5000));

    }

    try{
        var newsMessage = args.join(" ");

        var newsChannel = message.guild.channels.find(`name`, "news");

        var newsEmbed = new discord.RichEmbed()
            .setDescription("News message")
            .setColor("#21fff0")
            .addField("Message author:", message.author)
            .addField("Message:", newsMessage);
       
        newsChannel.send(newsEmbed);

        console.log(`${newsMessage} has send into the channel news`);

    } catch (error){
        message.channel.send("Something went wrong").then(msg => msg.delete(3000));
        console.log(`Someone issued the news command ${error}`);
    }

}

module.exports.help = {
    name: "news"
}