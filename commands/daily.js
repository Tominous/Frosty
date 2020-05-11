const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms")

module.exports = {
    name:"daily",
    description:"redeem 500 coins daily",
    execute(message, args) {
        let timeout = 86400000
        let amount = 500
    
        let daily = db.fetch(`daily_${message.author.id}`);

        if (daily != null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
            message.channel.send(`You already collected your daily reward, you can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)


        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Daily`, message.author.displayAvatarURL)
            .setColor("GREEN")
            .setDescription(`**Daily Rewards**`)
            .addField(`Collected`, amount)
            message.channel.send(embed)

            db.add(`money_${message.author.id}`, amount)
            db.add(`daily_${message.author.id}`, Date.now())
        }
    },
};