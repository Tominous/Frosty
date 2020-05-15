var Scrambo = require('scrambo');
const cube = new Scrambo();
const Discord = require('discord.js')

module.exports = {
	name: 'pyra',
	description: 'get a pyra scramble',
	execute(client,message, args) {
        var pyra = cube.type("pyram").get()
        message.channel.send(pyra)
	},
};