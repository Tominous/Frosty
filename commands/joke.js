const Discord = require('discord.js')
const giveMeAJoke = require('discord-jokes')

module.exports = {
	name: 'joke',
	description: 'get a joke',
	execute(message, args) {
        giveMeAJoke.getRandomDadJoke (function(joke) {
            message.channel.send(joke);
          });
	},
};