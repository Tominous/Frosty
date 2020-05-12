const Discord = require('discord.js')
module.exports = {
	name: 'info',
	description: 'shows the bots info',
	execute: async(message, args) => {
        const usedmemory = process.memoryUsage().heapUsed / 1024 / 1024
        const usedmemoryinmb = `${Math.round(usedmemory)}`
        let attachment = new Discord.MessageAttachment("./frosty.jpeg")
        let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .addField("Library", "Discord.js v12.2.0", true)
        .addField("Version", "v2.1", true)
        .addField("Prefix", "_")
        .addField("Support Server", "https://discord.gg/aSN6UcF", true)
        .addField("Github Repo", "https://github.com/kenrag24/Frosty")
        .addField("Memory Usage", usedmemoryinmb + " MB", true)
        .addField("Owner" , "NerdNoOneLikes#0115", true)
        .addField("CPU", "1.8 GHz Intel Core i5", true)
        message.channel.send(embed)
	},
};