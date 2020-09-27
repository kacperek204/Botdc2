const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async(bot, message, args, msg) => {
  var embed = new Discord.MessageEmbed()
  var embed = new Discord.MessageEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .setColor('#0099ff')
  .setDescription('Bot')
};

module.exports.help = {
  name: "help",
};
