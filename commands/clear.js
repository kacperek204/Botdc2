const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("No.");
  if (!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`Clear ${args[0]} messages.`)
      .then((msg) => msg.delete(2000));
  });
};

module.exports.help = {
  name: "clear",
};

if(command =="say"){
  var embed = new Discord.MessageEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .setColor('#0099ff')
  .setDescription('Bot')
  message.delete()
  if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
  else 
  return message.channel.send("Nie posiadasz permisji"), message.channel.send(embed)
  
};