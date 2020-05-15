const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'uwu',
	description: 'see how many uwus',
	execute: async(client, message, args) => {
        let owo = db.fetch(`uwus_${message.guild.id}`)
        if (owo === null) owo = 0
        message.channel.send(`There have been ${owo} uwus or owo in this server`)
	},
};