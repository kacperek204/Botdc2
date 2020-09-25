const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(command == "embed"){ 
        var embed = new Discord.MessageEmbed()
        .setAuthor(message.member.user.username, message.member.user.avatarURL)
        .setColor('#0099ff')
        .setDescription('Bot')
        message.channel.send(embed)
    }
};

module.exports.help = {
    name: "clear",
  };
  