const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("Type ?help", { type: "PLAYING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "New");

    if(!role) return console.log("De rol New bestaat niet!");

    member.addRole(role);

    var roleTwo = member.guild.roles.find("name", "veryone");

    if(!roleTwo) return console.log("De rol veryone bestaat niet!");

    member.addRole(roleTwo);

    const channel = member.guild.channels.find("name", "new-users");

    if (!channel) return console.log("Het kanaal new-users bestaat niet");

    channel.send(`Hello ${member}, welcome to MixinGames Network!`);

});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    if (!message.content.startsWith(prefix)) return;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);


});


bot.login(process.env.token);