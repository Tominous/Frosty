const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "buy",
    description: "buy an item from the shop",
    execute: async(client, message, args) => {
        let author = db.fetch(`money_${message.author.id}`)
        if (!args[0]) {
            message.channel.send('what do you want to buy tho')
        }

        if (args[0] === "sword") {
         if (author < 700) {
            return message.channel.send("You need at least 700 coins")
         } else {
        let items = db.fetch(message.author.id, { items: [] })
        db.push(message.author.id, 'sword')
        message.channel.send("You bought 1x Sword")
        db.subtract(`money_${message.author.id}`, 700)
         }
        }

        if (args[0] === "rod") {
            if (author < 1000) {
                return message.channel.send("You need at least 1000 coins to purchase this item")
            } else {
            let items = db.fetch(message.author.id, { items: [] })
            db.push(message.author.id, 'fishing rod')
            message.channel.send("You bought 1x Rod")
            db.subtract(`money_${message.author.id}`, 1000)
            }
        }

        if (args[0] === "pick") {
            if (author < 1200) {
                return message.channel.send("You need at least 1200 coins to purchase this item")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, 'pickaxe')
                message.channel.send("You bought 1x Pickaxe")
                db.subtract(`money_${message.author.id}`, 1200)
            }
        }

        if (args[0] === "gun") {
            if (author < 10000) {
                return message.channel.send("You need at least 10,000 coins to purchase this item")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, 'gun')
                message.channel.send("You bought 1x Gun")
                db.subtract(`money_${message.author.id}`, 10000)
            }
        }

        if (args[0] === "tea") {
            if (author < 5) {
                return message.channel.send("You need at least 5 coins to purchase this item")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, 'tea')
                message.channel.send("You bought 1x tea")
                db.subtract(`money_${message.author.id}`, 5)
            }
        }
    },
};