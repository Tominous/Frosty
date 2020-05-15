
const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
	name: 'bal',
	description: 'check your balance!',
	execute(client,message, args) {
                let user = message.mentions.users.first() || message.author
                let money = db.fetch(`money_${user.id}`)

                if (money === null) money = 0

                let embed = new Discord.MessageEmbed()
                .setColor("AQUA")
                .addField("Balance", `${money} coins`)
                .setThumbnail(user.avatarURL())
            message.channel.send(embed)
                //message.channel.send(`${user} you have ${money} coins`)
	},
};