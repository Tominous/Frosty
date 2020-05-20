const Discord = require("discord.js")
const db = require('quick.db')
const ms = require('parse-ms')
module.exports = {
    name: 'mine',
	description: 'mine for diamonds',
    execute: async(client, message, args) => {
        if (db.has(`${message.author.id}`, "pickaxe") === true) {
            let timeoutmine = 600000
            let mined =  db.fetch(`mined_${message.author.id}`)
    
            console.log(db.has(`${message.author.id}`, "pickaxe"))
            if (mined != null && timeoutmine - (Date.now() - mined) > 0) {
                let time = ms(timeoutmine - (Date.now() - mined));
                message.channel.send(`You have already mined please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
    
    
            } else {
                let amountearned = Math.floor(Math.random() * 3000) + 1
    
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
    
        } else if(db.has(`${message.author.id}`, "pickaxe") === false) {
            message.channel.send("You need to buy a pickaxe first (hint: _shop leads you to shop where you can buy stuff)")
        }

    },
};