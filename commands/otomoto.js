const { RichEmbed } = require('discord.js')
module.exports.run = async (bot, message, args) => {
        message.delete()
        const filter = response => {
            return response.author.id === message.author.id
        };
        message.reply(`Wpisz tytuł ogłoszenia (Masz 5 minut)`).then((w) => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 300000,
                errors: ['time']
            }).then(c => {
                let title = c.first().content;
                message.reply(`Wpisz opis swojego ogłosznia (Masz 10 minut)`).then((w) => {
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 1000000,
                        errors: ['time']
                    }).then((de => {
                        let desc = de.first().content;
                        message.channel.bulkDelete(1)
                        let embed = new RichEmbed()
                            .setTitle(title)
                            .setDescription(desc)
                            .setColor("#D40F0A")
                            .setThumbnail(message.author.avatarURL)
                            .addField("Autor Ogłoszenia", `${message.author}`)
                            .setTimestamp() 
                        message.channel.send(embed)
                        message.channel.bulkDelete(3)
                    }))
                }) 
            }).catch((e => {
                message.reply(`Czasu upłynął! Spróbuj jeszcze raz!`)
            }))
                
        })
    }      

module.exports.help = {
            name: "otomoto",
};