const Discord = require("discord.js")
const ms = require("parse-ms")
const talkedRecently = new Set();
const db = require('quick.db')
module.exports = {
	name: 'beg',
	description: 'beg, and earn money',
	execute(client,message, args) {
        let timeoutworked = 600000
        let worked =  db.fetch(`begged_${message.author.id}`)


        if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
            let time = ms(timeoutworked - (Date.now() - worked));
            message.channel.send(`You have already begged please come back in **${time.minutes}m ${time.seconds}s**`)


        } else {
            let amountearned = Math.floor(Math.random() * 50) + 1

            let jobs = ["Justin Bieber", "Ariana Grande", "Adele", "JT", "Your Mom", "Kim Kardashian", "Buddy from HR", "Raj"]
            let job = jobs[Math.floor(Math.random()* jobs.length)]

            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${message.author.tag}, your begging worked`, message.author.displayAvatarURL())
            .setDescription(`${message.author}, ${job} donated ${amountearned} coins`)

            message.channel.send(embed)

            db.add(`money_${message.author.id}`, amountearned)
            db.set(`begged_${message.author.id}`, Date.now())
        }

	},
};