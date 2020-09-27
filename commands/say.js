const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.name;
    let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
    .setFooter(sicon)
    .setTimestamp()
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embeda);
        let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);


}

module.exports.help = {
    name: `${config.komendasay}`
}