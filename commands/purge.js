module.exports = {
    name: "purge",
    description: "delete shit",

    execute(client, message, args) {
        let amountOfMessagses = args[0]
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you need perms bruh")
        if(!amountOfMessagses) return message.reply("how many messages to delete")

        message.channel.bulkDelete(amountOfMessagses)
        message.channel.send(`Deleted ${amountOfMessagses} messages`)
    }   
}