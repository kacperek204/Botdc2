const { RichEmbed} = require('discord.js')

module.exports.run = async(bot, message, args, msg) => {
        message.delete()
        const filter = response => {
            return response.author.id === message.author.id
        };
        message.reply(`Wpisz tytuł ogłoszenia`).then((w) => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 300000,
                errors: ['time']
            }).then(c => {
                let title = c.first().content;
                message.reply(`Wpisz treść ogłoszenia`).then((w) => {
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 1000000,
                        errors: ['time']
                    }).then(de => {
                        let desc = de.first().content;
                        message.reply(`Wpisz cene`).then((w) => {
                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 1000000,
                                errors: ['time']
                            }).then(a => {
                                let price = a.first().content;    
                                message.reply(`Wklej zdjęcia`).then((w) => {
                                    message.channel.awaitMessages(filter, {
                                        max: 1,
                                        time: 1000000,
                                        errors: ['time']
                                    }).then(b => {
                                        let photo = b.first().content;        
                                        message.channel.bulkDelete(1)
                                        let embed = new RichEmbed()
                                            .addField("Tytuł ogłoszenia:", `${title}`)
                                            .addField("Opis:", `${desc}`)
                                            .addField("Cena:", `${price}`)
                                            .setColor("#D40F0A")
                                            .setThumbnail(message.author.avatarURL)
                                            .addField("Autor Ogłoszenia:", `${message.author}`)
                                            .setImage(photo)
                                            .setTimestamp() 
                                            message.channel.send(embed)
                                            message.channel.bulkDelete(7)
                                            
                                    }).catch((e => {
                                        message.reply(`Czasu upłynął! Spróbuj jeszcze raz!`)
                                    }))
                                })
                            })
                        })
                    })    
                })
            })         
        })            
    }                
                    module.exports.help = {
                            name: "otomoto",
                    };
