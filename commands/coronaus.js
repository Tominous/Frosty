const Discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "coronastate",
  category: "info",
  description: "Get the stats of corona in a US state",
  usage: "corona all or corona <US State>",
  aliases: ["covid", "covid19"],
  execute: async ( client,message, args) => {
    if(!args.length) {
        return message.channel.send("Please give the name of US State")
      }
      let corona = await track.states(args.join(" "))
      console.log(corona)
      let embed = new Discord.MessageEmbed()
      .setTitle(`${corona.state}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from other sources")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Tests", corona.tests, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      message.channel.send(embed)
  }
}