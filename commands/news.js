const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permissions to use that command").then(msg => msg.delete(3000));

    var split = "||";

    if(!args[0] == null){
        
        try{
            var useMessage = new discord.RichEmbed
                .setTitle("Use:")
                .setColor("00ee00")
                .setDescription(`!news Title ${split} Color ${split} Channel ${split} Message`);

            return message.channel.send(useMessage).then(msg => msg.delete(5000));
        } catch (error){
            console.log(error);
        }

    }

}

module.exports.help = {
    name: "news"
}