const Discord = require("discord.js")
const ms = require("parse-ms")
const talkedRecently = new Set();
const db = require('quick.db')
module.exports = {
	name: 'work',
	description: 'work, and earn money',
	execute(message, args) {
        let timeoutworked = 3600000
        let worked =  db.fetch(`worked_${message.author.id}`)


        if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
            let time = ms(timeoutworked - (Date.now() - worked));
            message.channel.send(`You have already worked please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)


        } else {
            let amountearned = Math.floor(Math.random() * 500) + 1

            let jobs = ["Developer", "Scientist", "Doctor", "Shopkeeper"]
            let job = jobs[Math.floor(Math.random()* jobs.length)]

            let embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.tag}, it payed off`, message.author.displayAvatarURL())
            .setDescription(`${message.author}, you worked as a ${job} and earnt ${amountearned} coins`)

            message.channel.send(embed)

            db.add(`money_${message.author.id}`, amountearned)
            db.set(`worked_${message.author.id}`, Date.now())
        }

	},
};