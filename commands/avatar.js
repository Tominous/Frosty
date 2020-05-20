const Discord = require('discord.js')

module.exports = {
	name: 'avatar',
	description: 'Ping!',
	execute: async(client, message, args) => {
        let person = message.mentions.users.first() || message.author
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${person.username}'s Avatar`)
        .setImage(person.avatarURL())
        message.channel.send(embed)
	},
};