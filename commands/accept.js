const { RichEmbed} = require('discord.js')
const config = require("../config.json");

module.exports.run = async(bot, message, args, msg) => {
          const filter = response => {
            return response.author.id === message.author.id
          };
          let embed = new RichEmbed()
          if (!message.member.roles.find(r => r.name === config.rolaaccept)) return message.channel.send("Nie możesz :laughing: ");
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
                        message.channel.bulkDelete(1)
                        let embed = new RichEmbed() 
                          .setTitle("📝 Podanie rozpatrzone pozytywnie!") 
                          .setColor(`#4BFF1E`) 
                          .addField("Osoba sprawdzająca:", message.author)
                          .addField("Autor podania:", `${osoba}`)
                          .addField("Na co/Do jakiej frakcji", `${naco}`)
                          message.channel.send(embed)
                          message.channel.bulkDelete(5)
                      
                        })
                      })
                                  return;     
                  })
                })   
            }    
                
                  module.exports.help = {
                    name: "akcept",
                  };