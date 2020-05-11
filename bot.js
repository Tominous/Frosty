const fs = require('fs');
const { prefix, token } = require('./config.json');
const Discord = require('discord.js')
const { VultrexDB } = require("vultrex.db");
const randomPuppy = require('random-puppy')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const db = new VultrexDB({
  provider: "sqlite",
  table: "tableName",
  fileName: "fileName"
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODA4NTU1NDg2ODUxODk0MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg4MjkwMDg5fQ.rGeDQM42CoZATB1XOaf60lKWAPS0XFq5kKkq7SNT7CQ', client);
dbl.on('posted', () => {
	console.log('Server count posted!');
  })
  
  dbl.on('error', e => {
   console.log(`Oops! ${e}`);
  })
client.once('ready', async () => {
	console.log('Ready!');

});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	//message.reply('there was an error trying to execute that command!, if this error persists please DM the dev');
}
});


client.on('message', async message => {
	const levelInfo = await db.get(`level-${message.guild.id}-${message.author.id}`, {
		level: 1,
		xp: 0,
		totalXp: 0
	})

	const generatedXp = Math.floor(Math.random() * 16)
	levelInfo.xp += generatedXp;
	levelInfo.totalXp += generatedXp;

	if (levelInfo.xp >= levelInfo.level * 40) {
		levelInfo.level++;
		levelInfo.xp = 0;;
		//message.channel.send(`You are now level **${levelInfo.level}**!`)
	}

	await db.set(`level-${message.guild.id}-${message.author.id}`, levelInfo)
});

client.on('message', async message => {
	if (message.content === "_help 1") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_3", "gets a 3x3 scramble")
		.addField("_2", "gets a 2x2 scramble")
		.addField("_4", "gets a 4x4 scramble")
		.addField("_skewb", "gets a skewb scramble")
		.addField("_squan", "gets a squan scramble")
		.addField("_pyra", "gets a pyra scramble")
		.addField("_cubing", "gets an image from r/cubers")
		message.channel.send(embed)
	} else if(message.content === "_help 2") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_kick <user>", "kicks a user")
		.addField("_ban <user>", "bans a user")
		.addField("_report <user> <reason>", "reports a user")
		message.channel.send(embed)

	} else if(message.content === "_help 3") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_joke", "gets a joke")
		.addField("_cnjoke", "gets a chuck norris coding joke")
		.addField("_meme", "gets a meme from a variety of subreddits")
		message.channel.send(embed)
	} else if(message.content === "_help 4") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_work", "lets you work every hour")
		.addField("_stonks", "lets you invest in stonks every hour")
		.addField("_beg", "lets you beg every ten minutes")
		.addField("_bal", "check your balance")
		.addField("_daily", "gets you 500 coins every day")
		.addField("_give <user> <amount>", "lets you pay a user")
		message.channel.send(embed)
	} else if(message.content === "_help 5") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_corona all", "gets overall covid stats")
		.addField("_corona <country>", "gets covid stats for a specific country")
		.addField("_rank", "check your rank")
		message.channel.send(embed)
	}

	if (message.content === "_meme") {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed)
    }
})

db.connect().then(() => {
	client.db = db;
	client.login(token);
  });