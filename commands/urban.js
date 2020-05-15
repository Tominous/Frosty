const Discord = require('discord.js')
const urban = require("urban")

module.exports = {
	name: 'urban',
	description: 'get a definition from urban dictionary',
	execute: async(client,message, args) => {
        let prefix = "_"
        let urbanargs = message.content.substring(prefix.length).split(' ')

        if (message.channel.nsfw === false) {
          message.channel.send("NSFW channels only")
        } else {

        if(args.length < 1) return message.channel.send("Please enter a word")
        let string = args.join(" ")
        

        urban(string).first(json => {
          if(!json) return message.channel.send("no results found")
          console.log(json)

          let urbanembed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(json.word)
          .setDescription(json.definition)
          .addField("Example", json.example, true)
          .addField("Upvotes", json.thumbs_up, true)
          .addField("Downvotes", json.thumbs_down, true)
          .setFooter(json.author)
          message.channel.send(urbanembed)
        });
      }
	},
};