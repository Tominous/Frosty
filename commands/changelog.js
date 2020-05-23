const { MessageEmbed } = require('discord.js')
module.exports = {
    name:"changelog",
    description: "see the changes",

    execute(client, message, args) {
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Changelog")
        .addField("Changes", ```
        >Decreased cooldown for fish
        >Increased earnings on mine cmd
        ```)
        message.channel.send(embed)
    }
}