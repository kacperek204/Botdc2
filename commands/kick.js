const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  const kLogs = message.guild.channels.find(channel => channel.name === "『🔧』kick");
  let kUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kUser) return message.channel.send("Nie ma takiego użytkownika!");
  if(kLogs){
    kLogs.send(`${message.author} wyrzucił <${kUser}>`);
}else{
    return;
}
  let kReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Nie masz permisji do tej komendy!");
  if (kUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Ten użytkownik został już wyrzucony!");

  let kickEmbed = new Discord.RichEmbed()
    .setDescription("**KICK**")
    .setColor("#0099ff")
    .addField("**Wyrzucony użytkownik**:", `${kUser} z ID ${kUser.id}`)
    .addField(
      "**Wyrzucony przez:**",
      `<@${message.author.id}> z ID ${message.author.id}`
    )
    .addField("**Wyrzucony w:**", message.channel)
    .setImage("https://i.imgur.com/giHwvzL.png")
    .addField("**Czas:**", message.createdAt)
    .addField("**Powód:**", kReason);

  let kickChannel = message.guild.channels.get(config.idkick)
  if (!kickChannel)
    return message.channel.send("Nie ma podaniego kanału z banami.");
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
};

module.exports.help = {
  name: "kick",
};
