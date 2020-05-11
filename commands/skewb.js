var Scrambo = require('scrambo');
const cube = new Scrambo();
const Discord = require('discord.js')

module.exports = {
	name: 'skewb',
	description: 'get a skewb scramble',
	execute(message, args) {
        var skewb = cube.type("skewb").get()
        message.channel.send(skewb)
	},
};