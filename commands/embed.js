const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "embed",
  description: "send an embed",

  execute: async(client, message, args) => {

    let color = args[0]
    let title = args[1]
    let text = args.slice(2).join(" ")

    let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .addField(`${message.author.tag}`, text)
    message.channel.send(embed)
  }
}