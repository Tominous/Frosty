const {
    MessageEmbed
} = require('discord.js')
//const db = require('vultrex.db')
const functions = require('../structures/functions')

module.exports = {
    name: "lb",
    description: "see ranks of people",

    execute: async (client, message, args) => {
        let data = await client.db.getAll(`level-${message.guild.id}`)
        data = data.sort((a, b) => b.value.totalXp - a.value.totalXp);
        data = await Promise.all(data.map(async (data, index) => {
            const user = await client.users.fetch(data.key.split("-")[2]).catch(() => null)
            if (user) {
                return {
                    tag: user.tag,
                    level: data.value.level,
                    rank: index + 1
                }
            }
        }));

        if (!data.length) return message.reply("There is no leaderboard for this server yet")
        const page = functions.pages(data, 10, args[0] || 1)
        if (!page) return message.reply("This page does not exist")

        message.channel.send(new MessageEmbed()
            .setAuthor(`Leaderboard for | ${message.guild.name}`, message.guild.iconURL())
            .setColor("#f44336")
            .setDescription(page.map(e => ` \`#${e.rank}\` | **${e.tag}** (Level ${e.level})`))
        );
    }

}