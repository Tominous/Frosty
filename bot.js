const fs = require('fs');
const { prefix, token } = require('./config.json');
const Discord = require('discord.js')
const { VultrexDB } = require("vultrex.db");
const randomPuppy = require('random-puppy')
const client = new Discord.Client();
const qdb = require('quick.db')
const { ErelaClient } = require("erela.js")
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
const dbl = new DBL('token','client');
dbl.on('posted', () => {
	console.log('Server count posted!');
  })
  
  dbl.on('error', e => {
   console.log(`Oops! ${e}`);
  })
client.once('ready', async () => {
	console.log('Ready!');
	let servers = client.guilds.cache.size
	let users = client.users.cache.size
	client.user.setPresence({
        status: "dnd",
        activity: {
            name:"_help | " + servers + " servers | " + users + " users",
            type: "WATCHING"
        }
    })
})

	client.on("guildCreate", guild => {
		console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
		client.user.setActivity("_help | " + client.guilds.cache.size + " servers"); 
	  });

	  client.on("guildDelete", guild => {
		console.log(`I have been removed from: ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members :(`);
		client.user.setActivity("_help | " + client.guilds.cache.size + " servers"); 
	  });



let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.cache.get("681657479691632640").send(x.join(" "));
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(client, message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!, if this error persists please DM the dev');
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
		message.channel.send(`You are now level **${levelInfo.level}**!`)
	}

	await db.set(`level-${message.guild.id}-${message.author.id}`, levelInfo)
});

client.on('message', async message => {
	if (message.content === "_help 1") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_3", "gets a 3x3 scramble", true)
		.addField("_2", "gets a 2x2 scramble", true)
		.addField("_4", "gets a 4x4 scramble",true)
		.addField("_skewb", "gets a skewb scramble", true)
		.addField("_squan", "gets a squan scramble", true)
		.addField("_pyra", "gets a pyra scramble", true)
		.addField("_cubing", "gets an image from r/cubers", true)
		message.channel.send(embed)
	} else if(message.content === "_help 2") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_kick [user]", "kicks a user")
		.addField("_ban [user]", "bans a user")
		.addField("_report [user] [reason]", "reports a user")
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
		.addField("_scout", "lets you search for money every ten minutes")
		.addField("_bal", "check your balance")
		.addField("_daily", "gets you 500 coins every day")
		.addField("_give [user] [amount]", "lets you pay a user")
		.addField("_mine", "mine for diamonds")
		.addField("_fish", "fish for sea food")
		.addField("_shop", "view shop")
		.addField("_buy [item id]", "buy an item from the shop")
		.addField("_inv", "see your inventory")
		message.channel.send(embed)
	} else if(message.content === "_help 5") {
		let embed = new Discord.MessageEmbed()
		.setColor("AQUA")
		.addField("_corona all", "gets overall covid stats")
		.addField("_corona [country]", "gets covid stats for a specific country")
		.addField("_coronastate [US State]", "gets covid stats for a specific US State")
		.addField("_weather [location]", "gets weather data on a sepcific location")
		.addField("_rank", "check your rank")
		message.channel.send(embed)

	} else if(message.content === "_help 6" || message.content === "_help nsfw") {
		let embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.addField("_urban [word]", "gets the definition of a word from urban dictionary")
		message.channel.send(embed)
	}

	if (message.content === "_meme") {
        const subReddits = ["meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
		message.channel.send(embed)
		
    } else if(message.content === "_dankmeme") {
		const subReddits = ["dankmemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
		message.channel.send(embed)
	}
	let owo = qdb.fetch(`uwus_${message.guild.id}`)
	if (message.content === "uwu" || message.content === "owo") {
		qdb.add(`uwus_${message.guild.id}`, 1)
	}
})

db.connect().then(() => {
	client.db = db;
	client.login(token);
  });
