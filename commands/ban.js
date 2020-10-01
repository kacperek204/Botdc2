const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const kLogs = message.guild.channels.find(channel => channel.name === "『🔧』ban");
  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bUser) return message.channel.send("Nie ma takiego użytkownika!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MEMBERS"))
    return message.channel.send("No can do pal!");
  if (bUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Nie można zbanować tej osoby!");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#0099ff")
    .addField("Zbanowana osoba", `${bUser} z ID ${bUser.id}`)
    .addField(
      "Zbanowany przez",
      `<@${message.author.id}> z ID ${message.author.id}`
    )
    .addField("Zbanowany w ", message.channel)
    .addField("Czas", message.createdAt)
    .addField("Za co", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "hall-of-shame");
  if (!incidentchannel)
    return message.channel.send("NIe ma takiego kanału.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
};

module.exports.help = {
  name: "ban",
};
