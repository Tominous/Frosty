const Discord = require('discord.js')
const api = require("imageapi.js")
module.exports={
    name: "cubing",
    description: "Get a meme!",
    category: "fun",
    execute: async(message,args)=>{
        //let subreddits = [
            
       // ]
        let subreddit = "cubers"
        let img = await api(subreddit)
        const Embed = new Discord.MessageEmbed()
        .setTitle(`A meme from r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor('RANDOM')
        .setImage(img)
        message.channel.send(Embed)
    },
};