const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    if (args[0] == "1.1"){

        return message.channel.send("**THE ADMIN UPDATE** \n\n1) Added the news command (Pre-release) **(only for admin)** \n2) Added ?warn + warn system **(only for admin)** \n3) Added the ?tempmute command **(only for admin)**\n");

    } else if(args[0] == "1.1.1"){

        return message.channel.send("**THE NEWS UPDATE** \n\nRelease of the news command! \nHow you use it : \n?news Title // Color // Channel // Message \nStill only for Admin!\n")

    } else if(args[0] == "1.1.2") {

        return message.channel.send("**THE TEMPBAN UPDATE!** \n\nRelease of the tempban command! \nAlso only for admin!")

    }    
    else{
        return message.channel.send("**Error:** there are only updatelogs beginning from 1.1 or this update doesn't exist").then(msg => msg.delete(5000));
    }
    
}

module.exports.help = {
    name: "updatelog"
}
