const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permissions to use that command").then(msg => msg.delete(3000));

    var split = "||";

    if(!args[0] == null){
        try{

            var useMessage = new discord.RichEmbed()
            .setTitle("Use:")
            .setColor("00ee00")
            .setDescription(`?news Title ${split} Color ${split} Channel ${split} Message`);

            return message.channel.send(useMessage).then(msg => msg.delete(5000));
  
        } catch (error){
            message.channel.send("Something went wrong").then(msg => msg.delete(3000));
            console.log(`Someone issued the news command ${error}`);
        }
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