const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if (args[0] == 1.1){

        return message.channel.send("**THE ADMIN UPDATE** \n\n1) Added join roles and message \n2) Added the news command **(only for admin)** \n3) Added ![EN]warn + warn system **(only for admin)** \n4) Added the ![EN]tempmute command **(only for admin)**");

    } else{
        return message.channel.send("**Error:** there are only updatelogs beginning from 1.1 or this update doesn't exist").then(msg => msg.delete(5000));
    }
    
}

module.exports.help = {
    name: "updatelog"
}