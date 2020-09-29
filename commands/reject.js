const { RichEmbed} = require('discord.js')
const config = require("../config.json");

module.exports.run = async(bot, message, args, msg) => {
          const filter = response => {
            return response.author.id === message.author.id
          };
          let embed = new RichEmbed()
          if (!message.member.roles.find(r => r.name === config.rolareject)) return message.channel.send("Nie możesz :laughing: ");
          message.reply(`Oznacz osobę składającą podanie`).then((w) => {
              message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 60000,
                  errors: ['time']
              }).then(c => {
                  let osoba = c.first().content;
                  message.reply(`Na co składano podanie`).then((w) => {
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 60000,
                        errors: ['time']
                    }).then(a => {
                        let naco = a.first().content;   
                        message.reply(`Powód odrzucenia:`).then((w) => {
                          message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 60000,
                              errors: ['time']
                          }).then(b => {
                              let powod = b.first().content;       
                                message.channel.bulkDelete(1)
                                let embed = new RichEmbed() 
                                  .setTitle("📝 Podanie rozpatrzone negatywnie!") 
                                  .setColor(`#DE0A04`) 
                                  .addField("Osoba sprawdzająca:", message.author)
                                  .addField("Autor podania:", `${osoba}`)
                                  .addField("Na co/Do jakiej frakcji", `${naco}`)
                                  .addField("Powód odrzucenia:", `${powod}`)
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
              }          
                  
                          module.exports.help = {
                            name: "odrzuc",
                          };