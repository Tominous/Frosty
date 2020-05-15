const Discord = require('discord.js')
const id = "467030554131562506"
const beautify = require('beautify')
const { MessageEmbed } = require("discord.js")
module.exports = {
	name: 'eval',
	description: 'eval code',
	execute: async(client, message, args) => {
        if(message.author.id === id) {
        

        if (!args[0]) {
            message.channel.send("You need to evaluate something")
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }
            const toEval = args.join(" ")
            const evaluated = eval(toEval)

            let embed = new MessageEmbed()
            .setColor("#00FF0")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL)
            .setTitle("Eval")
            .addField("To evaluate", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
            .addField("Evaluated", evaluated)
            .addField("Type of:", typeof(evaluated));
            message.channel.send(embed)
        } catch (e) {
            let embed = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle("\:x: error!")
            .setDescription(e)
            .setFooter(client.user.username, client.user.displayAvatarURL)

            message.channel.send(embed)
        }
    } else {
        message.channel.send("no you dont have perms")
    }
	},
};