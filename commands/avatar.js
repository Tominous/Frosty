const Discord = require('discord.js')

module.exports = {
	name: 'avatar',
	description: 'Ping!',
	execute: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}'s Avatar`)
        .setImage(message.author.avatarURL())
        message.channel.send(embed)
	},
};