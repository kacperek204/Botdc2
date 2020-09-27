const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async(bot, message, args, msg) => {

    let sicon = message.guild.name;
let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
    .setFooter(sicon)
    .setTimestamp()
    if (!message.member.roles.find(r => r.name === config.rolareject)) return message.channel.send(embeda);

          const tekst = args.join(' ');
          if (!tekst) return message.channel.send("Podaj tekst podania"); 
          let reportEmbed = new Discord.RichEmbed() 
            .setTitle("📝 Podanie rozpatrzone negatywnie!") 
            .setColor(`#DE0A04`) 
            .addField("Osoba sprawdzająca:", message.author)
            .addField("Wynik", tekst)
            .setFooter(sicon) 
            .setThumbnail(message.author.avatarURL)
            .setTimestamp() 
             
            message.delete().catch(O_o=>{});
            message.guild.channels.get(config.idreject).sendMessage(reportEmbed);
        
            return;     
    }
    
    
    module.exports.help = {
    
      name:`${config.komendareject}`
    
    }