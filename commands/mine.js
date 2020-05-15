const Discord = require("discord.js")
const db = require('quick.db')
const ms = require('parse-ms')
module.exports = {
    name: 'mine',
	description: 'mine for diamonds',
    execute: async(client, message, args) => {
        if (db.has(`${message.author.id}`, "pickaxe") === true) {
            let timeoutstonks = 600000
            let stonks =  db.fetch(`mined_${message.author.id}`)
    
    
            if (stonks != null && timeoutstonks - (Date.now() - stonks) > 0) {
                let time = ms(timeoutstonks - (Date.now() - stonks));
                message.channel.send(`You have already fished please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
    
    
            } else {
                let amountearned = Math.floor(Math.random() * 500) + 1
    
                let jobs = ["Diamond", "Gold", "Silver", "Iron", "Emerald", "Copper"]
                let job = jobs[Math.floor(Math.random()* jobs.length)]
    
                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`${message.author.tag}, it paid off`, message.author.displayAvatarURL())
                .setDescription(`${message.author}, you mined ${job} ore and earnt ${amountearned} coins`)
    
                message.channel.send(embed)
    
                db.add(`money_${message.author.id}`, amountearned)
                db.set(`mined_${message.author.id}`, Date.now())
            }
    
        } else {
            message.channel.send("You need to buy a pickaxe first (hint: _shop leads you to shop where you can buy stuff)")
        }

    },
};