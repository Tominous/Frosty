module.exports = {
	name: 'ban',
	description: 'ban a user',
	execute(message, args) {
        if (!message.guild) return;


    if (message.content.startsWith('_ban')) {

      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {

          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {

              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {

              message.reply('I was unable to ban the member');

              console.error(err);
            });
        } else {

          message.reply("That user isn't in this guild!");
        }
      } else {

        message.reply("You didn't mention the user to ban!");
      }
    }
	},
};