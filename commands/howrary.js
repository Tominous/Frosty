const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "howrary",
    description: "find out how rary you or someone else is",

    execute(client, message, args) {
        let rart = Math.floor(Math.random() * 100) + 1
        let person = message.mentions.users.first() || message.author
        let embed = new MessageEmbed()
        .setColor("RED")
        .setTitle(`${person.username}'s How Rary Results`)
        .addField("How Rary", `${person.username} is ${rart}% rary`)
        message.channel.send(embed)
    }
}