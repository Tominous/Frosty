const Discord = require("discord.js")
const ms = require("parse-ms")
const talkedRecently = new Set();
const db = require('quick.db')
module.exports = {
	name: 'hunt',
	description: 'hunt for animals',
	execute: async(client,message, args) => {
        if (db.has(`${message.author.id}`, "fishing rod") === true) {
        let timeoutstonks = 600000
        let stonks =  db.fetch(`hunt_${message.author.id}`)


        if (stonks != null && timeoutstonks - (Date.now() - stonks) > 0) {
            let time = ms(timeoutstonks - (Date.now() - stonks));
            message.channel.send(`You have already hunted please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)


        } else {
            let amountearned = Math.floor(Math.random() * 500) + 1

            let jobs = ["Bird", "Rabbit", "Duck", "Chicken"]
            let job = jobs[Math.floor(Math.random()* jobs.length)]

            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${message.author.tag}, it paid off`, message.author.displayAvatarURL())
            .setDescription(`${message.author}, you hunted a ${job} and earnt ${amountearned} coins`)

            message.channel.send(embed)

            db.add(`money_${message.author.id}`, amountearned)
            db.set(`hunt_${message.author.id}`, Date.now())
        }
    } else {
        message.channel.send("Go buy a gun from the shop first ")
    }
	},
};