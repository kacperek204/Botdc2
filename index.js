const setup = require("./setup.js");
const { start } = require("./bot.js");


const printValues = function (values, text) {
  console.log(text ? text : "Current values:");
  for (var key in values) {
    console.log(`  ${key} = \x1b[32m'${values[key]}'\x1b[0m`);
  }
};

const startBot = function (values) {
  console.log("Starting bot");
  var bot = start(values);
  bot.on("restart", () => {
    console.log("\nRestarting bot");
    bot.destroy();
    bot = start(values);
  });
  var shutdown = function () {
    console.log("Shutting down");
    let destructor = bot.destroy();
    if (destructor) {
      destructor
        .then(() => {
          process.exit(0);
        })
        .catch(console.error);
    } else {
      process.exit(0);
    }
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
};

if (process.argv.includes("-c") || process.argv.includes("--config")) {
  setup
    .loadValues()
    .then((values) => {
      printValues(values);
      process.exit(0);
    })
    .catch((error) => {
      console.log("Unable to load saved values, configuring all again");
      setup
        .createValues()
        .then((values) => {
          setup
            .saveValues(values)
            .then(() => {
              printValues(values, "New values:");
              process.exit(0);
            })
            .catch(console.error);
        })
        .catch(console.error);
    });
} else {
  console.log("Attempting to load enviroment");
  setup
    .loadValues()
    .then((values) => {
      startBot(values);
    })
    .catch((error) => {
      console.error(error);
      setup
        .createValues()
        .then((values) => {
          setup
            .saveValues(values)
            .then(() => {
              startBot(values);
            })
            .catch(console.error);
        })
        .catch(console.error);
    });
}

if(command =="say"){
  var embed = new Discord.MessageEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .setColor('#0099ff')
.setDescription('Bot')
  message.delete()
  if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
  else 
  return message.channel.send("Nie posiadasz permisji"), message.channel.send(embed)
  
}

if(command == "embed"){ 
  var embed = new Discord.MessageEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .setColor('#0099ff')
.setDescription('Bot')
  message.channel.send(embed)
}

if(command == "infoserwer"){
  var embed = new Discord.MessageEmbed()
  .addField("Nazwa Serwera:", message.guild.name, false)
  .setColor('#0099ff')
  .addField("Właściciel serwera:", message.guild.owner.user.tag, false)
  .addField("Data stworzenia serwera:", message.guild.createdAt, false)

  return message.channel.send(embed)
}

if(command == "propozycja"){
  var wiadomosc = message.content.slice([prefix.length+10])
  var embed = new Discord.MessageEmbed()
  .setAuthor(message.member.user.username, message.member.user.avatarURL)
  .addField("Treść propozycji:", wiadomosc, false)
  .setColor("0099ff")
  .setFooter("Jeśli się zgadzasz kliknij emotkę ✔️ | Jeśli się nie zgadzasz kliknij emotkę ❌")

  
  message.channel.send(embed).then(async embedMessage => {
      await embedMessage.react('754096926554718328')
      await embedMessage.react("754096903536377976")
  return
  })
      
}

if(command == "help"){
  var embed = new Discord.MessageEmbed()
  .setTitle("Dostępne komendy:")
  .setColor('#0099ff')
  .setDescription("!tempmute, !ban, !clear, !dev, !kick, !ogloszenie, !say, !warn")


  return message.channel.send(embed)
}






