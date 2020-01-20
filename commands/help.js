const discord = require("discord.js");

const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    try{

        var text = "**MixinNetwork Bot** \n\n**__Commands:__** \n__?help__ - You will see this menu \n__?hello__ - The bot says hello back \n__?bot__ - Crain information abou this bot \n__?server__ - Crain information about this server \n__?ping__ - crain the ping of the bot \n__?clear__ - Delete messages **(Admin)** \n__?kick__ - Kick anyone **(Admin)** \n__?ban__ - Ban anyone **(Admin)** \n__?news__ - Send a message to the channel news **(Admin)** \n__?warn__ - Warn anyone (4 warns = ban) **(Admin)** \n__?tempmute__ - temporarily mute anyone **(Admin)** \n__?news__ Title // Color // Channel // Message - Send a news message **(Admin)**\n**!** Means that the commend doesn't work very well or that it's under construction";

        message.author.send(text);

        message.channel.send("Check your private messages for all commands").then(msg => msg.delete(3000));

    }catch (error){
        message.channel.send("Something went wrong").then(msg => msg.delete(3000));
    }

}

module.exports.help = {
    name: "help"
}
