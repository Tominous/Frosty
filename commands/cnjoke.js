const Discord = require('discord.js')
const giveMeAJoke = require('discord-jokes')


module.exports = {
	name: 'cnjoke',
	description: 'a coding humor chuck norris joke',
	execute(message, args) {
        giveMeAJoke.getRandomCNJoke (function(joke) {
            message.channel.send(joke)
    });
	},
};