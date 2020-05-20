const Discord = require('discord.js')


module.exports = {
	name: 'help',
	description: 'view a list of commands',
	execute(client,message, args) {
      if (message.content === "_help") {          
        let embed = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setTitle("Help")
        .addField("Page 1: Cubing", "Cubing Commands")
        .addField("Page 2: Moderation", "Moderation Commands")
        .addField("Page 3: Fun ", "Fun Commands")
        .addField("Page 4: Economy", "Economy Commands")
        .addField("Page 5: Miscellaneous", "Miscellaneous Commands")
        .addField("Page 6: NSFW", "NSFW Commands")
        .addField("Vote", "https://top.gg/bot/688085554868518941")
        .addField("Website", "https://kenrag24.github.io/frosty.github.io/#")
        .addField("Github Repo" , "https://github.com/kenrag24/Frosty")
        .addField("Guide" , "https://kenrag24.gitbook.io/frosty/")
        message.channel.send(embed)
      }
	},
};