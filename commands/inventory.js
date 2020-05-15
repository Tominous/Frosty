const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "inv",
    description: "check your inventory",
    execute: async(client, message, args) => {
      let items = db.get(message.author.id)
      let user = message.mentions.users.first || message.author
      if (items === null) items = "nothing yet"
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Inventory`)
    .addField("Inventory", items)
    message.channel.send(embed)
    },
};