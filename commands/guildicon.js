const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "servericon",
    description: "get a servers icon",

    execute(client, message, args) {
        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Server Icon")
        .setImage(message.guild.iconURL())
        message.channel.send(embed)
    }
}