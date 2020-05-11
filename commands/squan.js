var Scrambo = require('scrambo');
const cube = new Scrambo();
const Discord = require('discord.js')

module.exports = {
	name: 'squan',
	description: 'get a squan scramble',
	execute(message, args) {
        var squan = cube.type("sq1").get()
        message.channel.send(squan)
	},
};