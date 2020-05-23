const Discord = require("discord.js")
const ms = require("parse-ms")
const talkedRecently = new Set();
const db = require('quick.db')
module.exports = {
	name: 'scout',
	description: 'search an area',
	execute(client,message, args) {
        let timeoutworked = 600000
        let worked =  db.fetch(`scouted_${message.author.id}`)


        if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
            let time = ms(timeoutworked - (Date.now() - worked));
            message.channel.send(`You have already searched please come back in **${time.minutes}m ${time.seconds}s**`)


        } else {
            let amountearned = Math.floor(Math.random() * 30) + 1

            let jobs = ["pantry", "dog", "car", "bed", "parking lot", "store", "wallet"]
            let job = jobs[Math.floor(Math.random()* jobs.length)]

            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${message.author.tag}, it paid off`, message.author.displayAvatarURL())
            .setDescription(`${message.author}, you searched a ${job} and found ${amountearned} coins`)

            message.channel.send(embed)

            db.add(`money_${message.author.id}`, amountearned)
            db.set(`scouted_${message.author.id}`, Date.now())
        }

	},
};