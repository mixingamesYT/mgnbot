module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete("1");

    message.channel.send("Pong: " + (Date.now() - message.createdTimestamp) + "ms");

}

module.exports.help = {
    name: "ping"
}